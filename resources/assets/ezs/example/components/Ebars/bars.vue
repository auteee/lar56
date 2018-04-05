
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">工具栏</h1>
            <e-well tag="p">
                <code>e-toolbar</code>组件对于任何GUI都很重要，因为它通常是网站导航的主要来源。
                工具栏组件可以与很多组件一起使用
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-toolbar>
                    <e-btn cs="primary circle small"><e-icon>ion-ios-home-outline</e-icon></e-btn>
                    <e-toolbar-title>标题</e-toolbar-title>
                    <e-spacer></e-spacer>
                    <e-btn cs="primary circle small"><e-icon>ion-android-add-circle</e-icon></e-btn>
                    <e-menu>
                        <e-btn slot="anchor" cs="primary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        <e-list :lists="menulist"></e-list>
                    </e-menu>
                </e-toolbar>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <!--ex1-->
            <exa :ex-arr-obj="exArrObj[1]" title="#应用程序栏">
                <e-well>应用程序栏是应用程序主要的主要工具栏，它可以包含图标、菜单等等。</e-well>
                <e-toolbar cs="bgw-primary">
                    <e-btn cs="white circle small"><e-icon>ion-ios-home-outline</e-icon></e-btn>
                    <e-toolbar-title>标题</e-toolbar-title>
                    <e-spacer></e-spacer>
                    <e-btn cs="white circle small"><e-icon>ion-android-add-circle</e-icon></e-btn>
                    <e-menu>
                        <e-btn slot="anchor" cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        <e-list :lists="menulist"></e-list>
                    </e-menu>
                </e-toolbar>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#带扩展的应用程序栏">
                <e-well>扩展可以用来创建更突出的栏，如果标题放置在扩展内，它将自动移到右侧，与主栏中的正常位置相匹配。</e-well>
                <e-toolbar cs="bgw-primary" extended>
                    <e-btn cs="white circle small"><e-icon>ion-ios-home-outline</e-icon></e-btn>
                    <e-toolbar-title slot="extension">标题</e-toolbar-title>
                    <e-spacer></e-spacer>
                    <e-btn cs="white circle small"><e-icon>ion-android-add-circle</e-icon></e-btn>
                    <e-menu>
                        <e-btn slot="anchor" cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        <e-list :lists="menulist"></e-list>
                    </e-menu>
                </e-toolbar>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#具有层次结构的列宽">
                <e-well>工具栏有两个变种，明亮和暗黑。明亮工具栏有深色的按钮和黑暗的文字，而暗黑工具栏有白色的按钮和白色的文字。</e-well>
                <e-row>
                    <e-toolbar cs="bgw-black">
                        <e-toolbar-title >标题</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn cs="white circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                        <e-btn cs="white circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                        <e-btn cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                    </e-toolbar>
                    <e-toolbar cs="bgb-white">
                        <e-toolbar-title >标题</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn cs="bgb-t small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                        <e-btn cs="bgb-t small"><e-icon>ion-android-apps</e-icon></e-btn>
                        <e-btn cs="bgb-t small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                    </e-toolbar>
                </e-row>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#灵活的工具栏和卡片工具栏">
                <e-card cs="flat">
                    <e-toolbar cs="bgw-primary flat"  extended>
                        <e-btn cs="white circle small"><e-icon>ion-android-menu</e-icon></e-btn>
                    </e-toolbar>
                    <e-row pb-2>
                        <e-col xs8 offset-xs2>
                            <e-card>
                                <e-toolbar style="margin-top: -64px;">
                                    <e-toolbar-title cs="grey">标题</e-toolbar-title>
                                    <e-spacer></e-spacer>
                                    <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                                    <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                                    <e-menu>
                                        <e-btn slot="anchor" cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                                        <e-list :lists="menulist"></e-list>
                                    </e-menu>
                                </e-toolbar>
                                <e-card-body style="height: 200px"></e-card-body>
                            </e-card>

                        </e-col>
                    </e-row>
                </e-card>
            </exa>
            <!--ex5-->
            <exa :ex-arr-obj="exArrObj[5]" title="#搜索时浮动">
                <e-well>可以将浮动工具栏放置在其引用的内容上。</e-well>
                <e-card img="/img/map.jpg" height="300px" cs="flat pa-3">
                    <e-toolbar dense cs="floating bgb-white">
                        <e-input prepend-icon="ion-ios-search-strong" hide-details></e-input>
                        <e-btn cs="secondary circle small"><e-icon>ion-android-locate</e-icon></e-btn>
                        <e-btn cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                    </e-toolbar>
                </e-card>
            </exa>
            <!--ex6-->
            <exa :ex-arr-obj="exArrObj[6]" title="#变体">
                <e-well>一个应用程序栏有多个可以应用主题和辅助类的变种，范围从明亮和暗黑的主题、色彩和透明度。</e-well>
                <e-row wrap>
                    <e-col xs6>
                        <e-toolbar>
                            <e-toolbar-title cs="secondary">标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-menu>
                                <e-btn slot="anchor" cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                                <e-list :lists="menulist"></e-list>
                            </e-menu>
                        </e-toolbar>
                    </e-col>
                    <e-col xs6>
                        <e-toolbar cs="bgw-black">
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="white circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-menu>
                                <e-btn slot="anchor" cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                                <e-list :lists="menulist"></e-list>
                            </e-menu>
                        </e-toolbar>
                    </e-col>
                    <e-col xs6>
                        <e-toolbar cs="bgw-primary">
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="white circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-menu>
                                <e-btn slot="anchor" cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                                <e-list :lists="menulist"></e-list>
                            </e-menu>
                        </e-toolbar>
                    </e-col>
                    <e-col xs6>
                        <e-toolbar cs="bgb-grey">
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-menu>
                                <e-btn slot="anchor" cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                                <e-list :lists="menulist"></e-list>
                            </e-menu>
                        </e-toolbar>
                    </e-col>
                </e-row>
            </exa>
            <!--ex7-->
            <exa :ex-arr-obj="exArrObj[7]" title="#工具栏高度及扩展">
                <e-well>你可以在扩展区域放置元素，内容和扩展区域将被锁定到64x的高度。<br/>
                    工具栏降低其高度未48px,这也是移动设备横向定位的默认行为。<br/>
                    48px+扩展
                </e-well>
                <e-row wrap>
                    <e-col xs12>
                        <e-toolbar cs="bgw-primary" extended>
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="white circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        </e-toolbar>
                    </e-col>
                    <br/>
                    <e-col xs12>
                        <e-toolbar cs="bgb-grey" dense>
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-btn cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        </e-toolbar>
                    </e-col>
                    <br/>
                    <e-col xs12>
                        <e-toolbar cs="bgw-primary" dense extended>
                            <e-toolbar-title >标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn cs="white circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                            <e-btn cs="white circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                        </e-toolbar>
                    </e-col>
                </e-row>
            </exa>
            <!--ex8-->
            <exa :ex-arr-obj="exArrObj[8]" title="#系统栏——状态/窗口">
                <e-well>
                    系统栏对于移动设备和桌面上的通知图标很有用，对于现场示例，请前往预定义的布局。
                </e-well>
                <e-container>
                    <e-system-bar cs="bgw-black">
                        <e-toolbar-title >标题</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn cs="bgw-t small"><e-icon>ion-minus</e-icon></e-btn>
                        <e-btn cs="bgw-t small"><e-icon>ion-android-expand</e-icon></e-btn>
                        <e-btn cs="bgw-t small"><e-icon>ion-close</e-icon></e-btn>
                    </e-system-bar>
                    <br/>
                    <e-system-bar cs="bgw-black">
                        <e-toolbar-title >标题</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn cs="bgw-t small"><e-icon>ion-connection-bars</e-icon></e-btn>
                        <e-btn cs="bgw-t small"><e-icon>ion-battery-charging</e-icon></e-btn>
                        <e-btn cs="bgw-t small"><e-icon>ion-android-notifications-off</e-icon></e-btn>
                        <span>12:30</span>
                    </e-system-bar>
                </e-container>
            </exa>
        </section>
        <section>
            <e-well>
                未来补充 ：建立模板颜色，调整细节,滚动的实例未完成，其他样式
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
                apiSelet:[{value:'e-toolbar'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                menulist:[{value:'我是菜单一'},{value:'我是菜单二'},{value:'我是菜单三'}],
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