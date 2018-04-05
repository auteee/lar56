
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">选择器</h1>
            <e-well tag="p">
                <code>e-select</code>组件用于从选项列表中收集用户提供的信息。<br/>
                此组件是一个组合组件，内部实现依赖于<code>e-list</code>,<code>e-input</code>等组件
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-select :options="selects" label="select" v-model="mod1"></e-select>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#单选/多选">
                <e-well>
                    <kbd>multiple</kbd>可设置多选,<kbd>radio</kbd>可设置单选样式
                </e-well>
                <e-row justify-space-around>
                    <e-col xs3>
                        <e-select :options="selects" label="普通单选" v-model="mod2"></e-select>
                    </e-col>
                    <e-col xs3>
                        <e-select :options="selects" label="radio单选" radio v-model="mod3"></e-select>
                    </e-col>
                    <e-col xs3>
                        <e-select :options="selects" label="多选" multiple v-model="mod4"></e-select>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#自动补全">
                <e-row justify-space-around>
                    <e-col xs3>
                        <e-select :options="selects" label="普通单选" v-model="mod5" autocomplete></e-select>
                    </e-col>
                    <e-col xs3>
                        <e-select :options="selects" label="多选" multiple v-model="mod6" autocomplete></e-select>
                    </e-col>
                    <!--<e-col xs3>-->
                        <!--<e-select :options="selects" label="自定义筛选" multiple v-model="mod4" autocomplete></e-select>-->
                    <!--</e-col>-->
                </e-row>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#标签/异步选项">
                <e-well>例子未完成</e-well>
            </exa>
            <!--ex4-->

            <!--ex5-->

            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：优化位置变化计算，自动补全加样式，选项样式，和别一类select样式，及弹出对话框式选择
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './select/ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./select/apiData.js"    //apiData的相关数据
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
                apiSelet:[{value:'e-select'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                selects: [
                    {title:'State 1', value: 'State 1' },
                    {title:'State 2', value: 'State 2' },
                    {title:'State 3', value: 'State 3' },
                    {title:'State 4', value: 'State 4' },
                    {title:'State 5', value: 'State 5' },
                    {title:'State 6', value: 'State 6' },
                    {title:'State 7', value: 'State 7' }
                ],
                mod1:null,
                mod2:null,
                mod3:'State 1',
                mod4:[],
                mod5:'State 1',
                mod6:[],
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
            customFilter(item,queryText){

            }
        }
    }
</script>