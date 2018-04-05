
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">提示框</h1>
            <e-well tag="p">
                <code>e-slider</code>组件是数字输入的更好的可视化。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    //正常
                    <e-slider v-model="mod1" step="0"></e-slider>
                    //不可用
                    <e-slider v-model="mod1" step="0" disabled></e-slider>
                </e-container>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#带有刻度的">
                <e-well>带有刻度的滑块提供了一个拇指标签（倒水滴状），显示当前的确切数量。使用step属性可以禁止在步骤之外选择值。</e-well>
                <e-container>
                    <e-slider v-model="mod2" handle-label step="10" ticks></e-slider>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#图标">
                <e-well>您可以使用<code>append-icon</code>和<code>prepend-icon</code>属性将图标添加到滑块。</e-well>
                <e-container>
                    <e-slider v-model="mod3" handle-label prependIcon="fa fa-bell"></e-slider>
                    <e-slider v-model="mod3" handle-label appendIcon="fa fa-clock-o"></e-slider>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#带有可编辑的数值">
                <e-container>
                    <e-card>
                        <e-card-media height="200px" :style="{ background: `rgb(${red}, ${green}, ${blue})` }"></e-card-media>
                        <e-card-body>
                            <e-row wrap>
                                <e-col xs8 d-flex justify-center>
                                    <e-slider v-model="red" :min="0" :max="255"></e-slider>
                                </e-col>
                                <e-col xs4>
                                    <e-input v-model="red" type="number"></e-input>
                                </e-col>
                                <e-col xs8 d-flex justify-center>
                                    <e-slider v-model="green" :min="0" :max="255"></e-slider>
                                </e-col>
                                <e-col xs4>
                                    <e-input v-model="green" type="number"></e-input>
                                </e-col>
                                <e-col xs8 d-flex justify-center>
                                    <e-slider v-model="blue" :min="0" :max="255"></e-slider>
                                </e-col>
                                <e-col xs4>
                                    <e-input v-model="blue" type="number"></e-input>
                                </e-col>
                            </e-row>
                        </e-card-body>
                    </e-card>
                </e-container>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#自定义色彩">
                <e-container>
                    <e-slider label="红色" cs="red" v-model="mod4" handle-label></e-slider>
                    <e-slider label="绿色" cs="green" v-model="mod4"></e-slider>
                </e-container>
            </exa>
            <!--ex5-->
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：其他样式
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
                apiSelet:[{value:'e-slider'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:0,
                mod2:0,
                mod3:0,
                mod4:0,
                red:66,
                green:100,
                blue:22
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

        },
        methods:{

        }
    }
</script>