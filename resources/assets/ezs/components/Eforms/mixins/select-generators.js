export default {
    methods:{
        //////////////Selections
        //选项
        genSelections(){
            const children = [];
            if(this.inputValue==='' || this.inputValue===null) return;
            let genSelection;
            if (this.$scopedSlots.selection) {
                genSelection = this.genSlotSelection
            } else if (this.chips) {
                genSelection = this.genChipSelection
            } else if (this.segmented) {
                genSelection = this.genSegmentedBtn
            } else {
                genSelection = this.genOptionText
            }
            if (Array.isArray(this.inputValue)) {
                let length = this.inputValue.length;
                this.inputValue.forEach((item, i) => {
                    children.push(genSelection(item, i < length - 1, i));
                });
            }else if(typeof this.selectedItem ==='object' && this.selectedItem!==null){

                let v= this.selectedItem.hasOwnProperty('title')?this.selectedItem.title:this.selectedItem.value;
                children.push(genSelection(v));
            }else{
                children.push(genSelection(this.inputValue));
            }

            return children;

        },
        //无格式化
        genOptionText(item, notlast, index){
            return this.$createElement('div', {
                staticClass: 'option-text',
                'class': {
                    'active': index === this.selectedIndex
                },
                key: JSON.stringify(item) // Item may be an object
            }, `${item}${notlast ? ', ' : ''}`)
        },
        /////list
        genOptionsList(h,options){
            const children=[];
            const data={
                staticClass:'select-options',
                style:this.styles,
                directives:[
                    {
                        name:'show',
                        value:this.showPopList
                    }
                ],
                ref:'popself' //弹出层自身
            };
            this.autocomplete && children.push(this.genSearch());
            this.autocomplete && children.push(this.$createElement('e-divider'));
            children.push(this.genList(h,options));
            return h('div',data,children);
        },
        //搜索/查询
        genSearch () {
            const data = {
                staticClass: 'form-group-autocomplete',
                'class': {
                    'index': this.selectedIndex > -1
                },
                props:{
                    value:this.filters,
                    prependIcon:'fa fa-filter',
                    placeholder: this.placeholder || '筛选',
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
        genList(h,options){
            const data={
                staticClass:'select-list',
                style:this.optionstyle,
            };

            const _props={
                lists:options,
                checkbox:this.multiple,
                radio: this.radio && !this.multiple,
                value:this.inputValue
            };
            // if(this.multiple){
            //     //_props.value=this.inputValue
            // }
            return h('div',data,[h('e-list',{
                props:_props,
                on:{
                    click:(option)=> {
                        this.selectItem(option);
                    }
                }
            })]);
        },
    }
}