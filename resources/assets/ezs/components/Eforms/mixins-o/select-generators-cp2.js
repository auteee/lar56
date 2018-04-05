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
                style:this.optionstyle,
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
                staticClass:'select-options',
                style:this.optionstyle,
                directives:[
                    {
                        name:'show',
                        value:this.showing
                    }
                ],
                ref:'options'
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
        genList1(h,lists){
            const data={
                staticClass:'list'
            };
            const children = lists.map(o => {
                if (o.header){
                    return h('li',{
                        staticClass:'list-header',
                        domProps: {
                            innerHTML: o.header
                        },
                    });
                }
                //if (o.divider) return this.genDivider(o);
                //else return this.genTile(o)
                return this.genContent(o);
            });

            return h('ul',data,children);
        },
        genContent(item){
            const data={staticClass:'list-item'};
            //if(!this.checkbox){
            data.on={
                click:(e)=>{
                    e.stopPropagation();
                    this.selectItem(item)
                    //that.$emit('click',item,index)
                }
            };
            //}
            const children=[];
            const listHeader=[],listBody=[],listFooter=[]; //分成三部分以实现顺序配置
            item.avatar && children.push(this.genAvatar(item.avatar));
            item.icon && children.push(this.genIcon(item.icon,'list-icon'));

            if(this.multiple){
                //console.info(this.inputValue);
                const active = this.inputValue.indexOf(item.value) !== -1;  //checkbox 用于多选
                children.push(this.genCheckbox(item,active));
            }else{
                item.title && listBody.push(this.genTitle(item.title));
                item.value && !item.title && listBody.push(this.genValue(item.value));
                item.descs && (this.multiline || this.twoline || this.threeline) && listBody.push(this.genDescription(item.descs));
                children.push(this.$createElement('div',{staticClass:'list-content'},listBody));
            }
            item.action && children.push(this.genIcon(item.action,'list-action'));

            return this.$createElement('li',data,children);
        },
        genCheckbox(item,active){

            return this.$createElement('e-checkbox',{
                props:{
                    inputValue:active,
                    label:item.title
                },
            })
        },
        genAvatar(avatar){
            //let img=this.$createElement('img',{attrs:{src:avatar}});
            let img="<img src='"+avatar+"'>";
            return this.$createElement('e-avatar',{
                staticClass:'list-avatar',
                domProps: {
                    innerHTML: img
                },
            });
        },
        genValue(value){
            return this.$createElement('div', {staticClass:'list-value'},value);
        },
        genTitle(title){
            return this.$createElement('div', {
                staticClass:'list-title',
                domProps: {
                    innerHTML: title
                },
            });
        },
        genDescription(descs){
            return this.$createElement('div',{
                staticClass:'list-desc',
                domProps: {
                    innerHTML: descs
                },
            });
        },
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