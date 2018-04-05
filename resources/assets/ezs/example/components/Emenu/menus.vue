
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">菜单</h1>
            <e-well tag="p">
                <code>e-menu</code>组件展示一个菜单在用于激活它的元素的位置上。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>
                    *注意*请记住将激活菜单的元素放置在anchor插槽中。 //anchor 菜单挂载/显示的锚点位置
                </e-well>
                <e-row justify-center>
                    <e-menu>
                        <e-btn slot="anchor">下拉菜单</e-btn>
                        <e-list :lists="menuList"></e-list>
                    </e-menu>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#绝对定位/右键点击显示">
                <e-well>
                    菜单也可以使用<code>absolute</code>属性绝对定位在激活元素的顶部。尝试点击下面左图上的任何地方。<br/>
                    菜单也可以通过<code>absolute</code>属性跟<code>position-x</code>和<code>position-y</code>属性一起使用。
                    尝试右键点击下面右图上的任何位置。
                </e-well>
                <e-row justify-space-between>
                    <e-col xs4>
                        <e-menu absolute blocked>
                            <e-card  img="/img/girl.jpg" height="300" slot="anchor"></e-card>
                            <e-list :lists="menuList"></e-list>
                        </e-menu>
                    </e-col>
                    <e-col xs4>
                        <e-card  img="/img/girl.jpg" height="300" @contextmenu="show"></e-card>
                        <e-menu offset-y absolute :position-x="posx" :position-y="posy" v-model="showMenu">
                            <e-list :lists="menuList"></e-list>
                        </e-menu>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#悬停/其他各项props">
                <e-well><code>open-on-hover</code>属性可以设置鼠标滑过时显示菜。</e-well>
                <e-row justify-center>
                    <e-menu open-on-hover>
                        <e-btn slot="anchor">下拉菜单</e-btn>
                        <e-list :lists="menuList"></e-list>
                    </e-menu>
                </e-row>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#动画效果">

            </exa>
            <!--ex4-->

            <!--ex5-->

            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：其他各项属性，样式微调等，是否将List组件写进去
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
                apiSelet:[{value:'e-menu'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                menuList:[
                    {'value':'下拉菜单1'},
                    {'value':'下拉菜单2'},
                    {'value':'下拉菜单3'},
                    {'value':'下拉菜单4'},
                    {'value':'下拉菜单5'},
                ],
                posx:null,
                posy:null,
                showMenu:false,
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
            show (e) {
                e.preventDefault();
                this.showMenu = false;
                this.posx = e.clientX;
                this.posy = e.clientY;
                this.$nextTick(() => {
                    this.showMenu = true;
                });
            }
        }
    }
</script>