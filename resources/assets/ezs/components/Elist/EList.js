//import {eExpandTransition} from "../transitions";
import EIcon from '../Eicon'
import EAvatar from '../Eavatar'
import  ECheckbox  from '../Eforms/ECheckbox'
export default {
    name:'e-list',
    components: {
        EIcon,EAvatar,ECheckbox
    },
    data(){
        return{
            listsIndex:null,
        }
    },
    props:{
        cs:String,
        twoline:Boolean,
        threeline:Boolean,
        multiline:Boolean,
        checkbox:Boolean,           //checkbox
        radio:Boolean,              //radio
        activeClass:{
            type: String,
            default:'primary'
        },
        eActive:Boolean,  //开启点击后activeClass状态
        //lists:[{title:'',value:''}]
        lists:[Array,Object],
        value:{ required: false },
    },
    computed:{
        classes () {
            return{
                'list': true,
                'two-line':this.twoline,
                'three-line':this.threeline,
                'multi-line':this.multiline,
                [this.cs]:this.cs
            };
        },
    },
    methods:{
        genContent(item,index){
            let active='';
            if(index===this.listsIndex || (item.value===this.value && this.value!==undefined)){
                active=this.activeClass
            }
            const data={
                staticClass:'list-item',
                'class':active
            };
            //if(!this.checkbox){
            if(item.callback){      //自定义回调事件
                const callback=item.callback;
                data.on={
                    click: e => {
                        if (typeof callback!=='function') return;
                        e.stopPropagation();
                        if(this.eActive) this.listsIndex=index;
                        this.$emit('input',item.value);
                        callback(item,index)
                    }
                }
            }else if(this.checkbox){
                data.on={
                    click:(e)=>{
                        e.stopPropagation();
                        this.$emit('click',item,index);
                        if(this.eActive) this.listsIndex=index;
                        const i = this.value.indexOf(item.value);
                        i===-1 && this.value.push(item.value) || this.value.splice(i, 1);
                        this.$emit('input', this.value);
                    }
                }

            }else{
                data.on={
                    click:(e)=>{
                        e.stopPropagation();
                        this.$emit('click',item,index);
                        if(this.eActive) this.listsIndex=index;
                        this.$emit('input', item.value);
                    }
                }
            }
            //}

            const children=[];
            const listHeader=[],listBody=[],listFooter=[]; //分成三部分以实现顺序配置
            item.avatar && children.push(this.genAvatar(item.avatar));
            item.icon && children.push(this.genIcon(item.icon,'list-icon'));
            if(this.radio && !item.icon){
                let v=(typeof(this.value) ==='object')?this.value.value:this.value;
                let _icon= v===item.value?'ion-android-radio-button-on':'ion-android-radio-button-off';
                children.push(this.genIcon(_icon,'list-icon'));
            }
            if(this.checkbox){
                if(!Array.isArray(this.value)){
                    console.info("list 的checkbox 选项需要v-model绑定数组值");
                    return ;
                }
                const active = this.value.indexOf(item.value) !== -1;
                children.push(this.genCheckbox(item,active));
            }else{
                item.title && listBody.push(this.genTitle(item.title));
                item.value && !item.title && listBody.push(this.genTitle(item.value));
                item.descs && (this.twoline || this.threeline || this.multiline) && listBody.push(this.genDescription(item.descs));
                children.push(this.$createElement('div',{staticClass:'list-content'},listBody));
            }
            item.action && children.push(this.genIcon(item.action,'list-action'));
            return this.$createElement('li',data,children);
        },
        genCheckbox(item,active){
            return this.$createElement('e-checkbox',{
                props:{
                    cs:active?this.activeClass:'',
                    inputValue:active,
                    label:item.title
                },
            })
        },
        genAvatar(avatar){
            //let img=this.$createElement('img',{attrs:{src:avatar}});
            let img="<img src='"+avatar+"' />";
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
        genIcon(icon,css){
            return this.$createElement('e-icon',{staticClass:css},icon);
        }
    },
    render(h){
        const data = {
            'class': this.classes,
        };
        //return h('ul',data,this.genLists(h,this.lists));

        const children = this.lists.map((o,index) => {
            if (o.header){
                return h('li',{
                    staticClass:'list-header',
                    domProps: {
                        innerHTML: o.header
                    },
                });
            }
            if (o.divider) return h('e-divider',{staticClass:o.css?o.css:'divider-inster'});
            //else return this.genTile(o)
            return this.genContent(o,index);
        });

        return h('ul',data,children);
    }
}