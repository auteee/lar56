
import EProgressLinear from '../Eprogress/EProgressLinear'

import DataIterable from './mixins/data-iterable'
import Header from './mixins/header'
import Tbody from './mixins/body'
import Tfoot from './mixins/footer'
import Progress from './mixins/progress'


export default {
    name:'e-data-table',
    components: { EProgressLinear },
    mixins:[DataIterable,Header,Tbody,Tfoot,Progress],
    props:{
        headers: {
            type: Array,
            default: () => []
        },
        headerText: {
            type: String,
            default: 'text'
        },
        hideHeaders: Boolean,
    },
    created(){
        this.initPagination();
    },
    mounted(){

    },
    computed: {
        classes () {
            return {
                'datatable table': true,
                'select-all': this.selectAll !== false,
            }
        },
        filteredRows () {
            return this.filteredSearchRows(this.headers)
        }
    },
    methods: {
        needsTR (row) {
            return row.length && row.find(c => c.tag === 'td' || c.tag === 'th')
        },
        genTR (children, data = {}) {
            return this.$createElement('tr', data, children)
        },

    },
    render (h) {
        const table= h('table',{
            'class':this.classes
        },[
            this.genTHead(),
            this.genTBody(),
            this.genTFoot()
        ]);
        const toolbar=[];
        if(this.search) {
            toolbar.push(h('div',{staticClass:'spacer'}));
            toolbar.push(this.genSearch());
        }
        return h('div',[
            h('div',{staticClass:'table-toolbar'},toolbar),
            h('div',{staticClass:'table-container'},[table]),
            this.genActionsFooter()
        ])
        // const tableOverflow = h('v-table-overflow', {}, [
        //     h('table', {
        //         'class': this.classes
        //     }, [
        //         this.genTHead(),
        //         this.genTBody(),
        //         this.genTFoot()
        //     ])
        // ]);
        //
        // return h('div', [
        //     tableOverflow,
        //     this.genActionsFooter()
        // ])
    }
}