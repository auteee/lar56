
<template>
    <e-app>
        <e-app-header class="bg-primary">
            <e-btn cs="circle link-secondary" @click="drawer=!drawer">
                <e-icon>ion-android-menu</e-icon>
            </e-btn>
            <e-spacer></e-spacer>
            <e-btn cs="circle link-secondary" @click="logout"><e-icon>ion-log-out</e-icon></e-btn>
        </e-app-header>
        <e-app-aside v-model="drawer">
            <e-tree :trees="$store.state.menu.menus"></e-tree>
        </e-app-aside>
        <e-app-main class="bgc-danlan">
            <router-view></router-view>
            <e-animate in="zoomIn" out="zoomOut">
                <e-btn @click.native="backToTop" cs="circle raised" v-if="showGoto" style="position: fixed;bottom:20px;right:20px;z-index:200;">
                    <e-icon>ion-android-arrow-up</e-icon>
                </e-btn>
            </e-animate>
        </e-app-main>
    </e-app>
</template>

<script>
    //import menu from './menu'
    //import EAnimate from "./components/transitions/animate";
    //菜单在用户信息初始化后初始化是一个全局变量
    export default{
        //props:['mini'],
        //components: {EAnimate},
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
                //trees:menu,
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
        beforeMount(){

            //this.menus=this.$store.state.menu.menus;
            //this.getMenu();
        },
        mounted(){
            //console.info(this.$store.state.menu);
            //console.info(el.getBoundingClientRect());
            // document.getElementById('e-main').addEventListener('scroll',(e)=>{
            //     this.showGoto=e.target.scrollTop>100;
            // });
            //document.getElementById('e-main').addEventListener('scroll',this.currentPageYOffset);
            //this.initGoById();
        },
        beforeDestroy(){
            //document.getElementById('e-main').removeEventListener('scroll',this.currentPageYOffset);
        },
        methods:{
            //获取菜单
            getMenu(){
                this.$store.dispatch('GetPermissionMenu');
                // this.$store.dispatch('GetPermissionMenu').then((response)=>{
                //     //this.menus=response.data;
                // }).catch((error)=>{
                //     console.info(error);
                // })
            },
            //退出登录
            logout(){
                this.$store.dispatch('LogOut').then((response)=>{
                    if(response.data.success===1){
                        this.$router.push({path:'/login'});
                    }else{
                        this.message=response.data.message;
                        this.isError=true;
                    }
                }).catch((e)=>{
                    console.info(e);
                })
            },





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