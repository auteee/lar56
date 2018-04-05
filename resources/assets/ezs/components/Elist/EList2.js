import {eExpandTransition} from "../transitions";
import EIcon from '../Eicon'
import EAvatar from '../Eavatar'
export default {
    name:'e-list',
    components: {
        EIcon,EAvatar
    },
    props:{
        lists:Array,
        twoline:Boolean,
        threeline:Boolean,
        multiline:Boolean,
        cs:String,
    },
    computed:{
        classes () {
            let classes={
                'list': true,
                'dense': this.dense,
                'two-line':this.twoline,
                'three-line':this.threeline,
                'multi-line': this.multiline
            };
            if(this.cs){
                classes[this.cs]=true;
            }
            return classes;
        }
    },
    watch: {
    },
    methods:{
        genContent(item){
            const children=[];
            const listHeader=[],listBody=[],listFooter=[]; //分成三部分以实现顺序配置
            //配置config 实现排序
            // for(let key in item){
            //     let capitalize = key.charAt(0).toUpperCase() + key.slice(1);
            //     console.info(capitalize);
            //     let c=this[`gen${capitalize}`](item[key]);
            //     console.info(c);
            //     if(key=='title' || key=='descs'){
            //         content.push([this[`gen${capitalize}`](item[key])]);
            //         children.push(this.$createElement('div',{staticClass:'list-content'},content));
            //     }
            //     children.push(this[`gen${capitalize}`](item[key]));
            // }
            item.avatar && children.push(this.genAvatar(item.avatar));
            item.icon && children.push(this.genIcon(item.icon,'list-icon'));

            item.title && listBody.push(this.genTitle(item.title));
            item.descs && (this.multiline || this.twoline || this.threeline) && listBody.push(this.genDescription(item.descs));
            children.push(this.$createElement('div',{staticClass:'list-content'},listBody));

            item.action && children.push(this.genIcon(item.action,'list-action'));

            return children;
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
        },
        genLists(h,lists){
            const that=this;
            return lists.map(function(item,index){
                if(item.header){
                    return h('li',{
                        staticClass:'list-header',
                        domProps: {
                            innerHTML: item.header
                        },
                    });
                }else{
                    const data={staticClass:'list-item'};
                    if(item.callback){
                        const callback= item.callback;
                        data.on={
                            click: e => {
                                if (!callback) return;
                                e.stopPropagation();
                                callback(item,index)
                            }
                        }
                    }else if(that.$listeners.click){
                        data.on={
                            click:()=>{
                                that.$emit('click',item,index)
                            }
                        }
                    }
                    return h('li',data,that.genContent(item));
                }

            })
        },
        genAlink(item){
            const children=[];
            if(item.icon){
                children.push(this.$createElement('e-icon',{'class':'h-action'},item.icon));
            }

            children.push(this.$createElement('span',{'class': 'content'},item.name));
            if(item.children.length){
                let icon = item.open?'fa-angle-right':'fa-angle-down';
                children.push(this.$createElement('e-icon',{'class':'action'},icon))
            }


            return this.$createElement('a', {
                'class':'list-title link',
                on: { click: ()=>this.click(item) },
                ref: 'items'
            },children)
        },
        genAlinkTo(item){
            const children=[];
            let tag='a';
            const data={
                'class':'list-title link',
                props:{}
            };
            if(item.icon){
                children.push(this.$createElement('e-icon',{'class':'h-action'},item.icon));
            }

            children.push(this.$createElement('span',{'class': 'content'},item.name));

            if(item.to){
                tag='router-link';
                let tos;
                tos= item.to.indexOf('/')===0?item.to:('/'+item.to);
                Object.assign(data.props, {
                    to: tos
                })
            }
            return this.$createElement(tag, data,children)
        },
        click(item){
            this.$set(item,'open',!item.open)

            //console.info(this.$el)
        },
    },
    render(h){
        const data = {
            'class': this.classes,
        };
        return h('ul',data,this.genLists(h,this.lists));
    }
}