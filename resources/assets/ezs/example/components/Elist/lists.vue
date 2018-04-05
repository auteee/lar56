<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">列表</h1>
            <div>
                <p>
                    <span class="e-code">e-list</span>
                    组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。
                    列表也可以包含子元素并在侧边栏（sidebar）使用。
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
                <e-card-body cs="bgc-huia">
                    <e-row>
                        <e-col xs12 sm6 offset-sm3>
                            <e-toolbar>
                                <e-btn cs="circle link-primary"><e-icon>ion-ios-home</e-icon></e-btn>
                                <e-toolbar-title>list实例</e-toolbar-title>
                                <e-spacer></e-spacer>
                                <e-btn cs="circle link-primary"><e-icon>ion-ios-search</e-icon></e-btn>
                            </e-toolbar>
                            <e-list :lists="list1" e-active></e-list>
                        </e-col>
                    </e-row>
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
                    <e-row wrap class="example-row">
                        <e-col md12>
                            <h3>1,背景,8种颜色:<small>bg-,link-,outline-[primary,secondary,error,info,success,warning,danger,royal] 三选一</small></h3>
                        </e-col>
                        <e-col md4>
                            <e-list :lists="list2" cs="bg-primary"></e-list>
                        </e-col>
                        <e-col md4>
                            <e-list :lists="list2" cs="bg-secondary"></e-list>
                        </e-col>
                        <e-col md4>
                            <e-list :lists="list2" cs="bg-warning"></e-list>
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
            <!--单行，双行，三行，多行数据-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->twoline,threeline,multiline</div>
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
                    <e-row wrap>
                        <e-col md12>
                            <h3>单行，双行，三行，多行数据<small>twoline,threeline,multiline</small></h3>
                        </e-col>
                        <e-col md3>
                            <div class="title">单行</div>
                            <e-list :lists="list2"></e-list>
                        </e-col>
                        <e-col md3>
                            <div class="title">双行</div>
                            <e-list :lists="list2" twoline></e-list>
                        </e-col>
                        <e-col md3>
                            <div class="title">三行</div>
                            <e-list :lists="list2" threeline></e-list>
                        </e-col>
                        <e-col md3>
                            <div class="title">多行</div>
                            <e-list :lists="list2" multiline></e-list>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--checkbox/radio-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->checkbox(多选框),radio(单选框)</div>
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
                    <e-row wrap>
                        <e-col xs12 sm4>
                            <div class="title">checkbox多选 v-model需要绑定数组</div>
                            <e-list :lists="list3" checkbox v-model="vmod1"></e-list>
                        </e-col>
                        <e-col xs12 sm4>
                            <e-input multi-line v-model="vmod1" label="checkbox多选值" readonly></e-input>

                            <e-input v-model="vmod2" label="radio单选值" readonly></e-input>
                        </e-col>
                        <e-col xs12 sm4>
                            <div class="title">radio单选 v-model需要绑定字符串</div>
                            <e-list :lists="list3" radio v-model="vmod2"></e-list>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--activeClass/eActive-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->activeClass/eActive(开启活动状态，和设置活动状态颜色)</div>
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
                    <e-row wrap>
                        <e-col md12>
                            <h3>设置active-class时，e-active必须为true</h3>
                        </e-col>
                        <e-col xs12 sm6>
                            <div class="title">e-active:true,active-class:默认为primary</div>
                            <e-list :lists="list3" e-active ></e-list>
                        </e-col>
                        <e-col xs12 sm6>
                            <div class="title">e-active:true,active-class:设置为error</div>
                            <e-list :lists="list3" e-active active-class="error"></e-list>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--lists配置项-->
            <e-card>
                <e-card-header>
                    <div class="title">props---->lists(配置项)</div>
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
                    <e-row wrap>
                        <e-col md12>
                            <h3>lists<small>各项配置和说明</small></h3>
                            <e-row wrap>
                                <e-col md12>[{header:'',title:'',value:'',icon:'',avatar:'',descs:'',callback:'',divider:''}]</e-col>
                                <e-col md2>header</e-col>
                                <e-col md4>可选</e-col>
                                <e-col md2>title</e-col>
                                <e-col md4>可选</e-col>
                                <e-col md2>value</e-col>
                                <e-col md4>可选</e-col>
                                <e-col md2>icon</e-col>
                                <e-col md4>icon图标</e-col>
                                <e-col md2>avatar</e-col>
                                <e-col md4>头像</e-col>
                                <e-col md2>descs</e-col>
                                <e-col md4>说明</e-col>
                                <e-col md2>callback</e-col>
                                <e-col md4>单项点击函数可对需要的项做配置</e-col>
                                <e-col md2>action</e-col>
                                <e-col md4>后面的icon</e-col>
                                <e-col md2>divider</e-col>
                                <e-col md4>分割线</e-col>
                                <e-col md2>css</e-col>
                                <e-col md4>divider的样式</e-col>
                            </e-row>
                        </e-col>
                        <e-col sm6 offset-sm3>
                            <e-list :lists="list4"></e-list>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
        </section>
        <section>
            <p>
                未来补充 ：有背景颜色时字体颜色要成对比
                本页面的子目录，复制代码，查询与数据表关联
            </p>
        </section>
    </e-container>
</template>
<script>
    import exdoc from './ex.doc.vue'    //docs 文档
    import {getTemCodeArr} from "../../helpers.js";
    import {apiData} from "./apiData.js"    //apiData的相关数据
    export default {
        data(){
            return{
                exArrObj:null,//加载文档并转换成数组
                usageCode:false,
                apiDataTabs:'',
                apiSelet:[{title:'e-list',value:'e-list'}],
                apiSeletValue:'e-list',  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                ex1:false,  //example 1,2,3,4,5,6
                ex2:false,
                ex3:false,
                ex4:false,
                ex5:false,
                ex6:false,
                ////////
                vmod1:[],
                vmod2:'',
                list1:[
                    { header: 'Today:2018-03-04' },
                    {
                        avatar: '/img/john.jpg',
                        title: '这是测试',
                        descs: "<span class='text--primary'>这是测试</span> — 这里显示的是一行或者二行或者三行或者更多行，这里显示的是一行或者二行或者三行或者更多行，这里显示的是一行或者二行或者三行或者更多行，这里显示的是一行或者二行或者三行或者更多行，这里显示的是一行或者二行或者三行或者更多行，这里显示的是一行或者二行或者三行或者更多行，",
                        action:'fa fa-home',
                        callback:function(item,index){
                            alert('title:'+item.title);
                        }
                    },
                    {
                        avatar: '/img/john.jpg',
                        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                        descs: "<span class='text--primary'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend.",
                        action:'fa fa-bath' ,
                        callback:function(item,index){
                            alert('index索引:'+index);
                            console.info(item);
                            console.info(index);
                        }
                    },
                    { avatar: '/img/john.jpg', title: 'Oui oui', descs: "<span class='text--primary'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?" ,action:'fa fa-home'}
                ],
                list2:[
                    {avatar: '/img/john.jpg',title:'title 1', value: 'title 1',descs:'这是一行数据说明' },
                    {avatar: '/img/john.jpg',title:'title 2', value: 'title 2',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                    {avatar: '/img/john.jpg',title:'title 3', value: 'title 3',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                    {avatar: '/img/john.jpg',title:'title 4', value: 'title 4',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                ],
                list3:[
                    {title:'title 1', value: 'title 1'},
                    {title:'title 2', value: 'title 2'},
                    {title:'title 3', value: 'title 3'},
                    {title:'title 4', value: 'title 4'},
                ],
                list4:[
                    {header:'这是header'},
                    {title:'只有title'},
                    {value:'这个是只有value'},
                    {avatar:'/img/john.jpg',title:'带头像的'},
                    {icon:'fa fa-home',title:'这个是icon图标'},
                    {divider:true},
                    {title:'这个是带有说明',descs:'我是说明'},
                    {title:'这个是action',action:'fa fa-home'},
                    {title:'这个是callback',callback:()=>{alert('你点击了我')}},
                ]
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