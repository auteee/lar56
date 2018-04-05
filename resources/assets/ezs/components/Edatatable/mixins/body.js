import ExpandTransitionGenerator from '../../transitions/expand-transition'
export default {
    methods: {
        genTBody () {
            const children = this.genBodyRows();

            return this.$createElement('tbody', children)
        },
        genExpandedRow (props) {
            const children = [];

            if (this.isExpanded(props.item)) {
                const expand = this.$createElement('div', {
                    class: 'datatable__expand-content',
                    key: props.item[this.itemKey]
                }, this.$scopedSlots.expand(props));

                children.push(expand)
            }

            const transition = this.$createElement('transition-group', {
                class: 'datatable__expand-col',
                attrs: { colspan: '100%' },
                props: {
                    tag: 'td'
                },
                on: ExpandTransitionGenerator('datatable__expand-col--expanded')
            }, children);

            return this.genTR([transition], { class: 'datatable__expand-row' })
        },
        genFilteredRows () {
            const rows = [];
            if (this.$scopedSlots.rows) {
                for (let index = 0, len = this.filteredRows.length; index < len; ++index) {
                    const item = this.filteredRows[index];
                    const props = this.createProps(item, index);
                    const row = this.$scopedSlots.rows(props);
                    //console.info(row);
                    rows.push(this.needsTR(row)
                        ? this.genTR(row, {
                            key: index,
                            attrs: { active: this.isSelected(item) }
                        })
                        : row);
                    if (this.$scopedSlots.expand) {
                        const expandRow = this.genExpandedRow(props);
                        rows.push(expandRow)
                    }
                }
            }else{
                for (let index = 0, len = this.filteredRows.length; index < len; ++index) {
                    const item = this.filteredRows[index];
                    let td=this.genRow(item);
                    rows.push( this.$createElement('tr', {
                            key: index,
                            attrs: { active: this.isSelected(item) }
                        },[td]));
                }
            }
            return rows
        },
        genRow(o){
            const tds=[];
            if(this.selectAll !=='undefined'){
                //let active=this.isSelected(o);
                //let box=this.genCheckbox(active);
                let val=o[this.rowKey];
                let box=this.$createElement('e-checkbox', {
                    props: {
                        cs: this.selectAll === true ? '' : this.selectAll,
                        value:val,
                        inputValue:this.selected
                    },
                    on: { change:()=> this.hasSelected(val) }
                });
                tds.push(this.$createElement('td',[box]))
            }
            for(let i=0;i<this.headers.length;i++){
                let name=this.headers[i].value;
                tds.push(this.$createElement('td',o[name]))
            }
            return tds
        },
        genCheckbox(active){
            return this.$createElement('e-checkbox',{
                props:{
                    cs: this.selectAll === true ? '' : this.selectAll,
                    inputValue: active,
                }
            });
        },
        genBodyEmpty (content) {
            if (typeof content === 'string') {
                return this.genTR([this.$createElement('td', {
                    'class': 'text-xs-center',
                    attrs: { colspan: '100%' }
                }, content)])
            } else {
                return this.needsTR(content) ? this.genTR(content) : content
            }
        }
    }
}