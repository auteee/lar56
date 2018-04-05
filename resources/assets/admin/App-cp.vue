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
        watch:{
            $route(){
                this.$nextTick(() => {
                    this.initGoById();
                });
            }
        },
        mounted(){
            //console.info(el.getBoundingClientRect());
            // document.getElementById('e-main').addEventListener('scroll',(e)=>{
            //     this.showGoto=e.target.scrollTop>100;
            // });
            document.getElementById('e-main').addEventListener('scroll',this.currentPageYOffset);
            this.initGoById();
        },
        beforeDestroy(){
            document.getElementById('e-main').removeEventListener('scroll',this.currentPageYOffset);
        },
        methods:{
            //加载定位信息
            initGoById(){
                this.backToTop();
                this.introduction=document.getElementById('introduction');
                this.usage=document.getElementById('usage');
                this.api=document.getElementById('api');
                this.examples=document.getElementById('examples');
            },
            //滚动到定位
            goToAnchor(item){
                this.active=item.value;
                this.$ezs.eGoTo(item.value);
            },
            // goTos(id){
            //     this.active=id;
            //     this.$ezs.eGoTo(id);
            // },
            //滚动事件
            currentPageYOffset (e) {
                let ets=e.target.scrollTop;
                this.showGoto=ets>100;
                if(this.timeoutRef){
                    clearTimeout(this.timeoutRef);
                }
                this.timeoutRef = setTimeout(this.setActive(ets) , 100);
            },
            //设置右则导航活动状态
            setActive(ets){
                if(this.introduction && ets>this.introduction.offsetTop){
                    this.active='introduction'
                }
                if(this.usage && ets>(this.usage.offsetTop-80)){
                    this.active='usage'
                }
                if(this.api && ets>(this.api.offsetTop-80)){
                    this.active='api'
                }
                if(this.examples && ets>(this.examples.offsetTop-80)){
                    this.active='examples'
                }
            },
            backToTop(){
                this.$ezs.eGoTo();
                this.active='introduction';
            }
        }
    }
</script>