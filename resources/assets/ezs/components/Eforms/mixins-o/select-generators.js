export default {
    props:{
        label:String,
        prependIcon: String,        //前置icon
        appendIcon:String,
        options:Array,
        placeholder: String,
    },
    methods:{
        genLabel () {
            return this.$createElement('label', {
                attrs: { for: this.$attrs.id }
            }, this.$slots.label || this.label)
        },
        //////////////Selections
        //已选选项和搜索项
        genSelectionsAndSearch () {
            return this.$createElement('div', {
                'class': 'form-group-selections',
                style: { 'overflow': 'hidden' },
                ref: 'activator'
            }, [
                this.genSelections(),
                //this.genSearch()
            ])
        },

        //选项
        genSelections(){
            //if (this.hideSelections) return [];
            if (Array.isArray(this.inputValue)) {
                const children = [];
                const chips = this.chips;
                const slots = this.$scopedSlots.selection;
                const length = this.inputValue.length;
                this.inputValue.forEach((item, i) => {
                    if (slots) {
                        children.push(this.genSlotSelection(item, i))
                    } else if (chips) {
                        children.push(this.genChipSelection(item, i))
                    } else if (this.segmented) {
                        children.push(this.genSegmentedBtn(item, i))
                    } else {
                        children.push(this.genOptionText(item, i < length - 1, i))
                    }
                });

                return children
            }

            return this.$createElement('div',{staticClass:'option-text'},this.inputValue);

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
                directives:[
                    {
                        name:'show',
                        value:this.showing
                    }
                ],
                ref:'options'
            };
            this.autocomplete && children.push(this.genSearch());
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
                    prependIcon:'fa-filter',
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
            //console.info(this.inputValue);
            const _props={
                lists:options,
                checkbox:this.multiple,
                //checks:this.inputValue
            };
            if(this.multiple){
                _props.checks=this.inputValue
            }
            return h('div',data,[h('e-list',{
                props:_props,
                on:{
                    click:(option)=> {
                        this.selectItem(option);
                    }
                }
            })]);
        },

        ///////////////////////////////
        genIcon(icon,type,css){

            let pre=false,app=false;
            if(type==='prependIcon')
                pre=true;
            else if(type==='appendIcon')
                app=true;
            else
                return this.$createElement('e-icon',{staticClass:css},icon);

            return this.$createElement('e-icon', {
                'class': {
                    'prepend-icon': pre,
                    'append-icon': app,
                },
            }, icon)
        },
    }
}