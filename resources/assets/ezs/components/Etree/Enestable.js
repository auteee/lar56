//刷新后不能自动展开问题

import {eExpandTransition} from "../transitions";
import EIcon from '../Eicon'
export default {
    name:'e-nestable',
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
        },
    },
    mounted(){
        //console.info(this.treeId);
    },
    methods:{
        genLists(trees){
            const that=this;
            return trees.map(function(item){
                //that.treeId[item['id']]=item.pid;
                if(item.children){
                    let node=that.genNode(item);
                    const clasess={'open':item.open};
                    return that.$createElement('li',
                        {'class':clasess},
                        [node,
                            that.$createElement(eExpandTransition,
                                [
                                    that.$createElement('ul',{
                                        'class':'tree-list',
                                        directives: [{
                                                name: 'show',
                                                value: item.open
                                            }]},
                                        that.genLists(item.children)
                                    )
                                ])])
                }else{
                    let leaf=that.genLeaf(item);
                    return that.$createElement('li',[leaf])
                }
            })
        },
        genNode(item){
            const children=[];
            if(item.icon){
                children.push(this.$createElement('e-icon',{'class':'h-action'},item.icon));
            }
            if(item.children.length){
                //let icon = item.open?'fa-angle-right':'fa-angle-down';
                let icon='ion-ios-arrow-down';
                children.push(this.$createElement('e-icon',{
                    'class':item.open?'node-action action':'node-action',
                    on: { click: ()=>this.click(item) },
                },icon))
            }
            children.push(this.$createElement('div',{'class': 'tree-node-title'},item.name));

            //this.$slots.node && children.push(this.$slots.node);
            //if(this.$scopedSlots.node){
            //获取插槽并向插槽插入数据
            this.$scopedSlots.node && children.push(this.$scopedSlots.node({item}));

            return this.$createElement('div', {
                'class':'tree-node link',
                ref: 'items'
            },children)
        },
        genLeaf(item){
            const children=[];
            let tag='div';
            const data={
                'class':'tree-leaf',
                props:{}
            };
            if(item.icon){
                children.push(this.$createElement('e-icon',{'class':'h-action'},item.icon));
            }

            children.push(this.$createElement('div',{'class': 'content'},item.name));
            this.$scopedSlots.leaf && children.push(this.$scopedSlots.leaf({item}));

            // if(item.to){
            //     tag='router-link';
            //     let tos;
            //     tos= item.to.indexOf('/')===0?item.to:('/'+item.to);
            //     Object.assign(data.props, {
            //         to: tos
            //     })
            // }
            return this.$createElement(tag, data,children)
        },
        getTopPid(arr,id){
            while(arr[id]){

            }
        },
        setFathersOpen(arr,pid){
            let id=pid;
            //console.info(arr[id]);
            while(arr[id]){
                console.info(arr[id]);
                id=arr[id];
            }
        },
        click(item){
            this.$set(item,'open',!item.open)
        },
    },
    render(h){
        const data = {
            'class': this.classes,
        };
        const child=[h('ul',{staticClass:'tree-list'},this.genLists(this.trees))];
        return h('nav',data,child);
    }
}