
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">选项卡</h1>
            <e-well tag="p">
                <code>e-tabs</code>选项卡组件<br/>
                使用时注意其结构<code>e-tabs</code>下包含<code>e-tabs-header</code>和<code>e-tabs-body</code>二个主要子组件，
                <code>e-tabs-silder</code>可选用于活动卡项的标识<br/>
                <code>e-tabs-header</code>下包含<code>e-tabs-header-nav</code>用于选项卡的导航<br/>
                <code>e-tabs-body</code>下包含<code>e-tabs-content</code>用于显示选项卡内容<br/>
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-card>
                    <e-tabs v-model="mod1">
                        <e-tabs-header>
                            <e-tabs-nav v-for="n in 3" :key="n">选项{{ n }}</e-tabs-nav>
                            <e-tabs-slider cs="bg-error"></e-tabs-slider>
                        </e-tabs-header>
                        <e-tabs-body>
                            <e-tabs-content v-for="n in 3" :key="n">
                                <e-row justify-center>
                                    {{article.title}} + 选项卡{{ n }}
                                </e-row>
                                <e-container>
                                    {{article.content}}
                                </e-container>
                            </e-tabs-content>
                        </e-tabs-body>
                    </e-tabs>
                    <e-card-footer>
                        <e-row justify-center>
                            <e-btn @click="next">下一个</e-btn>
                        </e-row>
                    </e-card-footer>
                </e-card>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#居中/">
                <e-well>
                    <code>e-tabs-header</code>的<kbd>centered</kbd>属性。
                    在桌面屏幕上，其导航内容居中。
                </e-well>
                <e-tabs >
                    <e-tabs-header centered>
                        <e-tabs-nav v-for="n in 3" :key="n">选项卡 {{ n }}</e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                </e-tabs>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#内容/搜索框/图标和文本">
                <e-well>有待完成</e-well>
                <e-container>
                    <e-tabs v-model="mod1">
                        <e-tabs-header>
                            <e-tabs-nav v-for="n in 3" :key="n">选项{{ n }}</e-tabs-nav>
                            <e-tabs-slider cs="bg-error"></e-tabs-slider>
                        </e-tabs-header>
                        <e-tabs-body>
                            <e-tabs-content v-for="n in 3" :key="n">
                                <e-row justify-center>
                                    {{article.title}} + 选项卡{{ n }}
                                </e-row>
                                <e-container>
                                    {{article.content}}
                                </e-container>
                            </e-tabs-content>
                        </e-tabs-body>
                    </e-tabs>
                </e-container>
            </exa>
            <!--ex3-->
            <!--ex4-->
            <!--ex5-->
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：其他样式,和现在的样式微调，与e-select控制结合使用
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
    import exatab from "../exatab"
    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        components:{exa,exatab},
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                apiSelet:[
                    {value:'e-tabs'},
                    {value:'e-tabs-header'},
                    {value:'e-tabs-nav'},
                    {value:'e-tabs-body'},
                    {value:'e-tabs-content'},
                    {value:'e-tabs-slider'}
                ],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:0,
                article:{
                    title:'陋室铭',
                    author:'刘禹锡',
                    times:'唐代',
                    content:'山不在高，有仙则名。水不在深，有龙则灵。' +
                    '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                    '谈笑有鸿儒，往来无白丁。' +
                    '可以调素琴，阅金经。' +
                    '无丝竹之乱耳，无案牍之劳形。' +
                    '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
                }
            }
        },
        computed:{
            apiData(){
                return apiData;
            },
            // avatarSize () {
            //     return `${this.slider}px`
            // }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
        },
        mounted(){

        },
        methods:{
            next(){
                let active = this.mod1;
                this.mod1 = active < 2 ? active + 1 : 0
            }
        }
    }
</script>