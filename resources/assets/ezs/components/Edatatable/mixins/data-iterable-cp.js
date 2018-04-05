import Ebtn from '../../Ebtn'
import Eicon from '../../Eicon'
import Eselect from '../../Eforms/ESelect'
import Einput from '../../Eforms/EInput'
//import Filterable from './filterable'
// import Themeable from './themeable'
// import Loadable from './loadable'

import { consoleWarn } from '../../../util/console'

/**
 * DataIterable
 *
 * @mixin
 *
 * Base behavior for data table and data iterator
 * providing selection, pagination, sorting and filtering.
 *
 */
export default {
    name: 'data-iterable',

    components: { Ebtn, Eicon, Eselect,Einput },

    data () {
        return {
            defaultPagination: {
                descending: false,
                page: 1,
                pageSize: 5,
                sortBy: null,
                totalRows: 0
            },
            filters:'',
            lazySearch:null,
            searchLength:0,
            expanded: {},
            actionsClasses: 'datatable-actions',
            actionsRangeControlsClasses: 'datatable-actions-controls',
            actionsSelectClasses: 'datatable-actions-select',
            actionsPaginationClasses: 'datatable-actions-pagination'
        }
    },

  //mixins: [Filterable, Loadable, Themeable],

    props: {
        expand: Boolean,
        disableInitialSort: Boolean,
        mustSort: Boolean,
        selectAll: [Boolean, String],
        value: {
            type: Array,
            default: () => []
        },
        ///////////////
        //是否带搜索选项
        search: Boolean,
        customFilter: {
            type: Function,
            default: (rows, search, filter) => {
                search = search.toString().toLowerCase();
                if (search.trim() === '') return rows;

                return rows.filter(i => (
                    Object.keys(i).some(j => filter(i[j], search))
                ))
            }
        },
        //format search
        filter: {
            type: Function,
            default: (val, search) => {
                return val != null &&
                    typeof val !== 'boolean' &&
                    val.toString().toLowerCase().indexOf(search) !== -1
            }
        },
        hideActions: Boolean, //隐藏角页控制
        noResultsText: {
            type: String,
            default: '获取数据失败或无相关数据'
        },
        //默认排序
        customSort: {
            type: Function,
            default: (items, index, isDescending) => {
                if (index === null) return items;

                return items.sort((a, b) => {
                    let sortA = a[index];
                    let sortB = b[index];

                    if (isDescending) {
                        [sortA, sortB] = [sortB, sortA]
                    }
                    // Check if both are numbers
                    if (!isNaN(sortA) && !isNaN(sortB)) {
                        return sortA - sortB
                    }
                    // Check if both cannot be evaluated
                    if (sortA === null && sortB === null) {
                        return 0
                    }
                    [sortA, sortB] = [sortA, sortB]
                        .map(s => (
                            (s || '').toString().toLocaleLowerCase()
                        ));

                    if (sortA > sortB) return 1;
                    if (sortA < sortB) return -1;

                    return 0
                })
            }
        },
        //分页
        pagination: {
            type: Object,
            default: () => {}
        },
        pageSizes: {
            type: Array,
            default () {
                return [5, 10, 25, { title: '全部', value: -1 }]
            }
        },
        ///////tbody 行
        rows:{
            type: Array,
            required: true,
            default: () => []
        },
        rowKey: {
            type: String,
            default: 'id'
        },
        rowsPageText: {
            type: String,
            default: '每页显示:'
        },
        //手动设置项目的总数，就可以禁用内置排序和分页，与分页属性一起使用，以启用服务端排序和分页。
        totalRows: {
            type: Number,
            default: null
        },
        //无数据时默认显示
        noDataText: {
            type: String,
            default: '无相关数据'
        }
    },
    computed: {
        //计算角页
        computedPagination () {
            return this.hasPagination
                ? this.pagination
                : this.defaultPagination
        },
        hasPagination () {
            let pagination = this.pagination || {};
            return Object.keys(pagination).length > 0
        },
        getPage () {
            const  { pageSize }  = this.computedPagination;
            return pageSize === Object(pageSize)
                ? pageSize.value
                : pageSize
        },
        pageStart () {
            return this.getPage === -1
                ? 0
                : (this.computedPagination.page - 1) * this.getPage
        },
        pageStop () {
            return this.getPage === -1
                ? this.rowsLength
                : this.computedPagination.page * this.getPage
        },
        //
        hasSearch(){
            return typeof this.lazySearch !== 'undefined' &&
                this.lazySearch !== null;
        },
        rowsLength () {
            if(this.hasSearch){
                return this.searchLength
            }
            return this.totalRows || this.rows.length
        },
        //
        selected () {
            const selected = {};
            for (let index = 0; index < this.value.length; index++) {
                selected[this.value[index][this.rowKey]] = true
            }
            return selected
        },
        hasSelectAll () {
            return this.selectAll !== undefined && this.selectAll !== false
        },
        indeterminate () {
            return this.hasSelectAll && this.someRows && !this.everyRows
        },
        everyRows () {
            return this.filteredRows.length &&
                this.filteredRows.every(i => this.isSelected(i))
        },
        someRows () {
            return this.filteredRows.some(i => this.isSelected(i))
        },
        //获取tableRows选项，
        tableRows () {
            if(this.lazySearch==null || this.lazySearch===''){
                return this.rows;
            }
            return this.filteredSearchRows();
        },
    },

    watch: {
        lazySearch () {
            this.updatePagination({ page: 1, totalRows: this.rowsLength })
        }
    },
    methods: {
        isSelected (item) {
            return this.selected[item[this.rowKey]]
        },
        hasSelected(item){

        },
        toggle (value) {
            const selected = Object.assign({}, this.selected);
            for (let index = 0; index < this.filteredRows.length; index++) {
                selected[this.filteredRows[index][this.rowKey]] = value
            }

            this.$emit('input', this.rows.filter(i => (
                selected[i[this.rowKey]]))
            )
        },
        //搜索/查询
        filteredSearchRows (...additionalFilterArgs) {
            if (this.totalRows) return this.rows;

            let items = this.rows.slice();

            if (this.hasSearch) {
                items = this.customFilter(items, this.lazySearch, this.filter, ...additionalFilterArgs);
                this.searchLength=items.length;
            }

            items = this.customSort(
                items,
                this.computedPagination.sortBy,
                this.computedPagination.descending
            );
            return this.hideActions &&
            !this.hasPagination
                ? items
                : items.slice(this.pageStart, this.pageStop)
        },
        genSearch () {
            const data = {
                props:{
                    value:this.filters,
                    appendIcon:'ion-ios-search-strong',
                    placeholder: this.placeholder || '搜索',
                },
                on:{
                    input:val=>{
                        this.lazySearch=val;
                    }
                },
                key: 'input'
            };
            return this.$createElement('e-input', data)
        },
        //初始化分页信息 row,
        initPagination () {
            if (!this.pageSizes.length) {
                consoleWarn(`The prop 'page-sizes' can not be empty`, this)
            } else {
                this.defaultPagination.pageSize = this.pageSizes[0]
            }

            this.defaultPagination.totalRows = this.rowsLength;

            this.updatePagination(
                Object.assign({}, this.defaultPagination, this.pagination)
            )
        },
        updatePagination (val) {
            const pagination = this.hasPagination
                ? this.pagination
                : this.defaultPagination;
            const updatedPagination = Object.assign({}, pagination, val);
            this.$emit('update:pagination', updatedPagination);
            if (!this.hasPagination) {
                this.defaultPagination = updatedPagination
            }
        },
        // format row
        createProps (item, index) {
            const props = { item, index };
            const keyProp = this.rowKey;
            const rowKey = item[keyProp];
            Object.defineProperty(props, 'selected', {
                get: () => this.selected[item[this.rowKey]],
                set: value => {
                    if (rowKey == null) {
                        consoleWarn(`"${keyProp}" attribute must be defined for rowitem`, this)
                    }

                    let selected = this.value.slice();
                    if (value) selected.push(item);
                    else selected = selected.filter(i => i[keyProp] !== rowKey);
                    this.$emit('input', selected)
                }
            });
            Object.defineProperty(props, 'expanded', {
                get: () => this.expanded[item[this.rowKey]],
                set: value => {
                    if (rowKey == null) {
                        consoleWarn(`"${keyProp}" attribute must be defined for item`, this)
                    }

                    if (!this.expand) {
                        for (const key in this.expanded) {
                            this.expanded.hasOwnProperty(key) && this.$set(this.expanded, key, false)
                        }
                    }
                    this.$set(this.expanded, rowKey, value)
                }
            });

            return props
        },
        //获取body 行
        genBodyRows () {
            if (!this.rowsLength && !this.rows.length) {
                const noData = this.$slots['no-data'] || this.noDataText;
                return [this.genBodyEmpty(noData)]
            }
            if (!this.filteredRows.length) {
                const noResults = this.$slots['no-results'] || this.noResultsText;
                return [this.genBodyEmpty(noResults)]
            }
            return this.genFilteredRows()
        },
        ///////////////////////
        //排序 header
        sort (index) {
            const { sortBy, descending } = this.computedPagination;
            if (sortBy === null) {
                this.updatePagination({ sortBy: index, descending: false })
            } else if (sortBy === index && !descending) {
                this.updatePagination({ descending: true })
            } else if (sortBy !== index) {
                this.updatePagination({ sortBy: index, descending: false })
            } else if (!this.mustSort) {
                this.updatePagination({ sortBy: null, descending: null })
            } else {
                this.updatePagination({ sortBy: index, descending: false })
            }
        },
        /////////////////////////
        ///footer
        genActions () {
            const rangeControls = this.$createElement('div', {
                'class': this.actionsRangeControlsClasses
            }, [
                this.genPagination(),
                this.genPrevIcon(),
                this.genNextIcon()
            ]);

            return [this.$createElement('div', {
                'class': this.actionsClasses
            }, [
                this.pageSizes.length > 1 ? this.genSelect() : null,
                rangeControls
            ])]
        },
        //pagination文字
        genPagination () {
            let pagination = '–';

            if (this.rowsLength) {
                const stop = this.rowsLength < this.pageStop || this.pageStop < 0
                    ? this.rowsLength
                    : this.pageStop;

                pagination = this.$scopedSlots.pageText
                    ? this.$scopedSlots.pageText({
                        pageStart: this.pageStart + 1,
                        pageStop: stop,
                        rowsLength: this.rowsLength
                    })
                    : `当前${this.pageStart + 1}-${stop} 总计:${this.rowsLength}行`
            }

            return this.$createElement('div', {
                'class': this.actionsPaginationClasses
            }, [pagination])
        },
        //上一页
        genPrevIcon () {
            return this.$createElement('e-btn', {
                props: {
                    cs:'link-primary',
                    disabled: this.computedPagination.page === 1,
                },
                on: {
                    click: () => {
                        const page = this.computedPagination.page;
                        this.updatePagination({ page: page - 1 })
                    }
                },
                attrs: {
                    'title': this.computedPagination.page===1?'首页':'上一页' // TODO: Localization
                }
            }, [this.$createElement('e-icon', 'ion-ios-arrow-left')])
        },
        //下一页
        genNextIcon () {
            const pagination = this.computedPagination;
            const disabled = pagination.pageSize < 0 ||
                pagination.page * pagination.pageSize >= this.rowsLength ||
                this.pageStop < 0;

            return this.$createElement('e-btn', {
                props: {
                    cs:'link-primary',
                    disabled,
                },
                on: {
                    click: () => {
                        const page = this.computedPagination.page;
                        this.updatePagination({ page: page + 1 })
                    }
                },
                attrs: {
                    'title': disabled?'未页':'下一页' // TODO: Localization
                }
            }, [this.$createElement('e-icon', 'ion-ios-arrow-right')])
        },
        //每页显示行数选择
        genSelect () {
            return this.$createElement('div', {
                'class': this.actionsSelectClasses
            }, [
                this.rowsPageText,
                this.$createElement('e-select', {
                    attrs: {
                        'aria-label': this.rowsPageText
                    },
                    props: {
                        options: this.formatPageSizes(),
                        inputValue: this.computedPagination.pageSize,
                        hideDetails: true,
                        auto: true,
                        minWidth: '80px'
                    },
                    on: {
                        change: val => {
                            this.updatePagination({
                                page: 1,
                                pageSize: val
                            })
                        }
                    }
                })
            ])
        },
        formatPageSizes(){
            return this.pageSizes.map(o=>{
                if(!(typeof o === 'object')){
                    return {value:o}
                }else{
                    return o
                }
            })
        }
    }

}
