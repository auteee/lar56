
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">提示框</h1>
            <e-well tag="p">
                <code>e-avatar</code>组件被用来控制用于控制响应图像的大小和边界半径，通常用于显示个人介绍的图片。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-row wrap>
                    <e-col xs12 sm6 md6>
                        <e-slider v-model="slider" :min="16" :max="200" label="图片大小"></e-slider>
                        <e-switch label="形状" v-model="tile"></e-switch>
                    </e-col>
                    <e-col xs12 sm6 md6 d-flex justify-center align-center>
                        <e-avatar :tile="tile" :size="`${slider}px`">
                            <img src="/img/ezs.jpg" />
                        </e-avatar>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#图标和文本">
                <e-well>头像也接受<code>e-icon</code>组件或者文本。将他们混合和匹配功能，就可以创建一些独特的东西。</e-well>
                <e-row wrap justify-space-around align-center>
                    <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
                    <e-avatar><img src="/img/john.jpg" alt="John"></e-avatar>
                    <e-badge>
                        <span slot="badge">3</span>
                        <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
                    </e-badge>
                    <e-avatar cs="bg-primary" @click="haha">
                        <span class="error">C</span>
                    </e-avatar>
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
                apiSelet:[{value:'e-avatar'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                slider:56,
                tile:false
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