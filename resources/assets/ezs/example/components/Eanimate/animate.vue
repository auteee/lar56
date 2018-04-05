
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">过度动画效果</h1>
            <e-well tag="p">
                流畅的动画有助于给用户界面带来很棒的感觉。
                使用Vue的过渡系统和可复用的功能组件，您可以轻松地控制应用程序的动画效果。
                大多数组件可以通过transition属性来改变他们的过渡。ezs 对第三方animate.css
                动效进行了封装， 自身也捎带了几个动效。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>
                    vue自带<code>transition</code>结合了animate.css的动事效果<br/>
                    *注*<code>transition</code>各项props可参考 vue官方文档，animate可参考animate.css官方文档或者下面示例<br/>
                    *注*需要在html的header部分引入animate.css ezs未对animate.css样式进行整合
                </e-well>
                <e-container>
                    <e-row>
                        <e-col d-flex justify-center><e-btn cs="bg-primary" @click="mod1 = !mod1">打开/关闭</e-btn></e-col>
                    </e-row>
                    <transition name="myclass" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                        <h1 v-show="mod1">Animate.css</h1>
                    </transition>
                </e-container>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <e-tabs>
                <e-tabs-header>
                    <e-tabs-nav v-for="(item,i) in apiDataTabs" :key="i">{{item.title}}</e-tabs-nav>
                    <e-tabs-slider cs="bg-error"></e-tabs-slider>
                </e-tabs-header>
                <e-toolbar>
                    <e-select :options="apiSelet" v-model="apiSeletValue"></e-select>
                    <e-spacer></e-spacer>
                    <e-input append-icon="ion-ios-search" placeholder="查询"></e-input>
                </e-toolbar>
                <e-tabs-body>
                    <e-tabs-content v-for="(item,i) in apiDataTabs" :key="i">
                        <e-container>
                            <e-row wrap column class="api-data" v-for="(o,k) in item.value" :key="k">
                                <e-row class="header">
                                    <e-col md4>
                                        <div class="api-data-title">名称</div>
                                        <div class="api-data-value">{{o.name}}</div>
                                    </e-col>
                                    <e-col md4 v-if="o.default">
                                        <div class="api-data-title">默认值</div>
                                        <div class="api-data-value">{{o.default}}</div>
                                    </e-col>
                                    <e-col md4 v-if="o.type">
                                        <div class="api-data-title">类型</div>
                                        <div class="api-data-value">{{o.type}}</div>
                                    </e-col>
                                </e-row>
                                <e-row class="api-data-desc">{{o.desc}}</e-row>
                            </e-row>
                        </e-container>
                    </e-tabs-content>
                </e-tabs-body>
            </e-tabs>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#vue结合animate.css">
                <e-well>在ezs中<code>e-animate</code>是对vue的transition和animate.css的封装，用法如下</e-well>
                <e-container>
                    <e-row>
                        <e-col d-flex justify-center>
                            <e-btn cs="bg-primary" @click="mod2 = !mod2">打开/关闭</e-btn>
                        </e-col>
                    </e-row>
                    <e-animate in="zoomIn" out="zoomOut">
                        <e-well v-show="mod2">{{loushiming}}</e-well>
                    </e-animate>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#vue 实现animate.css官方实例">
                <e-well>vue模仿animate.css官方实例</e-well>
                <e-row wrap text-xs-c justify-center align-center style="padding-top:20px;">
                    <e-col xs12>
                        <div id="animate" :class="animateValue"><h1 class="gradient">Animate.css</h1></div>
                    </e-col>
                    <e-col xs4>
                        <e-select :options="animateList" v-model="animateSelectValue"></e-select>
                    </e-col>
                    <e-col xs4 >
                        <e-btn @click="animateIt" cs="bg-primary">动一动它</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <!--ex3-->
            <e-card>
                <e-card-header>
                    <div class="title">#创建您自己的</div>
                </e-card-header>
                <e-card-body>
                    <e-well>您可以用Vuetify的过渡辅助器函数来创建您自己的自定义的过渡效果，
                        这个函数会返回一个可以导入到Vue的对象。使用Vue的函数式组件配置将确保您的过渡效果尽可能高效
                        。只需要导入函数：
                    </e-well>
                    <e-markdown-it v-model="exArrObj[3]['js']" language="js"></e-markdown-it>
                    <e-well>其中<code>createSimpleTransition</code>函数接受1个参数，即名称。这将是您可以与您的样式挂钩的名称。
                        这是一个展示<code>e-fade-transition</code>的示例：</e-well>
                    <e-markdown-it v-model="exArrObj[3]['style']" language="style"></e-markdown-it>
                </e-card-body>
            </e-card>
        </section>
        <section>
            <e-well>
                未来补充 ：alert 设置默认动画效果,现在是第三方css3动画animation.css 是否改为内置？
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./apiData.js"    //apiData的相关数据
    import {getTemCodeArr} from "../../helpers.js";
    import animateArr  from "./animateArr.js";

    import exa from "../exa.vue"
    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        components:{exa},
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                apiSelet:[{title:'e-animate',value:'e-animate'}],
                apiSeletValue:'e-animate',  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:true,
                mod2:true,
                animateList:animateArr,
                animateSelectValue:'bounce',
                animateValue:'',
                loushiming: '山不在高，有仙则名。水不在深，有龙则灵。' +
                '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                '谈笑有鸿儒，往来无白丁。' +
                '可以调素琴，阅金经。' +
                '无丝竹之乱耳，无案牍之劳形。' +
                '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
            }
        },
        computed:{
            apiDataTabs(){
                return apiData[this.apiSeletValue];
            },
            el(){
                return document.getElementById('animate');
            },
            animations(){
                let obj={
                    animation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    MozAnimation: 'mozAnimationEnd',
                    WebkitAnimation: 'webkitAnimationEnd',
                };
                for (let t in obj) {
                    if (this.el.style[t] !== undefined) {
                        return obj[t];
                    }
                }
            }
        },
        watch:{
            animateSelectValue(val){
                this.animateValue='animated '+val;
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
        },
        mounted(){
            this.animateValue='animated '+this.animateSelectValue;
            this.el.addEventListener('animationend',()=>{
                this.animateValue='';
            })
        },
        methods:{
            animateIt(){
                this.animateValue='animated '+this.animateSelectValue;
                //this.addOnceEventListener(this.el,'transitionend',this.animateDone);
            },
            addOnceEventListener (el, event, cb) {
                let once = () => {
                    cb();
                    el.removeEventListener(event, once, false)
                };

                el.addEventListener(event, once, false)
            }
        }
    }
</script>