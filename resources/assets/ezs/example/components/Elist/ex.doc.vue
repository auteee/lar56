
<docs>
    <template><!--ex0-->
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
    </template>
    <script>
        export default {
            data(){
                return{
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
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    list2:[
                        {avatar: '/img/john.jpg',title:'title 1', value: 'title 1',descs:'这是一行数据说明' },
                        {avatar: '/img/john.jpg',title:'title 2', value: 'title 2',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                        {avatar: '/img/john.jpg',title:'title 3', value: 'title 3',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                        {avatar: '/img/john.jpg',title:'title 4', value: 'title 4',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                    ]
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    list2:[
                        {avatar: '/img/john.jpg',title:'title 1', value: 'title 1',descs:'这是一行数据说明' },
                        {avatar: '/img/john.jpg',title:'title 2', value: 'title 2',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                        {avatar: '/img/john.jpg',title:'title 3', value: 'title 3',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                        {avatar: '/img/john.jpg',title:'title 4', value: 'title 4',descs:'这是很多行，很多行，很多行，很多行，很多行,很多行，很多行，很多行，很多行很多行，很多行，很多行，很多行数据说明'},
                    ]
                }
            }
        }
    </script>
    |
    <template><!--ex3-->
        <e-row wrap>
            <e-col xs12 sm4>
                <div class="title">checkbox多选 v-model需要绑定数组</div>
                <e-list :lists="list3" checkbox v-model="vmod1"></e-list>
            </e-col>
            <e-col xs12 sm4>
                <e-input type="textarea" v-model="vmod1" label="checkbox多选值" readonly></e-input>

                <e-input v-model="vmod2" label="radio单选值" readonly></e-input>
            </e-col>
            <e-col xs12 sm4>
                <div class="title">radio单选 v-model需要绑定字符串</div>
                <e-list :lists="list3" radio v-model="vmod2"></e-list>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    vmod1:[],
                    vmod2:'',
                    list3:[
                        {title:'title 1', value: 'title 1'},
                        {title:'title 2', value: 'title 2'},
                        {title:'title 3', value: 'title 3'},
                        {title:'title 4', value: 'title 4'},
                    ]
                }
            }
        }
    </script>
    |
    <template><!--ex4-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    list3:[
                        {title:'title 1', value: 'title 1'},
                        {title:'title 2', value: 'title 2'},
                        {title:'title 3', value: 'title 3'},
                        {title:'title 4', value: 'title 4'},
                    ]
                }
            }
        }
    </script>
    |
    <template><!--ex5-->
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
    </template>
    <script>
        export default {
            data(){
                return {
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
            }
        }
    </script>
</docs>
