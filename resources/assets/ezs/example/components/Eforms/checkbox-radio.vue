
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">选择控件</h1>
            <e-well tag="p">
                选择控制组件允许用户使用选择项，这些组件必须和<code>v-model</code>属性一起使用，因为他们无法保持自己的状态。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    <e-checkbox  v-bind:label="`测试1: ${mod1.toString()}`" v-model="mod1"></e-checkbox>
                    <e-radios v-model="mod2" :radios="radios"></e-radios>
                    <e-radio-group v-model="radioGroup">
                        <e-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></e-radio>
                    </e-radio-group>
                    <e-switch v-model="mod3" label="switch" cs="primary"></e-switch>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#复选框 - 布尔值/数组/状态/色彩">
                <e-well><code>v-model</code>可以控制提示框的状态。如果您不想分配一个v-model，只显示警报，也可以简单地分配属性值。</e-well>
                <e-row wrap>
                    <e-col xs2>布尔值</e-col>
                    <e-col xs2>
                        <e-checkbox :label="`Check 1: ${checkbox1.toString()}`" v-model="checkbox1"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox :label="`Check 2: ${checkbox2.toString()}`" v-model="checkbox2"></e-checkbox>
                    </e-col>
                    <e-col xs6></e-col>
                    <e-col xs2>数组</e-col>
                    <e-col xs2>
                        <e-checkbox label="John" v-model="checkbox3" value="John"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox label="Jacob" v-model="checkbox3" value="Jacob"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        {{ checkbox3 }}
                    </e-col>
                    <e-col xs4></e-col>
                    <e-col xs2>状态</e-col>
                    <e-col xs2>
                        <e-checkbox label="on" input-value="true" value></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox label="off" value></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox label="indeterminate" indeterminate value></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox label="on disabled" input-value="true" value disabled></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox label="off disabled" value disabled></e-checkbox>
                    </e-col>
                    <e-col xs12>色彩:复选框可以设置颜色通过使用<code>cs</code>属性，颜色可以是任何内置的颜色或者其上下文名称。</e-col>
                    <e-col xs2>色彩</e-col>
                    <e-col xs2>
                        <e-checkbox cs="primary" label="primary" v-model="checkbox4"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox cs="info" label="info" v-model="checkbox5"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox cs="error" label="error" v-model="checkbox6"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox cs="success" label="success" v-model="checkbox7"></e-checkbox>
                    </e-col>
                    <e-col xs2>
                        <e-checkbox cs="warning" label="warning" v-model="checkbox8"></e-checkbox>
                    </e-col>
                </e-row>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#单选框">
                <e-well>单选框有二种形式，一种是<code>e-radio-group</code> 和<code>e-radio</code> 结合，
                    别一种是<code>e-radios</code>其基本结构是：{'label':'',value:'','color':'','disabled':''}
                </e-well>
                <e-row wrap>
                    <e-col xs6><code>e-radio-group</code> 和<code>e-radio</code>结合</e-col>
                    <e-col xs4>
                        <e-radio-group v-model="radio1" :mandatory="false">
                            <e-radio label="Radio 1" value="radio-1"></e-radio>
                            <e-radio label="Radio 2" value="radio-2"></e-radio>
                        </e-radio-group>
                    </e-col>
                    <e-col xs2>{{radio1}}</e-col>
                    <e-col xs6><code>e-radios</code></e-col>
                    <e-col xs4>
                        <e-radios :radios="radios1" v-model="radio2"></e-radios>
                    </e-col>
                    <e-col xs2>{{radio2}}</e-col>
                    <e-divider></e-divider>
                    <e-col xs12>
                        <e-well>单选框组可以作为一行或者一列的形式，通过使用 column 或者 row 属性设置，默认是使用列的方式。</e-well>
                    </e-col>
                    <e-col xs12>
                        <e-radios :radios="radios2" v-model="radio3"></e-radios>
                        <e-divider></e-divider>
                        <e-radios :radios="radios2" v-model="radio3" row></e-radios>
                    </e-col>
                    <e-col xs12>
                        <e-well>单选框也是可以通过<code>color</code>(e-radios)属性使用内置的颜色来设置色彩</e-well>
                    </e-col>
                    <e-col xs12>
                        <e-radios :radios="radios3" v-model="radio4"></e-radios>
                    </e-col>
                </e-row>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#开关 - 布尔值/数组/状态/颜色">
                <e-row wrap>
                    <e-col xs12>
                        <e-well>布尔值</e-well>
                        <e-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></e-switch>
                        <e-switch :label="`Switch 2: ${switch2.toString()}`" v-model="switch2"></e-switch>
                    </e-col>
                    <e-col xs12>
                        <e-well>数组:{{people}}</e-well>
                        <e-switch label="John" v-model="people" value="John"></e-switch>
                        <e-switch label="Jacob" v-model="people" value="Jacob"></e-switch>
                    </e-col>
                    <e-col xs12>
                        <e-well>状态</e-well>
                        <e-switch label="on" value input-value="true"></e-switch>
                        <e-switch label="off"></e-switch>
                        <e-switch label="on disabled" value input-value="true" disabled></e-switch>
                        <e-switch label="off disabled" disabled></e-switch>
                    </e-col>
                    <e-col xs12>
                        <e-well>颜色开关也可以通过<code>color</code>属性使用内置的颜色来设置色彩。</e-well>
                        <e-switch label="默认" v-model="switch3" value="primary"></e-switch>
                        <e-switch label="info" v-model="switch3" value="info" color="info"></e-switch>
                        <e-switch label="error" v-model="switch3" value="error" color="error"></e-switch>
                        <e-switch label="success" v-model="switch3" value="success" color="success"></e-switch>
                        <e-switch label="secondary" v-model="switch3" value="secondary" color="secondary"></e-switch>
                        <e-switch label="warning" v-model="switch3" value="warning" color="warning"></e-switch>
                    </e-col>
                </e-row>
            </exa>
            <!--ex4-->

            <!--ex5-->

            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：将inputGroup 引入各组件，对Css样式重写？ 添加icon? 默认和设置icon?
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './checkbox/ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./checkbox/apiData.js"    //apiData的相关数据
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
                apiSelet:[
                    {title:'e-checkbox',value:'e-checkbox'},
                    {title:'e-radio-group',value:'e-radio-group'},
                    {title:'e-radio',value:'e-radio'},
                    {title:'e-radios',value:'e-radios'},
                    {title:'e-switch',value:'e-switch'},
                ],
                apiSeletValue:'e-checkbox',  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                radios:[
                    {label:'radios1',value:1} ,
                    {label:'radios2',value:2},
                    {label:'radios3',value:3}
                ],
                radioGroup:1,
                mod1:true,
                mod2:'',
                mod3:true,
                checkbox1:true,
                checkbox2:false,
                checkbox3:[],
                checkbox4:true,
                checkbox5:true,
                checkbox6:true,
                checkbox7:true,
                checkbox8:true,
                checkbox9:true,
                radio1:'radio-1',
                radio2:1,
                radio3:1,
                radio4:null,
                radios1:[
                    {label:'radios1',value:1} ,
                    {label:'radios2',value:2}
                ],
                radios2:[
                    {label:'radios1',value:1} ,
                    {label:'radios2',value:2},
                    {label:'radios3',value:3}
                ],
                radios3:[
                    {label:'primary',value:1,color:'primary'} ,
                    {label:'error',value:2,color:'error'},
                    {label:'disabled',value:3,color:'info',disabled:true}
                ],
                switch1:true,
                switch2:false,
                people: ['John'],
                switch3: ['primary', 'secondary', 'success', 'info', 'warning', 'error']

            }
        },
        computed:{
            apiDataTabs(){
                return apiData[this.apiSeletValue];
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