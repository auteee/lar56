
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">提示框</h1>
            <e-well tag="p">
                <code>e-tooltip</code>对于用户悬停在元素上时传递信息很有用。您也可以通过一个v-model以编程方式控制提示组件的显示。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    <e-btn id="anchorid">id测试</e-btn>
                    <e-tooltip anchorid="anchorid">设置了anchorid则tip位置任意放</e-tooltip>
                    <e-btn>tooltio测试<e-tooltip>未设置anchorid,则tip以父节点为锚点</e-tooltip></e-btn>
                    <e-btn>tooltio测试<e-tooltip >默认tip</e-tooltip></e-btn>
                    <e-btn>tooltio测试<e-tooltip :anchor="['bottom','middle']">anchor="['bottom','middle']"</e-tooltip></e-btn>
                    <e-btn>tooltio测试<e-tooltip :anchor="['bottom','left']" :tipself="['top','middle']">anchor="['bottom','left']"</e-tooltip></e-btn>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#可见性">
                <e-well><code>Tooltip</code>的可见性可以使用<kbd>v-model</kbd>以编程的方式改变。</e-well>
                <e-row>
                    <e-col d-flex xs6 offset-xs3 align-center>
                        <e-btn @click="mod1=!mod1">点我显示图标提示</e-btn>
                        <e-icon icon="fa fa-home"><e-tooltip v-model="mod1">这是home图标</e-tooltip></e-icon>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#对齐/延时显示">
                <e-row wrap>
                    <e-col xs12 d-flex align-center>
                        <e-btn>鼠标滑过
                            <e-tooltip :anchor="anchor" :itself="itself" :delay="delay">
                                显示位置和时间测试
                            </e-tooltip>
                        </e-btn>
                    </e-col>
                    <e-col xs8 d-flex align-center>
                        anchor={{anchor}} , itself={{itself}}
                    </e-col>
                    <e-col xs4><e-input type="number" label="延时显示/毫秒" v-model.number="delay"></e-input></e-col>
                    <e-col xs3>
                        anchor:垂直方向
                        <e-radio-group v-model="vertical1">
                            <e-radio label='top' value="top"></e-radio>
                            <e-radio label='center' value="center"></e-radio>
                            <e-radio label='bottom' value="bottom"></e-radio>
                        </e-radio-group>
                    </e-col>
                    <e-col xs3>
                        anchor:水平方向
                        <e-radio-group v-model="horizontal1">
                            <e-radio label='left' value="left"></e-radio>
                            <e-radio label='middle' value="middle"></e-radio>
                            <e-radio label='right' value="right"></e-radio>
                        </e-radio-group>
                    </e-col>
                    <e-col xs3>
                        itself:垂直方向
                        <e-radio-group v-model="vertical2">
                            <e-radio label='top' value="top"></e-radio>
                            <e-radio label='center' value="center"></e-radio>
                            <e-radio label='bottom' value="bottom"></e-radio>
                        </e-radio-group>
                    </e-col>
                    <e-col xs3>
                        itself:水平方向
                        <e-radio-group v-model="horizontal2">
                            <e-radio label='left' value="left"></e-radio>
                            <e-radio label='middle' value="middle"></e-radio>
                            <e-radio label='right' value="right"></e-radio>
                        </e-radio-group>
                    </e-col>
                </e-row>
            </exa>
            <!--ex3-->
            <!--ex4-->
        </section>
        <section>
            <e-well>
                未来补充 ：简化参数设置，显示位置
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
                mod1:false,
                vertical1:'top',
                horizontal1:'middle',
                vertical2:'bottom',
                horizontal2:'middle',
                delay:10
            }
        },
        computed:{
            anchor(){
                return [this.vertical1,this.horizontal1]
            },
            itself(){
                return [this.vertical2,this.horizontal2]
            },
            apiDataTabs(){
                return apiData[this.apiSeletValue];
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
        },
        beforeDestroy(){
            this.mod1=false;
        },
        mounted(){

        },
        methods:{

        }
    }
</script>