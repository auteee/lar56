
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">栅格系统</h1>
            <div>
                <p>
                    12个点的栅格系统，它使用css3的<kbd>flex</kbd>构建，栅格用于布局应用程序的内容。
                    它包含5种类型的媒体断点，用于定位特定的屏幕大小或方向。
                    栅格组件的属性实际上是从它们定义的属性派生的类，
                    所以在使用的时候可以当作class=""的类使用，也可直接做为属性使用。
                </p>
            </div>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <div>
                <p><span class="e-code">e-container</span>可以用于中心聚焦的页面,
                    <span class="e-code">fluid</span>属性可用来扩展它的全部宽度。
                    <span class="e-code">e-row</span>用于分隔行等同于表格的<span class="e-code">th</span>。
                    <span class="e-code">e-col</span>用于分隔列等同于表格的<span class="e-code">td</span>.
                    所以基本布局结构如下，<kbd>e-container>>e-row>>e-col</kbd>.栅格链的每个部分都是一个弹性框(flex)元素.
                    最后,<span class="e-code">e-col</span>会自动设置它的子元素获得<kbd>flex:1 1 auto</kbd>
                </p>
            </div>
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
                    <!--usageCode内容-->
                        <e-container grid-list-md text-xs-c>
                            <e-row wrap>
                                <e-col xs12>
                                    <e-card><e-card-body cs="bg-primary">12</e-card-body></e-card>
                                </e-col>
                                <e-col xs6 v-for="i in 2" :key="`6${i}`">
                                    <e-card><e-card-body cs="bg-error">6</e-card-body></e-card>
                                </e-col>
                                <e-col xs4 v-for="i in 3" :key="`4${i}`">
                                    <e-card><e-card-body cs="bg-primary">4</e-card-body></e-card>
                                </e-col>
                                <e-col xs3 v-for="i in 4" :key="`3${i}`">
                                    <e-card><e-card-body cs="bg-error">3</e-card-body></e-card>
                                </e-col>
                                <e-col xs2 v-for="i in 6" :key="`2${i}`">
                                    <e-card><e-card-body cs="bg-primary">2</e-card-body></e-card>
                                </e-col>
                                <e-col xs1 v-for="i in 12" :key="`1${i}`">
                                    <e-card><e-card-body cs="bg-error">1</e-card-body></e-card>
                                </e-col>
                            </e-row>
                        </e-container>
                    <!--内容-->
                </e-card-body>
            </e-card>
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
            <e-card>
                <e-card-header>
                    <div class="title">#偏移</div>
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
                    <!--更换内容ex1-->
                    <e-row wrap colum class="example-row">
                        <e-container grid-list-xl text-xs-c>
                            <e-row wrap>
                                <e-col xs10 offset-xs1>
                                    <e-card cs="bg-royal">
                                        <e-card-body>xs10 offset-xs1</e-card-body>
                                    </e-card>
                                </e-col>
                                <e-col xs7 offset-xs0 offset-md2 offset-lg5>
                                    <e-card cs="bg-secondary">
                                        <e-card-body>xs7 offset-(xs5 | md2 | lg5)</e-card-body>
                                    </e-card>
                                </e-col>
                                <e-col xs12 sm5 md3>
                                    <e-card cs="bg-primary">
                                        <e-card-body>(xs12 | sm5 | md3)</e-card-body>
                                    </e-card>
                                </e-col>
                                <e-col xs12 sm5 md5 offset-xs0 offset-lg2>
                                    <e-card cs="bg-success">
                                        <e-card-body>(xs12 | sm5 | md5) offset-(xs0 | lg2)</e-card-body>
                                    </e-card>
                                </e-col>
                            </e-row>
                        </e-container>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--ex2-->
            <e-card>
                <div class="title">#排序</div>
                <p>您可以控制栅格子项目的排序。与偏移一样，您可以为不同的尺寸设置不同的排序，设计适合任何应用程序的专门的屏幕布局。</p>
                <e-card-header>
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
                    <!--更换内容ex2-->
                    <e-container fluid>
                        <e-row>
                            <e-col xs6 order-lg2>
                                <e-card cs="bg-error">
                                    <e-card-body>#1</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs6>
                                <e-card cs="bg-danger">
                                    <e-card-body>#2</e-card-body>
                                </e-card>
                            </e-col>
                        </e-row>
                        <e-row>
                            <e-col xs4 order-md2 order-xs1>
                                <e-card cs="bg-primary">
                                    <e-card-body>#1</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs4 order-md3 order-xs2>
                                <e-card cs="bg-info">
                                    <e-card-body>#2</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs4 order-md1 order-xs3>
                                <e-card cs="bg-success">
                                    <e-card-body>#3</e-card-body>
                                </e-card>
                            </e-col>
                        </e-row>
                        <e-row wrap>
                            <e-col xs12 sm6 md3 order-md4 order-sm2>
                                <e-card cs="bg-error">
                                    <e-card-body>#1</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs12 sm6 md3 order-md3 order-sm1>
                                <e-card cs="bg-warning">
                                    <e-card-body>#2</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs12 sm6 md3 order-md2 order-sm4>
                                <e-card cs="bg-danger">
                                    <e-card-body>#3</e-card-body>
                                </e-card>
                            </e-col>
                            <e-col xs12 sm6 md3 order-md1 order-sm3>
                                <e-card cs="bg-royal">
                                    <e-card-body>#4</e-card-body>
                                </e-card>
                            </e-col>
                        </e-row>
                    </e-container>
                    <!--更换内容ex2-->
                </e-card-body>
            </e-card>
            <!--ex3-->
            <e-card>
                <e-card-header>
                    <div class="title">#方向和对齐</div>
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
                    <p>以各种方式指定方向和对齐方式。所有可用的<kbd>flex-box</kbd> api都可以通过直观的辅助器属性获得。</p>
                    <e-row>
                        <e-col>
                            <!--更换内容ex3-->
                            <e-container fluid grid-list-xl>
                                <e-row justify-space-between>
                                    <e-col xs2>
                                        <e-card cs="bg-primary">
                                            <e-card-body>一</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-secondary">
                                            <e-card-body>二</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-error">
                                            <e-card-body>三</e-card-body>
                                        </e-card>
                                    </e-col>
                                </e-row>
                                <e-row justify-space-around>
                                    <e-col xs2>
                                        <e-card cs="bg-primary">
                                            <e-card-body>一</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-secondary">
                                            <e-card-body>二</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-error">
                                            <e-card-body>三</e-card-body>
                                        </e-card>
                                    </e-col>
                                </e-row>
                                <e-row justify-center>
                                    <e-col xs2>
                                        <e-card cs="bg-primary">
                                            <e-card-body>一</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-secondary">
                                            <e-card-body>二</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col xs2>
                                        <e-card cs="bg-error">
                                            <e-card-body>三</e-card-body>
                                        </e-card>
                                    </e-col>
                                </e-row>
                            </e-container>
                            <!--更换内容ex3-->
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--ex4-->
            <e-card>
                <e-card-header>
                    <div class="title">#行和列断点</div>
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
                    <p>更具分辨率动态更改布局。（调整您的屏幕，并观看布局更改为一个行的小断点）</p>
                    <e-row>
                        <e-col>
                            <!--更换内容ex4-->
                            <e-container grid-list-xl>
                                <e-row v-bind="binding">
                                    <e-col>
                                        <e-card cs="bg-error">
                                            <e-card-body>one</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col>
                                        <e-card cs="bg-secondary">
                                            <e-card-body>two</e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col>
                                        <e-card cs="bg-info">
                                            <e-card-body>three</e-card-body>
                                        </e-card>
                                    </e-col>
                                </e-row>
                            </e-container>
                            <!--更换内容ex4-->
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
            <!--ex5-->
            <e-card>
                <e-card-header>
                    <div class="title">#嵌套栅格</div>
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
                    <p>栅格可以被嵌套，类似于其它框架，以实现非常自定义的布局。</p>
                    <!--更换内容ex5-->
                    <e-container fluid grid-list-md>
                        <e-row wrap>
                            <e-col d-flex xs12 sm6 md4>
                                <e-card cs="bg-primary">
                                    <e-card-header cs="primary">《陋室铭》</e-card-header>
                                    <e-card-body v-text="loushiming"></e-card-body>
                                </e-card>
                            </e-col>
                            <e-col d-flex xs12 sm6 md3>
                                <e-row wrap>
                                    <e-col d-flex>
                                        <e-card cs="bg-info">
                                            <e-card-body v-text="loushiming.slice(0, 20)"></e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col d-flex>
                                        <e-row wrap>
                                            <e-col d-flex v-for="n in 2" :key="n" xs12>
                                                <e-card cs="bg-error">
                                                    <e-card-body v-text="loushiming.slice(0, 20)"></e-card-body>
                                                </e-card>
                                            </e-col>
                                        </e-row>
                                    </e-col>
                                </e-row>
                            </e-col>
                            <e-col d-flex xs12 sm6 md2>
                                <e-card cs="bg-danger">
                                    <e-card-body v-text="loushiming.slice(0, 30)"></e-card-body>
                                </e-card>
                            </e-col>
                            <e-col d-flex xs12 sm6 md3>
                                <e-card cs="bg-info">
                                    <e-card-body v-text="loushiming.slice(0, 42)"></e-card-body>
                                </e-card>
                            </e-col>
                        </e-row>
                    </e-container>
                    <!--更换内容ex5-->
                </e-card-body>
            </e-card>
            <!--ex6-->
            <e-card>
                <e-card-header>
                    <div class="title">#独特的布局</div>
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
                    <p>ezs栅格系统的强大和灵活性使您可以创建出色的用户界面。</p>
                    <!--更换内容ex6-->
                    <e-container fluid grid-list-sm>
                        <e-row wrap>
                            <e-col d-flex xs12 order-xs5>
                                <e-row column>
                                    <e-col>
                                        <e-card cs="bg-danger">
                                            <e-card-body v-text="loushiming"></e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col>
                                        <e-card cs="bg-error">
                                            <e-card-body v-text="loushiming"></e-card-body>
                                        </e-card>
                                    </e-col>
                                </e-row>
                            </e-col>
                            <e-col d-flex xs12 sm7>
                                <e-row wrap>
                                    <e-col d-flex>
                                        <e-card cs="bg-success">
                                            <e-card-body v-text="loushiming.slice(0, 42)"></e-card-body>
                                        </e-card>
                                    </e-col>
                                    <e-col d-flex>
                                        <e-row>
                                            <e-col d-flex v-for="n in 2" :key="n">
                                                <e-card cs="bg-success">
                                                    <e-card-body v-text="loushiming.slice(0, 30)"></e-card-body>
                                                </e-card>
                                            </e-col>
                                        </e-row>
                                    </e-col>
                                </e-row>
                            </e-col>
                            <e-col d-flex xs12 sm2>
                                <e-card cs="bg-success">
                                    <e-card-body v-text="loushiming.slice(0, 20)"></e-card-body>
                                </e-card>
                            </e-col>
                            <e-col d-flex xs12 sm3>
                                <e-card cs="bg-success">
                                    <e-card-body v-text="loushiming.slice(0, 42)"></e-card-body>
                                </e-card>
                            </e-col>
                        </e-row>
                    </e-container>
                    <!--更换内容ex6-->
                </e-card-body>
            </e-card>
            <!--ex7-->
            <e-card>
                <e-card-header>
                    <div class="title">#e-spacer</div>
                    <e-spacer></e-spacer>
                    <e-btn cs="link-primary circle small" @click="ex7=!ex7"><e-icon>ion-code</e-icon></e-btn>
                </e-card-header>
                <e-tabs v-show="ex7">
                    <e-tabs-header>
                        <e-tabs-nav v-for="(v,key,i) in exArrObj[7]" :key="i">
                            {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                        </e-tabs-nav>
                        <e-tabs-slider cs="bg-error"></e-tabs-slider>
                    </e-tabs-header>
                    <e-tabs-body>
                        <e-tabs-content v-for="(v,key,i) in exArrObj[7]" :key="i">
                            <e-markdown-it v-model="exArrObj[7][key]" :language="key"></e-markdown-it>
                        </e-tabs-content>
                    </e-tabs-body>
                </e-tabs>
                <e-card-body>
                    <p>当您想要填充可用空间或在两个组件之间留出空间时，<span class="e-code">e-spacer</span>组件会很有用。</p>
                    <!--更换内容ex7-->
                    <e-container fluid grid-list-sm>
                        <e-toolbar class="bg-error">
                            <e-btn cs="bg-transparent"><e-icon>fa fa-home</e-icon></e-btn>
                            <e-toolbar-title>标题</e-toolbar-title>
                            <e-spacer></e-spacer>
                            <e-btn><e-icon>fa fa-home</e-icon></e-btn>
                        </e-toolbar>
                    </e-container>
                    <!--更换内容ex7-->
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
                ex6:false,
                ex7:false,
                /////
                loushiming: '山不在高，有仙则名。水不在深，有龙则灵。' +
                '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                '谈笑有鸿儒，往来无白丁。' +
                '可以调素琴，阅金经。' +
                '无丝竹之乱耳，无案牍之劳形。' +
                '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
            }
        },
        computed: {
            binding () {
                const binding = {};

                if (this.$ezs.breakpoint.mdAndUp) binding.column = true;

                return binding
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