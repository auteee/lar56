
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">消息提示框</h1>
            <e-well tag="p">
                <code>e-notify</code>组件用于向用户显示快速消息，支持定位、删除延迟和回调。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>
                    通知消息框，用于用户对刚发生的一些功能的提醒或者提示
                </e-well>
                <e-container>
                    <e-row row wrap>
                        <e-col xs3>
                            <e-checkbox v-model="x" value="left" label="Left"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="x" value="right" label="Right"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="y" value="top" label="Top"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="y" value="bottom" label="Bottom"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="y" value="center" label="center"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></e-checkbox>
                        </e-col>
                        <e-col xs12 sm4 offset-sm4>
                            <e-input v-model="text" type="text" label="Text"></e-input>
                        </e-col>
                        <e-col xs12 sm4>
                            <e-input v-model.number="timeout" type="number" label="Timeout"></e-input>
                        </e-col>
                    </e-row>
                    <e-btn block @click.native="snackbar = true" dark>Show Snackbar</e-btn>
                    <e-notify :timeout="timeout"
                                :center="y==='center'"
                                :top="y === 'top'"
                                :bottom="y === 'bottom'"
                                :right="x === 'right'"
                                :left="x === 'left'"
                                :multi-line="mode === 'multi-line'"
                                :vertical="mode === 'vertical'"
                                v-model="snackbar">
                        {{ text }}
                        <e-btn cs="bgwh-pink" @click.native="snackbar = false">Close</e-btn>
                    </e-notify>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#可关闭">
                <e-well>
                    除了用<kbd>left</kbd><kbd>right</kbd><kbd>bottom</kbd><kbd>top</kbd><kbd>center</kbd>定位外，
                    也可以在<kbd>positions</kbd>属性中设置位置和颜色(二种定位方法二选一)
                </e-well>
                <e-container grid-list-xl text-xs-c>
                    <e-row wrap>
                        <e-col xs12>
                            <e-btn @click="notifys('left top','bgw-info')" cs="circle info" style="transform:rotate(-45deg);"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                            <e-btn @click="notifys('top','bgw-warning')" cs="circle warning"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                            <e-btn @click="notifys('right top','bgw-danger')" cs="circle danger" style="transform:rotate(45deg);"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                        </e-col>
                        <e-col xs12>
                            <e-btn @click="notifys('left center','bgw-royal')" cs="circle royal"><e-icon>ion-android-arrow-back</e-icon></e-btn>
                            <e-btn @click="notifys('center','bgw-primary')" cs="circle primary"><e-icon>ion-arrow-shrink</e-icon></e-btn>
                            <e-btn @click="notifys('right center','bgw-pink')" cs="circle pink"><e-icon>ion-android-arrow-forward</e-icon></e-btn>
                        </e-col>
                        <e-col xs12>
                            <e-btn @click="notifys('left bottom','outline-orange')" cs="circle orange" style="transform:rotate(45deg);"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                            <e-btn @click="notifys('bottom','outline-teal flat')" cs="circle teal"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                            <e-btn @click="notifys('right bottom','outline-brown')" cs="circle brown" style="transform:rotate(-45deg);"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="mod1" value="multi-line" label="Multi-line"></e-checkbox>
                        </e-col>
                        <e-col xs3>
                            <e-checkbox v-model="mod1" value="vertical" label="Vertical"></e-checkbox>
                        </e-col>
                        <e-col xs12 sm4 offset-sm4>
                            <e-input v-model="text" type="text" label="Text"></e-input>
                        </e-col>
                        <e-col xs12 sm4>
                            <e-input v-model.number="timeout1" type="number" label="Timeout"></e-input>
                        </e-col>
                    </e-row>
                    <e-notify closed :timeout="timeout1" :cs="cs" :positions="pos"
                              :multi-line="mod1 === 'multi-line'"
                              :vertical="mod1 === 'vertical'"
                              v-model="notify">
                        {{ text1 }}
                    </e-notify>
                </e-container>
            </exa>
            <!--ex2-->
            <!--<exa :ex-arr-obj="exArrObj[2]" title="#自定义图标 / 无图标">-->
            <!--</exa>-->
            <!--ex3-->

            <!--ex4-->

            <!--ex5-->
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：alert 设置默认动画效果,现在是第三方css3动画animation.css 是否改为内置？
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
                apiSelet:[{value:'e-notify'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 6000,
                text: '山不在高，有仙则名。水不在深，有龙则灵。',

                notify:false,
                mod1:'',
                timeout1: 6000,
                text1: '谈笑有鸿儒，往来无白丁。',
                cs:'',
                pos:'',
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
            notifys(pos,cs){
                console.info(pos);
                console.info(cs);
                this.pos=pos;
                this.cs=cs;
                this.notify=true;
            }
        }
    }
</script>