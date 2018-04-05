export default {
    props:{
        label:String,
        prependIcon: String,        //前置icon
        appendIcon:String,
        options:Array,
    },
    methods:{
        genOptionsList(h,options){
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
            return h('div',data,[h('e-list',{
                    props:{lists:options},
                    on:{
                        click:(option,index)=> {
                            !option.disabled && this.$emit('change',option.value);
                            this.isActive=false;
                        }
                    }
                })]);
            // const that=this;
            // return this.$createElement('ul',{
            //     staticClass:'select-options list',
            //     style:this.optionstyle,
            //     directives:[
            //         {
            //             name:'show',
            //             value:this.showing
            //         }
            //     ],
            //     ref:'options'
            // },[options.map(function(item){
            //     return that.genOption(item);
            // })]);
        },
        genOption(option){
            const data={
                staticClass:'list-item',
                'class':option.value===this.inputValue ? 'selected':'',
                on: {
                    click:(e)=>{
                        e.stopPropagation();
                        !option.disabled && this.$emit('change',option.value);
                        this.isActive=false;
                    }
                },
            };
            return this.$createElement('li',data,option.value)
        },
        genOptionText(){
            return this.$createElement('div',{staticClass:'option-text'},this.inputValue);
        },
        genSelectShowOption(){
            return this.$createElement('div',{staticClass:'option-text'},this.value);
        },
        genSelectionsAndSearch () {
            return this.$createElement('div', {
                'class': 'form-group-selections',
                style: { 'overflow': 'hidden' },
                ref: 'activator'
            }, [
                //...this.genSelections(),
                //this.genSearch()
            ])
        },


        genLabel () {
            return this.$createElement('label', {
                attrs: { for: this.$attrs.id }
            }, this.$slots.label || this.label)
        },
        genIcon (type) {

            let pre=false,app=false;
            if(type==='prependIcon')
                pre=true;
            else if(type==='appendIcon')
                app=true;
            else
                return;
            const icon=this[`${type}`];
            return this.$createElement('e-icon', {
                'class': {
                    'prepend-icon': pre,
                    'append-icon': app,
                },
            }, icon)
        },
    }
}