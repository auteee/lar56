
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">徽章</h1>
            <e-well tag="p">
                <code>e-badge</code>组件可以包装任何类型的内容以突出显示用户的信息，或只提醒注意特定的元素。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>任何元素都可以与徽章一起使用。</e-well>
                <e-row wrap justify-space-around align-center>
                    <e-badge left>
                        <span slot="badge">3</span>
                        <e-icon cs="x-large">ion-android-desktop</e-icon>
                    </e-badge>
                    <e-badge right cs="bg-error">
                        <span slot="badge">!</span>
                        <e-icon cs="x-large">ion-android-favorite</e-icon>
                    </e-badge>
                    <e-badge right cs="bg-error">
                        <span slot="badge">!</span>
                        <e-icon cs="x-large">fa fa-bath</e-icon>
                    </e-badge>
                    <e-badge left>
                        <span slot="badge">3</span>
                        <e-icon cs="x-large">fa fa-home</e-icon>
                    </e-badge>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#重叠/内联/图标/可见性">
                <e-well>头像也接受<code>e-icon</code>组件或者文本。将他们混合和匹配功能，就可以创建一些独特的东西。</e-well>
                <e-row wrap >
                    <e-col xs12 d-flex justify-space-around align-center>
                        <e-badge left overlap>
                            <e-icon slot="badge">fa fa-home</e-icon>
                            <e-icon>fa fa-home</e-icon>
                        </e-badge>
                        <e-badge overlap>
                            <span slot="badge">3</span>
                            <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
                        </e-badge>
                        <e-badge left overlap>
                            <span slot="badge">1</span>
                            <span>注释</span>
                        </e-badge>
                        <e-badge overlap>
                            <span slot="badge">3</span>
                            <span>例子</span>
                        </e-badge>
                    </e-col>
                    <e-col xs12 d-flex align-center>
                        <e-btn @click="mod1=!mod1">显示/关闭</e-btn>
                    </e-col>
                    <e-col xs12 d-flex justify-space-around>
                        <e-badge left v-model="mod1">
                            <span slot="badge">1</span>
                            <span>注释</span>
                        </e-badge>
                        <e-badge v-model="mod1">
                            <span slot="badge">3</span>
                            <span>例子</span>
                        </e-badge>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#高级用法">
                <e-well>将头像与其他组件组合在一起，您就可以构建漂亮的用户界面。</e-well>
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
                未来补充 ：其他样式,和现在的样式微调
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
                apiSelet:[{value:'e-badge'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                slider:56,
                tile:false,
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