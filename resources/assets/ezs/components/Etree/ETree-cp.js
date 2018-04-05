import {eExpandTransition} from "../transitions";
import EIcon from '../Eicon'
export default {
    name:'e-tree',
    components: {
        EIcon
    },
    props:{
        trees:Array
    },
    computed:{
        classes () {
            return {
                'tree': true,
            }
        }
    },
    watch: {
        lists:{
            deep: true,
            handler () {

            }
        }
    },
    methods:{
        genLists(trees){
            const that=this;
            return trees.map(function(item){
                if(item.children){
                    const sub=[];
                    sub.push(that.genAlink(item));
                    const clasess={'open':item.open};
                    //const dh=that.$createElement('eExpandTransition')
                    return that.$createElement('li',
                        {'class':clasess,},
                        [sub,
                            that.$createElement(eExpandTransition,
                                [
                                    that.$createElement('ul',{directives: [{
                                                name: 'show',
                                                value: item.open
                                            }]},
                                        that.genLists(item.children)
                                    )
                                ])])
                }else{
                    const sub=[];
                    sub.push(that.genAlinkTo(item));
                    return that.$createElement('li',sub)
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
                'class':'tree-title link',
                on: { click: ()=>this.click(item) },
                ref: 'items'
            },children)
        },
        genAlinkTo(item){
            const children=[];
            let tag='a';
            const data={
                'class':'tree-title link',
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
        const child=[h('ul',this.genLists(this.trees))];
        return h('nav',data,child);
    }
}