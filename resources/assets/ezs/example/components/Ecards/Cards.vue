
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">卡片</h1>
            <e-well>
                <code>e-card</code>组件是一个多功能组件，可用于从面板到静态图像的任何事物。
                card组件有许多班助组件，使标记尽可能简单。
                没有列出选项的组件使用Vue的功能组件选项来加快渲染速度，并作为标记糖来使构建更容易。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-well>一个卡片有一个基本容器<code>e-card</code>。内置了四个基本块：
                    <code>e-card-header</code>,<code>e-card-body</code>,
                    <code>e-card-footer</code>,<code>e-card-media</code>,
                    除此之外还可以和其他组件(以<kbd>$vm.solts.default</kbd>形式)配合使用
                </e-well>
                <e-container>
                    <e-card>
                        <e-card-header>{{article.title}}</e-card-header>
                        <e-card-media :img="img[1]" height="200"></e-card-media>
                        <e-card-body>
                            <h2>{{article.title}}</h2>
                            <div>{{article.content}}</div>
                        </e-card-body>
                        <e-card-footer>{{article.author}}--{{article.times}}</e-card-footer>
                    </e-card>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#媒体与文字">
                <e-container grid-list-xl text-xs-c>
                    <e-well cs="text-xs-l"><code>e-card-media</code>使用布局系统，我们可以在背景中的任何地方添加自定义文本。</e-well>
                    <e-card>
                        <e-card-media :img="img[2]" height="300">
                            <e-row>
                                <e-col>
                                    <span>{{article.title}}</span>
                                </e-col>
                            </e-row>
                        </e-card-media>
                        <e-card-body>
                            <div class="title">{{article.title}}</div><br>
                            <span>{{article.times}}--{{article.author}}</span><br>
                            <e-well>{{article.content}}</e-well>
                        </e-card-body>
                    </e-card>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#水平的卡片">
                <e-container fluid grid-list-lg style="min-height: 0;">
                    <e-well><code>e-col</code>您可以创建自定义的水平卡片。使用contain属性来缩小v-card-media以适应容器内部，而不是覆盖。</e-well>
                    <e-row wrap>
                        <e-col xs12>
                            <e-card>
                                <e-row>
                                    <e-col xs7>
                                        <e-card-body>这里是内容body</e-card-body>
                                    </e-col>
                                    <e-col xs5>
                                        <e-card-media :img="img[0]" contain height="150">
                                        </e-card-media>
                                    </e-col>
                                </e-row>
                            </e-card>
                        </e-col>
                        <e-col xs12>
                            <e-card cs="bg-info">
                                <e-row>
                                    <e-col xs7>
                                        <e-card-body>这里是内容body</e-card-body>
                                    </e-col>
                                    <e-col xs5>
                                        <e-card-media :img="img[1]" contain height="150"></e-card-media>
                                    </e-col>
                                </e-row>
                            </e-card>
                        </e-col>
                        <e-col xs12>
                            <e-card cs="bg-error">
                                <e-row>
                                    <e-col xs7>
                                        <e-card-body>这里是内容body</e-card-body>
                                    </e-col>
                                    <e-col xs5>
                                        <e-card-media :img="img[2]" contain height="150">
                                        </e-card-media>
                                    </e-col>
                                </e-row>
                            </e-card>
                        </e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#栅格">
                <e-well>使用栅格列表，您可以创建漂亮的布局。</e-well>
                <e-row colum>
                    <e-col xs12 sm6 offset-sm3>
                        <e-card>
                            <e-card-header>
                                <e-btn cs="link-primary circle small"><e-icon>ion-ios-home</e-icon></e-btn>
                                <e-toolbar-title>title</e-toolbar-title>
                                <e-spacer></e-spacer>
                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                            </e-card-header>
                            <e-container fluid grid-list-md>
                                <e-row wrap>
                                    <e-col xs12>
                                        <e-card>
                                            <e-card-media img="/img/house.jpg" height="200px">
                                                <span>myhouse</span>
                                            </e-card-media>
                                            <e-card-footer>
                                                <e-spacer></e-spacer>
                                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                                            </e-card-footer>
                                        </e-card>
                                    </e-col>
                                    <e-col xs6>
                                        <e-card>
                                            <e-card-media img="/img/road.jpg" height="200px"></e-card-media>
                                            <e-card-footer>
                                                <e-spacer></e-spacer>
                                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                                            </e-card-footer>
                                        </e-card>
                                    </e-col>
                                    <e-col xs6>
                                        <e-card>
                                            <e-card-media img="/img/plane.jpg" height="200px"></e-card-media>
                                            <e-card-footer>
                                                <e-spacer></e-spacer>
                                                <e-btn cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                                            </e-card-footer>
                                        </e-card>
                                    </e-col>
                                </e-row>
                            </e-container>
                        </e-card>
                    </e-col>
                </e-row>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#自定义操作">
                <e-well>使用简单的条件，您可以轻松添加隐藏的补充文本，直到被打开。</e-well>
                <e-row>
                    <e-col xs12 sm6 offset-sm3>
                        <e-card>
                            <e-card-media img="/img/house.jpg" height="200px">
                                <span>myhouse</span>
                            </e-card-media>
                            <e-card-body>
                                <div>
                                    <div class="headline">Top western road trips</div>
                                    <span class="grey--text">1,000 miles of wonder</span>
                                </div>
                            </e-card-body>
                            <e-card-footer >
                                <e-spacer></e-spacer>
                                <e-btn @click="mod1=!mod1" cs="link-primary circle small"><e-icon>ion-android-search</e-icon></e-btn>
                            </e-card-footer>
                            <e-card-body v-show="mod1">
                                {{article.content}}
                            </e-card-body>
                        </e-card>
                    </e-col>
                </e-row>
            </exa>
            <!--ex5-->
            <!--ex6-->
        </section>
        <section>
            <e-well>
                未来补充 ：视频？
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
                //apiDataTabs:'',
                apiSelet:[
                    {title:'e-card',value:'e-card'},
                    {title:'e-card-header',value:'e-card-header'},
                    {title:'e-card-media',value:'e-card-media'},
                    {title:'e-card-body',value:'e-card-body'},
                    {title:'e-card-footer',value:'e-card-footer'}
                ],
                apiSeletValue:{title:'e-card',value:'e-card'},  //关联apiDataTabs的数据
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                mod1:false,
                img:['/img/img1.jpg','/img/img2.jpg','/img/img3.jpg'],
                article:{
                    title:'爱莲说',
                    times:'宋代',
                    author:'周敦颐',
                    content:'水陆草木之花，可爱者甚蕃。晋陶渊明独爱菊。自李唐来，世人甚爱牡丹。' +
                    '予独爱莲之出淤泥而不染，濯清涟而不妖，中通外直，不蔓不枝，香远益清，亭亭净植，可远观而不可亵玩焉。\n'+
                    '予谓菊，花之隐逸者也；牡丹，花之富贵者也；莲，花之君子者也。噫！菊之爱，陶后鲜有闻。莲之爱，同予者何人?牡丹之爱，宜乎众矣!'
                },
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
            //this.apiDataTabs=apiData[this.apiSeletValue];
            //console.info(this.apiDataTabs);
        },
        methods:{
            test(){
                console.info(this.apiSeletValue);
            }
        }
    }
</script>