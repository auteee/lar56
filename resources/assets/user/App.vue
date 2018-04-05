<template>
    <router-view></router-view>
</template>

<script>
    //import menu from './menu'
    //import EAnimate from "./components/transitions/animate";
    export default{
        //props:['mini'],
        data(){
            return{
                rightNav:[
                    {title:'简介',value:'introduction'},
                    {title:'实例',value:'usage'},
                    {title:'API',value:'api'},
                    {title:'示例',value:'examples'},
                ],
                //四个定位信息 byId
                introduction:null,
                usage:null,
                api:null,
                examples:null,
                //右则导航默认活动状态
                active:'introduction',
                //回到顶部按钮
                showGoto:false,
                //打开关闭左则导航
                drawer:false,
                //初始化左则导航
                timeoutRef:null
            }
        },

        mounted(){
            //console.info(el.getBoundingClientRect());
            // document.getElementById('e-main').addEventListener('scroll',(e)=>{
            //     this.showGoto=e.target.scrollTop>100;
            // });
        },
    }
</script>