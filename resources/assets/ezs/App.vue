
<template>
    <e-app>
        <e-app-header class="bg-primary">
            <e-btn cs="circle link-secondary" @click="drawer=!drawer"><e-icon>ion-android-menu</e-icon></e-btn>
        </e-app-header>
        <e-app-aside v-model="drawer">
            <e-tree :trees="trees"></e-tree>
        </e-app-aside>
        <e-app-main class="bgc-danlan">
            <e-container>
                <e-row>
                    <e-col xs12 md10>
                        <router-view></router-view>
                    </e-col>
                    <e-col md2 hidden-sm-and-down>
                        <!--<nav>-->
                            <!--<ul class="chuizhi-nav">-->
                                <!--<li><a class="subheading" :class="active==='introduction'?'active':''" @click="goTos('introduction')">简介</a></li>-->
                                <!--<li><a class="subheading" :class="active==='usage'?'active':''" @click="goTos('usage')">实例</a></li>-->
                                <!--<li><a class="subheading" :class="active==='api'?'active':''" @click="goTos('api')">API</a></li>-->
                                <!--<li><a class="subheading" :class="active==='examples'?'active':''" @click="goTos('examples')">示例</a></li>-->
                            <!--</ul>-->
                        <!--</nav>-->
                        <nav>
                            <e-list :lists="rightNav" cs="chuizhi-nav" @click="goToAnchor" v-model="active"></e-list>
                        </nav>
                    </e-col>
                </e-row>
            </e-container>
            <e-animate in="zoomIn" out="zoomOut">
                <e-btn @click.native="backToTop" cs="circle raised" v-if="showGoto" style="position: fixed;bottom:20px;right:20px;z-index:200;">
                    <e-icon>ion-android-arrow-up</e-icon>
                </e-btn>
            </e-animate>
        </e-app-main>
    </e-app>
</template>

<script>
    import menu from './menu'
    import EAnimate from "./components/transitions/animate";
    export default{
        //props:['mini'],
        components: {EAnimate},
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
                trees:menu,
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