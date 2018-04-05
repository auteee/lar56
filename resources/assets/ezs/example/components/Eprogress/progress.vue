
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">提示框</h1>
            <e-well tag="p">
                <code>e-progress-circular</code><code>e-progress-linear</code>
                组件用于将数据直观地传达给用户。他们也可以代表一个不确定的数量，
                如加载或处理。这些组件包含一个位于组件容器中心的插槽。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>默认圆形进度条和条形进度条</e-well>
                <e-row wrap>
                    <e-col d-flex xs12 justify-space-around style="padding: 20px 0;">
                        <e-progress-circular :value="20"></e-progress-circular>
                        <e-progress-circular :value="40"></e-progress-circular>
                        <e-progress-circular :value="60"></e-progress-circular>
                        <e-progress-circular :value="80"></e-progress-circular>
                        <e-progress-circular :value="100"></e-progress-circular>
                        <e-progress-circular indeterminate></e-progress-circular>
                    </e-col>
                    <e-col xs12>
                        <e-progress-linear :percentage="50" stripe></e-progress-linear>
                        <e-progress-linear :percentage="80" stripe></e-progress-linear>
                        <e-progress-linear indeterminate></e-progress-linear>
                    </e-col>
                </e-row>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#圆环色彩/不定圆环/大小宽度">
                <e-well>
                    <kbd>cs</kbd>属性可设置颜色和其他样式,<code></code>使用圆环处于不定的循环状态
                </e-well>
                <e-row wrap>
                    <e-col d-flex xs12 justify-space-around>
                        <e-progress-circular :value="20" cs="warning" button></e-progress-circular>
                        <e-progress-circular :value="40" cs="primary"></e-progress-circular>
                        <e-progress-circular :value="60" cs="info"></e-progress-circular>
                        <e-progress-circular :value="80" cs="error"></e-progress-circular>
                        <e-progress-circular :value="100" cs="pink"></e-progress-circular>
                    </e-col>
                    <e-col d-flex xs12 justify-space-between>
                        <e-progress-circular indeterminate cs="warning"></e-progress-circular>
                        <e-progress-circular indeterminate cs="primary"></e-progress-circular>
                        <e-progress-circular indeterminate cs="info"></e-progress-circular>
                        <e-progress-circular indeterminate cs="error"></e-progress-circular>
                        <e-progress-circular indeterminate cs="pink"></e-progress-circular>
                    </e-col>
                    <e-col d-flex xs12 justify-space-around>
                        <e-progress-circular v-model="jdt_num" :size="100" :width="15" :rotate="360" cs="warning">{{ jdt_num }}</e-progress-circular>
                        <e-progress-circular :size="50" :width="10" :rotate="360" indeterminate cs="primary"></e-progress-circular>
                        <e-progress-circular :size="30" :width="5" :rotate="360" indeterminate cs="info"></e-progress-circular>
                        <e-progress-circular :size="30" :width="3" :rotate="360" indeterminate cs="error"></e-progress-circular>
                        <e-progress-circular :size="30" :rotate="360" indeterminate cs="pink"></e-progress-circular>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#定值线条">
                <e-well>进度线条组件可以有一个由v-model修改的确定性状态。</e-well>
                <e-container>
                    <e-progress-linear :percentage="30" ></e-progress-linear>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#不定线条">
                <e-well>正如进度圆环组件一样，进度线条有一个不确定的状态。</e-well>
                <e-container>
                    <e-progress-linear indeterminate></e-progress-linear>
                </e-container>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#缓冲">
                <e-well>
                    缓冲区状态同事表示两个值，主值由模型控制，而缓冲区由buffer属性控制。
                </e-well>
                <e-container>
                    <e-progress-linear :percentage="30" :buffer="40"></e-progress-linear>
                </e-container>
            </exa>
            <!--ex5-->
            <exa :ex-arr-obj="exArrObj[5]" title="#自定义高度和上下文色彩">
                <e-well> 自定义高度或上下文颜色可以应用于进度条。边栏的原色是您的应用程序的主要颜色。</e-well>
                <e-container>
                    <e-progress-linear :percentage="30" color="error"></e-progress-linear>
                    <e-progress-linear :percentage="40" color="info"></e-progress-linear>
                    <e-progress-linear :percentage="50" color="error" stripe></e-progress-linear>
                    <e-progress-linear :percentage="80" color="info" stripe></e-progress-linear>
                    <e-progress-linear :percentage="30" stripe animate style="height: 45px"></e-progress-linear>
                </e-container>
            </exa>
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：收集其他样式和动画效果,本组件是用了svg,参考svg画图教程
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
                apiSelet:[{value:'e-progress-circular'},{value:'e-progress-linear'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                interval: null,
                jdt_num: 0
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
        beforeDestroy () {
            clearInterval(this.interval)
        },
        mounted(){
            this.interval = setInterval(() => {
                if (this.jdt_num === 100) {
                    return (this.jdt_num = 0)
                }
                this.jdt_num += 10
            }, 1000)
        },
        methods:{

        }
    }
</script>