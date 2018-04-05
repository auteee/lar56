
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">提示框</h1>
            <e-well tag="p">
                <code>e-chip</code>组件用于传递小块信息。使用<kbd>closed</kbd>属性，厚切薯条变得互动，允许用户交互。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>厚切薯条有4个主要的变种，Regular, 带图标、带头像和可关闭。</e-well>
                <e-row wrap>
                    <e-col xs12 d-flex justify-space-around align-center>
                        <e-chip>例子</e-chip>
                        <e-chip closed>
                            <e-avatar>
                                <img src="/img/ezs.jpg">
                            </e-avatar>
                            例子avatar
                        </e-chip>
                        <e-chip closed>例子closed</e-chip>
                        <e-chip>
                            <e-avatar cs="bg-info">E</e-avatar>
                            例子+avatar
                        </e-chip>
                        <e-chip closed>
                            例子+icon
                            <e-icon cs="right">fa fa-home</e-icon>
                        </e-chip>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#色彩/图标/轮廓/标签/可关闭">
                <e-well>
                    在cs属性中设置全局的样式即可定义各种形状，色彩<br/>
                    closed属性可做关闭动作,如果您想知道厚切薯条何时关闭，请监听input事件。
                </e-well>
                <e-row wrap justify-space-around align-center>
                    <e-col xs12 d-flex justify-space-around align-center>
                        <e-chip cs="bg-error">红色</e-chip>
                        <e-chip cs="bg-primary">蓝色</e-chip>
                        <e-chip cs="bg-royal"><e-avatar><img src="/img/img1.jpg"/></e-avatar>头像</e-chip>
                        <e-chip cs="bg-success">icon围标<e-icon cs="right">fa fa-home</e-icon></e-chip>
                        <e-chip cs="outline-warning">轮廓</e-chip>
                        <e-chip cs="outline-danger">轮廓</e-chip>
                        <e-chip cs="bg-primary label" >标签</e-chip>
                    </e-col>
                    <e-col xs12 d-flex justify-center align-center>
                        <e-chip cs="label" closed v-model="mod1">标签/关闭</e-chip>
                        <e-btn v-if="!mod1" @click="mod1=!mod1">打开chip</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#与select控制一起使用*未完成">
                <e-well>有待完成</e-well>
                <e-container>

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
                apiSelet:[{value:'e-chip'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:true,
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
            haha(){
                alert('haha')
            }
        }
    }
</script>