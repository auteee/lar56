
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">按钮</h1>
            <e-well>
                <code>e-btn</code>组件用一个material design主题和多个选项来替换标准的html按钮。
                任何色彩辅助类都可以用来改变背景或文字的颜色。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>
                    <kbd>over-[r-b]</kbd>样式定义了，半覆盖显示，<br/>
                    <kbd>space-[r-b]</kbd>样式定义了内部距离显示<br/>
                    这二个属性都是 <kbd>position:absolute</kbd> 需要其父元素<kbd>position:relative</kbd>
                </e-well>
                <e-card>
                    <e-toolbar extended>
                        <e-toolbar-title cs="grey">标题</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                        <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                        <e-btn cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        <e-btn cs="bgw-pink floating over-l-b"><e-icon>ion-android-add</e-icon></e-btn>
                        <e-btn cs="bgw-primary floating over-r-b"><e-icon>ion-android-add</e-icon></e-btn>
                    </e-toolbar>
                    <e-card-body style="height: 200px">
                        <e-btn cs="bgw-pink floating space-l-b"><e-icon>ion-android-add</e-icon></e-btn>
                        <e-btn cs="bgw-pink floating space-r-b"><e-icon>ion-android-add</e-icon></e-btn>
                    </e-card-body>
                </e-card>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <exa :ex-arr-obj="exArrObj[1]" title="#cs的各种可选项">
                <e-well>
                    在cs属性中设置全局的样式即可定义各种形状，色彩<br/>
                    closed属性可做关闭动作,如果您想知道厚切薯条何时关闭，请监听input事件。
                </e-well>
                <e-card>
                    <e-card-body >
                        <e-row wrap>
                            <e-col xs12 sm6 md4>
                                <h3>选项</h3>
                                <e-switch v-model="ishover" label="Open on hover"></e-switch>
                            </e-col>
                            <e-col xs12 sm6 md4>
                                //选项
                                <e-radios :radios="radios1" v-model="posxy"></e-radios>
                            </e-col>
                            <e-col xs12 sm6 md4>
                                //选项
                                <e-radios :radios="radios" v-model="direction"></e-radios>
                            </e-col>
                            <e-col xs12 sm6 md4>
                                //选项
                                <e-radios :radios="radios2" v-model="dx"></e-radios>
                            </e-col>
                        </e-row>
                        <e-btn-dial :transition="dx" :openOnHover="ishover" :posxy="posxy" v-model="dial" :direction="direction">
                            <e-btn cs="bgw-primary circle dx" slot="anchor" v-model="dial">
                                <e-icon>ion-android-arrow-down</e-icon>
                                <e-icon>ion-android-arrow-back</e-icon>
                            </e-btn>
                            <e-btn cs="bgw-green circle small"><e-icon>ion-android-add</e-icon></e-btn>
                            <e-btn cs="bgw-indigo circle small"><e-icon>ion-android-add</e-icon></e-btn>
                            <e-btn cs="bgw-red circle small"><e-icon>ion-android-add</e-icon></e-btn>
                        </e-btn-dial>
                    </e-card-body>
                </e-card>

            </exa>
            <!--ex2-->
            <!--ex3-->
            <!--ex4-->

            <!--ex5-->
            <!--<h2>to<small>将组件标签指定为<span class="e-code">router-link</span></small></h2>-->
        </section>
        <section>
            <e-well>
                未来补充 ：点击时加载效果，鼠标滑过效果（特别是圆形的），按钮组
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './btndial/ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./btndial/apiData.js"    //apiData的相关数据
    import {getTemCodeArr} from "../../helpers.js";

    import exa from "../exa.vue"
    import exatab from "../exatab"
    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        components:{exa,exatab},
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                apiSelet:[{value:'e-btn-dial'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                ishover:false,
                posxy:'space-r-b',
                direction:'left',
                dial:false,
                dx:'scale-transition',
                radios1:[
                    {label:'左上',value:'space-l-t'},
                    {label:'左下',value:'space-l-b'},
                    {label:'右上',value:'space-r-t'},
                    {label:'右下',value:'space-r-b'}],
                radios:[
                    {label:'left',value:'left'},
                    {label:'right',value:'right'},
                    {label:'top',value:'top'},
                    {label:'bottom',value:'bottom'}],
                radios2:[
                    {label:'slide-y-transition',value:'slide-y-transition'},
                    {label:'slide-y-reverse-transition',value:'slide-y-reverse-transition'},
                    {label:'slide-x-transition',value:'slide-x-transition'},
                    {label:'slide-x-reverse-transition',value:'slide-x-reverse-transition'},
                    {label:'scale-transition',value:'scale-transition'}

                    ]
            }
        },
        computed:{
            apiData(){
                return apiData;
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);

        },
        mounted(){
            this.apiDataTabs=apiData[this.apiSeletValue];
        },
        methods:{

        }
    }
</script>