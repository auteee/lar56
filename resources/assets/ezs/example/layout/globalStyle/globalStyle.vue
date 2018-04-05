
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">ezs全局可用样式</h1>
            <e-well tag="p">
                <code>色彩</code>本章节单独将色彩样式提出来写，预定好色彩包，开箱即可用
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    白色字透明底色，黑色字透明底色
                    彩色背景白色字bg-color-w，彩色背景黑色字
                    bgb-color 背景色黑字 bgw-color 背景色白字 <br/>
                    bgbh-color/bgwh-color 背景色黑字/白字+鼠标滑过效果， <br/>
                    outline-color 带边框颜色字 outlineh-red 带边框颜色字+鼠标滑过效果<br/>
                    tmwh-color 透明背景+滑过效果<br/>
                    .circle.color 圆形+动效

                    <e-btn cs="bgb-red">测试</e-btn>
                    <e-btn cs="bgw-red">测试</e-btn>
                    <e-btn cs="bgbh-red">测试</e-btn>
                    <e-btn cs="bgwh-red">测试</e-btn>
                    <e-btn cs="outline-red">测试</e-btn>
                    <e-btn cs="outlineh-red">测试</e-btn>
                    <e-btn cs="red circle">测</e-btn>
                    <e-btn cs="red circle x-large">测</e-btn>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#可关闭">
                <e-container grid-list-xl text-xs-c>
                    <e-well><code>v-model</code>可以控制提示框的状态。如果您不想分配一个v-model，只显示警报，也可以简单地分配属性值。</e-well>
                    <e-alert type="success" v-model="mod1" closed>这是alert的测试</e-alert>
                    <e-btn cs="bg-primary" v-if="!mod1" @click="mod1 = true">打开提示框</e-btn>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#自定义图标 / 无图标">
                <e-container>
                    <p>您可以轻松分配一个自定义图标或把他们全部删除。</p>
                    <e-alert value="true" icon="fa fa-home" cs="bg-primary">这是alert的测试</e-alert>
                    <e-alert value="true" cs="bg-error">这是alert的测试</e-alert>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#动画效果">
                <e-container>
                    <p>您可以把自定义过渡应用于提示框的显示/隐藏。</p>
                    <e-row>
                        <e-col d-flex justify-center><e-btn cs="bg-primary" @click="mod2 = !mod2">打开/关闭</e-btn></e-col>
                    </e-row>
                    <e-alert v-model="mod2" cs="bg-error" :animate="['zoomIn','zoomOut']">这是alert的测试</e-alert>
                </e-container>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#轮廓">
                <e-container>
                    <p>可由属性 cs/class 制定轮廓cs="outline-primary"</p>
                    <e-alert value="true" cs="outline-primary">这是alert的测试</e-alert>
                    <e-alert value="true" cs="outline-error">这是alert的测试</e-alert>
                    <e-alert value="true" cs="outline-info">这是alert的测试</e-alert>
                    <e-alert value="true" cs="outline-royal">这是alert的测试</e-alert>
                </e-container>
            </exa>
            <!--ex5-->
            <exa :ex-arr-obj="exArrObj[5]" title="#well">
                <e-well> <kbd>e-well</kbd> props:tag 默认是div</e-well>
                <e-container>
                    <e-well>
                        {{loushiming}}
                    </e-well>
                </e-container>
            </exa>
            <!--ex6-->
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

    import exa from "../exa.vue"
    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        components:{exa},
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                apiSelet:[{title:'e-btn',value:'e-btn'}],
                apiSeletValue:'e-btn',  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:true,
                mod2:true,
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
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
        },
        mounted(){

        },
        methods:{

        }
    }
</script>