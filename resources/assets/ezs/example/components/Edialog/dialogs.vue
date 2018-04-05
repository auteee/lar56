
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">对话框</h1>
            <e-well tag="p">
                <code>e-dialog</code>组件用来通知用户有关特定任务的信息，并且可能包含重要信息，
                需要作出决定或者涉及多任务；应谨慎使用对话框，因为它是中断的。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-row justify-space-around>
                    <e-btn  @click.stop="dialog1 = true">打开对话框1</e-btn>
                    <e-btn  @click.stop="dialog2 = true">打开对话框2</e-btn>
                    <e-dialog v-model="dialog1" fullscreen>
                        <e-card height="100%">
                            <e-toolbar>
                                <e-btn @click="dialog1=!dialog1" ><e-icon>ion-android-close</e-icon></e-btn>
                                <e-toolbar-title>设置示例</e-toolbar-title>
                                <e-spacer></e-spacer>
                                <e-btn>保存</e-btn>
                                <e-btn>取消</e-btn>
                            </e-toolbar>
                            <e-card-body >
                                <e-btn  @click.stop="dialog2 = true">打开对话框2</e-btn>
                                <e-row>
                                    <e-well>
                                        {{loushiming}}
                                    </e-well>
                                </e-row>
                            </e-card-body>
                            <e-card-footer>底部位置，可以放置其他按钮</e-card-footer>
                        </e-card>
                    </e-dialog>
                    <e-dialog v-model="dialog2" max-width="500px">
                        <e-card>
                            <e-card-header>标题</e-card-header>
                            <e-card-body>
                                对话框内打开对话框测试
                                <e-btn @click.stop="dialog3 = !dialog3">打开对话框3</e-btn>
                            </e-card-body>
                            <e-card-footer>this is footer</e-card-footer>
                        </e-card>
                    </e-dialog>
                    <e-dialog v-model="dialog3" max-width="500px">
                        <e-well>陋室铭</e-well>
                    </e-dialog>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#模态框">
                <e-well>类似于简单对话框，除了说点击对话框外部不会关闭外。</e-well>
                <e-container>
                    <e-btn @click="dialog4=!dialog4">打开对话框</e-btn>
                    <e-dialog v-model="dialog4" persistent>
                        <e-card>
                            <e-card-body>{{loushiming}}</e-card-body>
                            <e-card-footer>
                                <e-btn @click="dialog4=false">确定</e-btn>
                                <e-btn @click="dialog4=false">取消</e-btn>
                            </e-card-footer>
                        </e-card>
                    </e-dialog>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#内置关闭按钮">
                <e-well>closed属性可开启内置的关闭按钮</e-well>
                <e-container>
                    <e-btn @click="dialog5=!dialog5">打开对话框</e-btn>
                    <e-dialog v-model="dialog5" closed>
                        <e-card>
                            <e-card-body>{{loushiming}}</e-card-body>
                        </e-card>
                    </e-dialog>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#全屏对话框">
                <e-well>由于空间的限制，全屏对话框可能更适用于移动设备，相对大屏设备来说。</e-well>
                <e-container>
                    <e-btn  @click.stop="dialog6 = true">打开对话框1</e-btn>
                    <e-dialog v-model="dialog6" fullscreen>
                        <e-card height="100%">
                            <e-toolbar>
                                <e-btn @click="dialog6=!dialog6" ><e-icon>ion-android-close</e-icon></e-btn>
                                <e-toolbar-title>设置示例</e-toolbar-title>
                                <e-spacer></e-spacer>
                                <e-btn>保存</e-btn>
                                <e-btn>取消</e-btn>
                            </e-toolbar>
                            <e-card-body >
                                <e-row>
                                    <e-well>
                                        {{loushiming}}
                                    </e-well>
                                </e-row>
                            </e-card-body>
                            <e-card-footer>底部位置，可以放置其他按钮</e-card-footer>
                        </e-card>
                    </e-dialog>
                </e-container>
            </exa>
            <!--ex4-->

            <!--ex5-->
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：同表单，和其他组件结合，其他样式
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
                apiSelet:[{value:'e-dialog'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                dialog1:false,
                dialog2:false,
                dialog3:false,
                dialog4:false,
                dialog5:false,
                dialog6:false,
                loushiming: '山不在高，有仙则名。水不在深，有龙则灵。' +
                '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                '谈笑有鸿儒，往来无白丁。' +
                '可以调素琴，阅金经。' +
                '无丝竹之乱耳，无案牍之劳形。' +
                '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
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