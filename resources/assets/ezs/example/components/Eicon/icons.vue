
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">图标</h1>
            <e-well tag="p">
                <code>e-icon</code>组件提供了大量的字形来为应用程序的各个方面提供上下文。
                ezs图标利用第三方图标字体库。使用图标时需要引入第三方图标样式。
                相关图标样式可参考Awesome，material,Ionicons等第三方图标库
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    <e-row>
                        <e-col d-flex justify-space-between>
                            <e-icon disabled>ion-ionic</e-icon>
                            <e-icon>fa fa-home</e-icon>
                            <e-icon>ion-alert</e-icon>
                            <e-icon>ion-alert-circled</e-icon>
                            <e-icon>ion-android-add</e-icon>
                            <e-icon>ion-android-arrow-down</e-icon>
                        </e-col>
                    </e-row>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#色彩/大小/样式(可由cs属性设定)">
                <e-container>
                    <e-row wrap>
                        <e-col xs12 d-flex justify-space-between>
                            <e-icon cs="primary">ion-ionic</e-icon>
                            <e-icon cs="error">ion-ionic</e-icon>
                            <e-icon cs="warning">ion-ionic</e-icon>
                            <e-icon cs="info">ion-android-chat</e-icon>
                            <e-icon cs="success">ion-android-chat</e-icon>
                            <e-icon cs="royal">ion-android-chat</e-icon>
                        </e-col>
                        <e-col xs12 d-flex justify-space-between>
                            <e-icon cs="error small">ion-ionic</e-icon>
                            <e-icon cs="error">ion-ionic</e-icon>
                            <e-icon cs="error medium">ion-ionic</e-icon>
                            <e-icon cs="error big">ion-android-chat</e-icon>
                            <e-icon cs="error large">ion-android-chat</e-icon>
                            <e-icon cs="error x-large">ion-android-chat</e-icon>
                        </e-col>
                        <e-col xs12 d-flex justify-space-between>
                            <e-icon cs="primary">ion-ionic</e-icon>
                            <e-icon cs="error">ion-ionic</e-icon>
                            <e-icon cs="warning">ion-ionic</e-icon>
                            <e-icon cs="info">ion-android-chat</e-icon>
                            <e-icon cs="success">ion-android-chat</e-icon>
                            <e-icon cs="royal">ion-android-chat</e-icon>
                        </e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#Ionicons展示">
                <e-container>
                    <e-row wrap>
                        <e-col xs12>
                            <e-input label="ionicons图标总览" textarea auto-grow autofocus  :value="iconicons" readonly></e-input>
                        </e-col>
                        <e-col xs12>
                            <e-select :options="ionArrList" v-model="ionSelect" :prepend-icon="ionSelect"
                                              autocomplete append-icon="ion-ios-copy" :append-icon-cb="eCopy">
                            </e-select>
                        </e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--ex3-->

            <!--ex4-->

            <!--ex5-->

            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：列出其他icon的查询列表
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
    import eIcons from './eIcons'
    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        components:{exa},
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                apiSelet:[{title:'e-icon',value:'e-icon'}],
                apiSeletValue:{title:'e-icon',value:'e-icon'},  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                iconicons:eIcons.ioniconsString,
                ionArrList:[],
                ionSelect:'',
                tip:'',
                timer:null
            }
        },
        computed:{
            apiDataTabs(){
                return apiData[this.apiSeletValue.value];
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
        },
        mounted(){
            this.ionArrList=this.formatToArray();
        },

        methods:{
            formatToArray(){
                return this.iconicons.split(',').map(item=>{
                    return {value:item.trim(),icon:item.trim()};
                });
            },
            eCopy(){
                //document.getElementById('haha').select(); // 选择对象
                let copyArea=document.getElementById('copyArea');
                if(!copyArea){
                    copyArea = document.createElement("textarea");
                    copyArea.style.position = "absolute";
                    copyArea.style.left = "-9999px";
                    copyArea.style.top = "0";
                    copyArea.id = 'copyArea';
                    document.body.appendChild(copyArea);
                }
                copyArea.textContent=this.ionSelect;
                copyArea.select();
                try{
                    if(document.execCommand('copy', false, null)){
                        document.execCommand("copy");
                        console.info("已复制好，可贴粘。");
                        this.tip="已复制好，可贴粘。";
                    } else{
                        console.info("复制失败，请手动复制1");
                        this.tip="复制失败，请手动复制";
                    }
                } catch(err){
                    console.info("复制失败，请手动复制");
                    this.tip="复制失败，请手动复制";
                }
            },
        }
    }
</script>