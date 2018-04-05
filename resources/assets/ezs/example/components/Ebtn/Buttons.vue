
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">按钮</h1>
            <e-well>
                <code>e-btn</code>组件用一个material design主题和多个选项来替换标准的html按钮。
                任何色彩辅助类都可以用来改变背景或文字的颜色。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-row wrap>
                    <e-btn >默认</e-btn>
                    <e-btn cs="bgwh-primary raised">蓝色(主色)</e-btn>
                    <e-btn cs="bgwh-secondary">灰黑色(次要)</e-btn>
                    <e-btn cs="bgwh-error">红色(错误)</e-btn>
                    <e-btn cs="bgwh-info">青色(信息)</e-btn>
                    <e-btn cs="bgwh-success">绿色(成功)</e-btn>
                    <e-btn cs="bgwh-warning raised">黄色(错误)</e-btn>
                    <e-btn cs="bgwh-danger raised">橙色(危险)</e-btn>
                    <e-btn cs="bgwh-royal raised">紫色(高贵)</e-btn>
                </e-row>
            </exa>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <exatab :eapiData="apiData" :eapiSelet="apiSelet"></exatab>
        </section>
        <section id="examples">
            <h1 class="primary">示例</h1>
            <exa :ex-arr-obj="exArrObj[1]" title="#cs的各种可选项">
                <e-well>
                    在cs属性中设置全局的样式即可定义各种形状，色彩<br/>
                    closed属性可做关闭动作,如果您想知道厚切薯条何时关闭，请监听input事件。
                </e-well>
                <e-container>
                    <e-row wrap class="example-row">
                        <e-col xs12>
                            <e-well>1,三类样式,多种颜色:</e-well>
                        </e-col>
                        <e-col xs12>
                            <e-well>bgw/bh-[] 例: cs="bgwh-primary" </e-well>
                            <e-btn >默认</e-btn>
                            <e-btn cs="bgwh-primary">蓝色(主色)</e-btn>
                            <e-btn cs="bgwh-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="bgwh-error">红色(错误)</e-btn>
                            <e-btn cs="bgwh-info">青色(信息)</e-btn>
                            <e-btn cs="bgbh-success">绿色(成功)</e-btn>
                            <e-btn cs="bgbh-warning">黄色(错误)</e-btn>
                            <e-btn cs="bgbh-danger">橙色(危险)</e-btn>
                            <e-btn cs="bgbh-royal">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col xs12>
                            <e-well>tmwh-[] 例: cs="tmwh-primary" </e-well>
                            <e-btn cs="tmwh-primary">蓝色(主色)</e-btn>
                            <e-btn cs="tmwh-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="tmwh-error">红色(错误)</e-btn>
                            <e-btn cs="tmwh-info">青色(信息)</e-btn>
                            <e-btn cs="tmbh-success">绿色(成功)</e-btn>
                            <e-btn cs="tmbh-warning">黄色(错误)</e-btn>
                            <e-btn cs="tmbh-danger">橙色(危险)</e-btn>
                            <e-btn cs="tmbh-royal">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col xs12>
                            <h4>outline-[] 例: cs="outline-primary"</h4>
                            <e-btn cs="outlineh-primary">蓝色(主色)</e-btn>
                            <e-btn cs="outlineh-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="outlineh-error">红色(错误)</e-btn>
                            <e-btn cs="outlineh-info">青色(信息)</e-btn>
                            <e-btn cs="outlineh-success">绿色(成功)</e-btn>
                            <e-btn cs="outlineh-warning">黄色(错误)</e-btn>
                            <e-btn cs="outlineh-danger">橙色(危险)</e-btn>
                            <e-btn cs="outlineh-royal">紫色(高贵)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>2,raised(阴影效果) 例: cs="bg-primary raised"</h3>
                            <e-btn cs="bgw-primary raised">蓝色(主色)</e-btn>
                            <e-btn cs="bgw-secondary raised">灰黑色(次要)</e-btn>
                            <e-btn cs="bgw-error raised" >红色(错误)</e-btn>
                            <e-btn cs="bgw-info raised">青色(信息)</e-btn>
                            <e-btn cs="bgw-success raised">绿色(成功)</e-btn>
                            <e-btn cs="bgw-warning raised">黄色(错误)</e-btn>
                            <e-btn cs="bgw-danger raised">橙色(危险)</e-btn>
                            <e-btn cs="bgw-royal raised">紫色(高贵)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row wrap colum class="example-row">
                        <e-col md12><h3>3,形状:<small>oval(圆角)/square(方角)/circle(圆)</small></h3></e-col>
                        <e-col>
                            <h4>oval(圆角) 例: cs="bg-primary oval"</h4>
                            <e-btn cs="bgwh-primary oval">蓝色(主色)</e-btn>
                            <e-btn cs="bgwh-secondary oval">灰黑色(次要)</e-btn>
                            <e-btn cs="bgwh-error oval">红色(错误)</e-btn>
                            <e-btn cs="bgwh-info oval">青色(信息)</e-btn>
                            <e-btn cs="bgwh-success oval">绿色(成功)</e-btn>
                            <e-btn cs="bgwh-warning oval">黄色(错误)</e-btn>
                            <e-btn cs="bgwh-danger oval">橙色(危险)</e-btn>
                            <e-btn cs="bgwh-royal oval">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>square(方角) 例: cs="bg-primary square"</h4>
                            <e-btn cs="bgbh-primary square">蓝色(主色)</e-btn>
                            <e-btn cs="bgbh-secondary square">灰黑色(次要)</e-btn>
                            <e-btn cs="bgbh-error square">红色(错误)</e-btn>
                            <e-btn cs="bgbh-info square">青色(信息)</e-btn>
                            <e-btn cs="bgbh-success square">绿色(成功)</e-btn>
                            <e-btn cs="bgbh-warning square">黄色(错误)</e-btn>
                            <e-btn cs="bgbh-danger square">橙色(危险)</e-btn>
                            <e-btn cs="bgbh-royal square">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>circle(圆) 例: cs="bg-primary circle"</h4>
                            <e-btn cs="primary circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="secondary circle"><e-icon>ion-ios-home-outline</e-icon></e-btn>
                            <e-btn cs="error circle"><e-icon>ion-android-alarm-clock</e-icon></e-btn>
                            <e-btn cs="info circle"><e-icon>ion-android-alert</e-icon></e-btn>
                            <e-btn cs="bgwh-success circle"><e-icon>ion-android-alert</e-icon></e-btn>
                            <e-btn cs="bgwh-warning circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="tmwh-danger circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="tmwh-royal circle"><e-icon>ion-android-home</e-icon></e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>4,大小:<small>small,big,large,x-large,例: cs="bg-primary x-large"</small></h3>
                            <e-btn cs="bgwh-secondary small">small(最小)</e-btn>
                            <e-btn>默认(正常)</e-btn>
                            <e-btn cs="bgwh-info big">big(大的)</e-btn>
                            <e-btn cs="bgwh-success large">large(巨大)</e-btn>
                            <e-btn cs="bgwh-error x-large">x-large(最大)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>5,块状--along:<small>块状按钮可以扩展全部可用宽度 例: cs="bg-primary along"</small></h3>
                            <e-btn cs="bgwh-secondary small along">small(最小)</e-btn>
                            <e-btn cs="along">默认(正常)</e-btn>
                            <e-btn cs="bgwh-info big along">big(大的)</e-btn>
                            <e-btn cs="bgwh-success large along">large(巨大)</e-btn>
                            <e-btn cs="bgwh-error x-large along">x-large(最大)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <p>
                                说明：上面的几种样式，有些可以混合使用，有些不可以，也可以自定义css样式，cs=""或者class="";
                            </p>
                        </e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--<h2>disabled(按钮失效，不可点击)</h2>-->
            <exa :ex-arr-obj="exArrObj[2]" title="#disabled(按钮失效，不可点击)">
                <e-row>
                    <e-col>
                        <e-btn disabled cs="bg-primary">已失效</e-btn>
                        <e-btn disabled cs="bg-secondary">已失效</e-btn>
                        <e-btn disabled cs="bg-error">已失效</e-btn>
                        <e-btn disabled cs="bg-info">已失效</e-btn>
                        <e-btn disabled cs="bg-success">已失效</e-btn>
                        <e-btn disabled cs="bg-warning">已失效</e-btn>
                        <e-btn disabled cs="bg-danger">已失效</e-btn>
                        <e-btn disabled cs="bg-royal">已失效</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <!--ripple(点击时产生的波纹 默认 true)-->
            <exa :ex-arr-obj="exArrObj[3]" title="#ripple(点击时产生的波纹 默认 true)">
                <e-row>
                    <e-col>
                        <e-btn cs="bg-primary" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-secondary" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-error" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-info" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-success" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-warning" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-danger" :ripple="false">无波纹</e-btn>
                        <e-btn cs="bg-royal" :ripple="false">无波纹</e-btn>
                    </e-col>
                </e-row>
            </exa>

            <!--tag<small>默认'button', 可选html的各种可用标签['a','span','label,'div'...]</small>-->
            <exa :ex-arr-obj="exArrObj[4]" title="#tag标签">
                <e-well>默认'button', 可选html的各种可用标签['a','span','label,'div'...]</e-well>
                <e-row>
                    <e-col>
                        <e-btn tag="a" cs="bg-warning">a标签</e-btn>
                        <e-btn tag="span" cs="bg-danger">span标签</e-btn>
                        <e-btn tag="div" cs="bg-royal">div标签</e-btn>
                        <e-btn tag="label" cs="bg-info">label标签</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <!--<h2>a标签的href属性(带此属性只可生成a标签)</h2>-->
            <exa :ex-arr-obj="exArrObj[5]" title="#herf">
                <e-well>
                    a标签的href属性(带此属性只可生成a标签)
                </e-well>
                <e-row>
                    <e-col>
                        <e-btn href="http://www.baidu.com" cs="bg-primary">百度</e-btn>
                        <e-btn href="http://www.baidu.com" cs="bg-secondary">百度</e-btn>
                        <e-btn href="http://www.baidu.com" cs="bg-error">百度</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <exa :ex-arr-obj="exArrObj[6]" title="#to">
                <e-well>将组件标签指定为<code>router-link</code></e-well>
                <e-row>
                    <e-col>
                        <e-btn to="cards" cs="bg-primary">卡片项</e-btn>
                        <e-btn to="apps" cs="bg-secondary">apps</e-btn>
                        <e-btn to="icons" cs="bg-error">图标</e-btn>
                    </e-col>
                </e-row>
            </exa>
            <!--<h2>to<small>将组件标签指定为<span class="e-code">router-link</span></small></h2>-->
        </section>
        <section>
            <e-well>
                未来补充 ：点击时加载效果，鼠标滑过效果（特别是圆形的），按钮组
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './buttons/ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./buttons/apiData.js"    //apiData的相关数据
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
                apiSelet:[{value:'e-btn'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                ex1:false,  //example 1,2,3,4,5,6
                ex2:false,
                ex3:false,
                ex4:false,
                ex5:false,
                ex6:false
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
            this.apiDataTabs=apiData[this.apiSeletValue];
        },
        methods:{

        }
    }
</script>