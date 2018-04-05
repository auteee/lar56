
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">按钮</h1>
            <div>
                <p>
                    <span class="e-code">e-btn</span>组件用一个material design主题和多个选项来替换标准的html按钮。
                    任何色彩辅助类都可以用来改变背景或文字的颜色。
                </p>
            </div>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <e-card>
                <e-card-header>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="usageCode=!usageCode"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="usageCode">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[0]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[0]" :key="i">
                            <e-markdown-it v-model="exArrObj[0][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <e-btn >默认</e-btn>
                    <e-btn cs="bg-primary raised">蓝色(主色)</e-btn>
                    <e-btn cs="bg-secondary">灰黑色(次要)</e-btn>
                    <e-btn cs="bg-error">红色(错误)</e-btn>
                    <e-btn cs="bg-info">青色(信息)</e-btn>
                    <e-btn cs="bg-success">绿色(成功)</e-btn>
                    <e-btn cs="bg-warning raised">黄色(错误)</e-btn>
                    <e-btn cs="bg-danger raised">橙色(危险)</e-btn>
                    <e-btn cs="bg-royal raised">紫色(高贵)</e-btn>
                </e-card-body>
            </e-card>
        </section>
        <section id="api">
            <h1 class="primary">API</h1>
            <e-tabs>
                <e-tabs-header>
                    <e-tabs-nav v-for="(item,i) in apiDataTabs" :key="i">{{item.title}}</e-tabs-nav>
                    <!--<e-tabs-nav :key="1">PROPS(配置数据)</e-tabs-nav>-->
                    <!--<e-tabs-nav :key="2">SLOTS(插曹)</e-tabs-nav>-->
                    <!--<e-tabs-nav :key="3">EVENTS(事件)</e-tabs-nav>-->
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
            <e-card>
                <e-card-header>
                    <div class="title">props---->cs的各种可选项</div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex1=!ex1"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex1">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[1]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[1]" :key="i">
                            <e-markdown-it v-model="exArrObj[1][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <e-row wrap colum class="example-row">
                        <e-col md12>
                            <h3>1,三类样式,8种颜色:<small>bg-,link-,outline-[primary,secondary,error,info,success,warning,danger,royal] 三选一</small></h3>
                        </e-col>
                        <e-col>
                            <h4>bg-[] 例: cs="bg-primary"</h4>
                            <e-btn >默认</e-btn>
                            <e-btn cs="bg-primary">蓝色(主色)</e-btn>
                            <e-btn cs="bg-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="bg-error">红色(错误)</e-btn>
                            <e-btn cs="bg-info">青色(信息)</e-btn>
                            <e-btn cs="bg-success">绿色(成功)</e-btn>
                            <e-btn cs="bg-warning">黄色(错误)</e-btn>
                            <e-btn cs="bg-danger">橙色(危险)</e-btn>
                            <e-btn cs="bg-royal">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>link-[] 例: cs="link-primary"</h4>
                            <e-btn cs="link-primary">蓝色(主色)</e-btn>
                            <e-btn cs="link-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="link-error">红色(错误)</e-btn>
                            <e-btn cs="link-info">青色(信息)</e-btn>
                            <e-btn cs="link-success">绿色(成功)</e-btn>
                            <e-btn cs="link-warning">黄色(错误)</e-btn>
                            <e-btn cs="link-danger">橙色(危险)</e-btn>
                            <e-btn cs="link-royal">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>outline-[] 例: cs="outline-primary"</h4>
                            <e-btn cs="outline-primary">蓝色(主色)</e-btn>
                            <e-btn cs="outline-secondary">灰黑色(次要)</e-btn>
                            <e-btn cs="outline-error">红色(错误)</e-btn>
                            <e-btn cs="outline-info">青色(信息)</e-btn>
                            <e-btn cs="outline-success">绿色(成功)</e-btn>
                            <e-btn cs="outline-warning">黄色(错误)</e-btn>
                            <e-btn cs="outline-danger">橙色(危险)</e-btn>
                            <e-btn cs="outline-royal">紫色(高贵)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>2,raised(阴影效果) 例: cs="bg-primary raised"</h3>
                            <e-btn cs="bg-primary raised">蓝色(主色)</e-btn>
                            <e-btn cs="bg-secondary raised">灰黑色(次要)</e-btn>
                            <e-btn cs="bg-error raised" >红色(错误)</e-btn>
                            <e-btn cs="bg-info raised">青色(信息)</e-btn>
                            <e-btn cs="bg-success raised">绿色(成功)</e-btn>
                            <e-btn cs="bg-warning raised">黄色(错误)</e-btn>
                            <e-btn cs="bg-danger raised">橙色(危险)</e-btn>
                            <e-btn cs="bg-royal raised">紫色(高贵)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row wrap colum class="example-row">
                        <e-col md12><h3>3,形状:<small>oval(圆角)/square(方角)/circle(圆)</small></h3></e-col>
                        <e-col>
                            <h4>oval(圆角) 例: cs="bg-primary oval"</h4>
                            <e-btn cs="bg-primary oval">蓝色(主色)</e-btn>
                            <e-btn cs="bg-secondary oval">灰黑色(次要)</e-btn>
                            <e-btn cs="bg-error oval">红色(错误)</e-btn>
                            <e-btn cs="bg-info oval">青色(信息)</e-btn>
                            <e-btn cs="bg-success oval">绿色(成功)</e-btn>
                            <e-btn cs="bg-warning oval">黄色(错误)</e-btn>
                            <e-btn cs="bg-danger oval">橙色(危险)</e-btn>
                            <e-btn cs="bg-royal oval">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>square(方角) 例: cs="bg-primary square"</h4>
                            <e-btn cs="bg-primary square">蓝色(主色)</e-btn>
                            <e-btn cs="bg-secondary square">灰黑色(次要)</e-btn>
                            <e-btn cs="bg-error square">红色(错误)</e-btn>
                            <e-btn cs="bg-info square">青色(信息)</e-btn>
                            <e-btn cs="bg-success square">绿色(成功)</e-btn>
                            <e-btn cs="bg-warning square">黄色(错误)</e-btn>
                            <e-btn cs="bg-danger square">橙色(危险)</e-btn>
                            <e-btn cs="bg-royal square">紫色(高贵)</e-btn>
                        </e-col>
                        <e-col>
                            <h4>circle(圆) 例: cs="bg-primary circle"</h4>
                            <e-btn cs="bg-primary circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="bg-secondary circle"><e-icon>ion-ios-home-outline</e-icon></e-btn>
                            <e-btn cs="bg-error circle"><e-icon>ion-android-alarm-clock</e-icon></e-btn>
                            <e-btn cs="bg-info circle"><e-icon>ion-android-alert</e-icon></e-btn>
                            <e-btn cs="bg-success circle"><e-icon>ion-android-alert</e-icon></e-btn>
                            <e-btn cs="bg-warning circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="bg-danger circle"><e-icon>ion-android-home</e-icon></e-btn>
                            <e-btn cs="bg-royal circle"><e-icon>ion-android-home</e-icon></e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>4,大小:<small>small,big,large,x-large,例: cs="bg-primary x-large"</small></h3>
                            <e-btn cs="bg-secondary small">small(最小)</e-btn>
                            <e-btn>默认(正常)</e-btn>
                            <e-btn cs="bg-info big">big(大的)</e-btn>
                            <e-btn cs="bg-success large">large(巨大)</e-btn>
                            <e-btn cs="bg-error x-large">x-large(最大)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                            <h3>5,块状--along:<small>块状按钮可以扩展全部可用宽度 例: cs="bg-primary along"</small></h3>
                            <e-btn cs="bg-secondary small along">small(最小)</e-btn>
                            <e-btn cs="along">默认(正常)</e-btn>
                            <e-btn cs="bg-info big along">big(大的)</e-btn>
                            <e-btn cs="bg-success large along">large(巨大)</e-btn>
                            <e-btn cs="bg-error x-large along">x-large(最大)</e-btn>
                        </e-col>
                    </e-row>
                    <e-row class="example-row">
                        <e-col>
                           <p>
                                说明：上面的几种样式，有些可以混合使用，有些不可以，也可以自定义css样式，cs=""或者class="";
                           </p>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--<h2>disabled(按钮失效，不可点击)</h2>-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->disabled(按钮失效，不可点击)</div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex2=!ex2"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex2">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[2]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[2]" :key="i">
                            <e-markdown-it v-model="exArrObj[2][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
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
                </e-card-body>
            </e-card>
            <!--ripple(点击时产生的波纹 默认 true)-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->ripple(点击时产生的波纹 默认 true)</div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex3=!ex3"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex3">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[3]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[3]" :key="i">
                            <e-markdown-it v-model="exArrObj[3][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
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
                </e-card-body>
            </e-card>
            <!--tag<small>默认'button', 可选html的各种可用标签['a','span','label,'div'...]</small>-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->tag<small>默认'button', 可选html的各种可用标签['a','span','label,'div'...]</small></div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex4=!ex4"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex4">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[4]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[4]" :key="i">
                            <e-markdown-it v-model="exArrObj[4][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <e-row>
                        <e-col>
                            <e-btn tag="a" cs="bg-warning">a标签</e-btn>
                            <e-btn tag="span" cs="bg-danger">span标签</e-btn>
                            <e-btn tag="div" cs="bg-royal">div标签</e-btn>
                            <e-btn tag="label" cs="bg-info">label标签</e-btn>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--<h2>a标签的href属性(带此属性只可生成a标签)</h2>-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->herf <small>a标签的href属性(带此属性只可生成a标签)</small></div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex5=!ex5"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex5">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[5]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[5]" :key="i">
                            <e-markdown-it v-model="exArrObj[5][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <e-row>
                        <e-col>
                            <e-btn href="http://www.baidu.com" cs="bg-primary">百度</e-btn>
                            <e-btn href="http://www.baidu.com" cs="bg-secondary">百度</e-btn>
                            <e-btn href="http://www.baidu.com" cs="bg-error">百度</e-btn>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--<h2>to<small>将组件标签指定为<span class="e-code">router-link</span></small></h2>-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->to<small>将组件标签指定为<span class="e-code">router-link</span></small></div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex6=!ex6"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex6">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[6]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[6]" :key="i">
                            <e-markdown-it v-model="exArrObj[6][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <e-row>
                        <e-col>
                            <e-btn to="cards" cs="bg-primary">卡片项</e-btn>
                            <e-btn to="apps" cs="bg-secondary">apps</e-btn>
                            <e-btn to="icons" cs="bg-error">图标</e-btn>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
        </section>
        <section>
            <p>
                未来补充 ：点击时加载效果，鼠标滑过效果（特别是圆形的），按钮组
                本页面的子目录，复制代码，查询与数据表关联
            </p>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./apiData.js"    //apiData的相关数据
    import {getTemCodeArr} from "../../helpers.js";

    /*
    exArrObj:[{'html':val,'js':val,'style':val},{}...]
     */
    export default {
        data(){
            return {
                exArrObj:null,//加载文档并转换成数组
                usageCode:false,
                apiDataTabs:'',
                apiSelet:[{title:'e-btn',value:'e-btn'}],
                apiSeletValue:'e-btn',  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                ex1:false,  //example 1,2,3,4,5,6
                ex2:false,
                ex3:false,
                ex4:false,
                ex5:false,
                ex6:false
            }
        },
        beforeMount(){
            let arr=exdoc.__docs.split('\n|\n');
            this.exArrObj= getTemCodeArr(arr);
            //this.apiData=api_data;
            //this.apiData=[{title:'fdsf',value:'fdsf'}]
        },
        mounted(){
            this.apiDataTabs=apiData[this.apiSeletValue];
            //console.info(this.apiDataTabs)
            //console.info(this.exArrObj);
            // let arr=exdoc.__docs.split('\n|\n');
            // this.exArrObj= getTemCodeArr(arr);
            //this.init();
        },
        methods:{
            init(){
                let p = new Promise(function(resolve, reject){        //做一些异步操作
                    let arr=exdoc.__docs.split('\n|\n');
                    return getTemCodeArr(arr);
                });
                p.then((val)=>{
                    this.exArrObj=val;
                }),()=>{
                    console.info('初始化失败');
                }
            }
        }
    }
</script>