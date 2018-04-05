//刷新后不能自动展开问题

import {eExpandTransition} from "../transitions";
import EIcon from '../Eicon'
export default {
    name:'e-tree',
    components: {
        EIcon
    },
    data(){
        return {
            treeId:[]
        }
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
        // treeId(){
        //     let treeIdArr=[];
        //     for(let i=0;i<this.trees.length;i++){
        //         console.info(this.trees[i]['id']);
        //         treeIdArr[this.trees[i]['id']]=this.trees[i]['pid'];
        //     }
        //     //console.info(treeId);
        //     return treeIdArr;
        // }
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
                    let link=that.genAlink(item);
                    const clasess={'open':item.open};
                    return that.$createElement('li',
                        {'class':clasess,},
                        [link,
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
                    let linkTo=that.genAlinkTo(item);
                    return that.$createElement('li',[linkTo])
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
            //console.info(this.$route);
            //this.$route.name===item.name && !!item.pid && this.setFathersOpen(this.treeId,item.pid);
            // if(this.$route.name===item.name && !!item.pid){
            //     //console.info(this.$route);
            //     this.setFathersOpen(this.trees,item.id);
            // }
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
            // if(arr['pid']==pid){
            //     let id=arr['pid'];
            //     console.info(id);
            //     this.setFathersOpen(arr,id);
            // }
            // while(arr[id]){
            //     console.info(id);
            //     id=arr[pid];
            // }
        },
        click(item){
            this.$set(item,'open',!item.open)
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