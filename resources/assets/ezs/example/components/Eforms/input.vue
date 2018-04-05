
<template>
    <e-container>
        <section id="introduction">
            <h1 class="primary">文本框</h1>
            <e-well tag="p">
                文本框组件用于输入用户提供的信息。
            </e-well>
        </section>
        <section id="usage">
            <h1 class="primary">实例</h1>
            <exa :ex-arr-obj="exArrObj[0]">
                <e-container>
                    <e-row>
                        <e-col xs4>普通带label模式</e-col>
                        <e-col xs8><e-input label="用户名"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4>焦距</e-col>
                        <e-col xs8><e-input label="用户名" value="我是用户名" cs="focused"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4>带有value值</e-col>
                        <e-col xs8><e-input label="用户名" value="我是value值"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4>不可用</e-col>
                        <e-col xs8><e-input label="用户名" value="我是value值" disabled></e-input></e-col>
                    </e-row>
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
            <exa :ex-arr-obj="exArrObj[1]" title="#单行">
                <e-well>单行文本框的标签不会浮动到焦点或数据之上。单行可用placeholder提示</e-well>
                <e-container>
                    <e-row>
                        <e-col xs4 align-center d-flex>正常模式</e-col>
                        <e-col xs8><e-input placeholder="placeholdert提示"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4 align-center d-flex>焦距</e-col>
                        <e-col xs8 ><e-input placeholder="placeholder提示用户名" value="我是用户名" cs="focused"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4 align-center d-flex>带有value值</e-col>
                        <e-col xs8><e-input placeholder="placeholder提示用户名" value="我是value值"></e-input></e-col>
                    </e-row>
                    <e-row>
                        <e-col xs4 align-center d-flex>不可用</e-col>
                        <e-col xs8><e-input placeholder="placeholder提示不可用" disabled></e-input></e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--ex2-->
            <exa :ex-arr-obj="exArrObj[2]" title="#带图标和类型">
                <e-well>图标可以指定为预加或附加。<code>prepend-icon/append-icon</code> 前后图标
                    <code>prepend-icon-cb/append-icon-cb</code>前后图标事件,
                    <kbd>type</kbd>属性可设置文本显示的方式，默认是text类型，详见<kbd>html/5 input type</kbd>说明
                </e-well>
                <e-container>
                    <e-row>
                        <e-col xs5>
                            <e-input placeholder="前图标" prepend-icon="ion-ios-telephone-outline"></e-input>
                        </e-col>
                        <e-col xs5 offset-xs2>
                            <e-input placeholder="后图标" append-icon="ion-headphone"></e-input>
                        </e-col>
                    </e-row>
                    <e-row>
                        <e-col xs5>
                            <e-input label="前图标及事件/是否显示密码"
                                     :type="showPassword ? 'password' : 'text'"
                                     :prepend-icon="showPassword?'ion-eye-disabled':'ion-eye'"
                                     :prependIconCb="() => (showPassword = !showPassword)">
                            </e-input>
                        </e-col>
                        <e-col xs5 offset-xs2>
                            <e-input id="copy2"
                                     label="后图标及事件/复制input值"
                                     appendIcon="ion-ios-copy-outline"
                                     :appendIconCb="eCopy">
                            </e-input>
                        </e-col>
                    </e-row>
                </e-container>
            </exa>
            <!--ex3-->
            <exa :ex-arr-obj="exArrObj[3]" title="#多行">
                <e-well>
                    多行文本框在需要大量文本输入时很有用。属性<kbd>multi-line/textarea</kbd>可设置多行
                    <kbd>autoGrow</kbd>可设置自动增行 <kbd>maxHeight</kbd>可设置最高高度，超过就会显示滚动条,
                </e-well>
                <e-row wrap>
                    <e-col xs5>
                        <e-input label="multiLine" multiLine></e-input>
                    </e-col>
                    <e-col xs5 offset-xs2>
                        <e-input label="textarea" textarea hideDetail></e-input>
                    </e-col>
                    <e-col xs5>
                        <e-input label="自动增行" multiLine autoGrow></e-input>
                    </e-col>
                    <e-col xs5 offset-xs2>
                        <e-input label="自动增行" textarea hideDetail autoGrow maxHeight="500"></e-input>
                    </e-col>
                </e-row>
            </exa>
            <!--ex4-->
            <exa :ex-arr-obj="exArrObj[4]" title="#字符计数器">
                <e-well>使用计数器通知用户字符限制，计数器本身不执行任何验证，您需要将其与内部验证系统或第三方库配对。</e-well>
                <e-row wrap>
                    <e-col xs12><e-input label="计数器" maxlength="50" value="本例使用了字符计数器"></e-input></e-col>
                    <e-col xs5>
                        <e-input label="计数器" :rows="6" multi-line maxlength="500" v-model="loushiming"></e-input>
                    </e-col>
                    <e-col xs5 offset-xs2>
                        <e-input label="计数器" :rows="6" textarea maxlength="500" v-model="loushiming"></e-input>
                    </e-col>
                </e-row>
            </exa>
            <!--ex5-->
            <exa :ex-arr-obj="exArrObj[5]" title="#验证">
                <e-well> ezs包含简单的验证通过使用<code>rules</code> 属性，这个属性接受一个回调函数组，
                    在验证规则时，当前的 v-model 值将被传递给回调函数，这个回调函数必须返回 <code>ture</code>或<code>String</code>或者错误信息。
                </e-well>
                <e-row wrap justify-center>
                    <e-col xs12 sm6>
                        <e-card>
                            <e-toolbar cs="bg-primary">
                                <e-btn cs="circle"><e-icon>ion-ios-arrow-thin-left</e-icon></e-btn>
                                <e-spacer></e-spacer>
                                <e-btn cs="circle"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                            </e-toolbar>
                            <e-card-body>
                                <e-input label="标题" v-model="title" :rules="[rules.required]"></e-input>
                                <e-input label="Email" v-model="email" type="email" :rules="[rules.required, rules.email]"></e-input>
                            </e-card-body>
                        </e-card>
                    </e-col>
                </e-row>
            </exa>
            <!--ex6-->
            <exa :ex-arr-obj="exArrObj[5]" title="#提示文本/前缀和后缀/自定义颜色">
                <e-well> 在文本框组件使用<kbd>hint</kbd>来设置将提示的文本添加到文本字段下。
                    使用<kbd>isHint</kbd>保持提示文本在文本字段未被聚焦时保持可见性。<br/>
                    <kbd>prefix</kbd> 和<kbd>suffix</kbd>属性允许你在文本字段旁添加一段不可修改的文本。<br/>
                    <kbd>cs</kbd> 属性可设置内置颜色
                </e-well>
                <e-row wrap justify-center>
                    <e-col xs12 sm6>
                        <e-card>
                            <e-toolbar cs="bg-primary">
                                <e-btn cs="circle"><e-icon>ion-ios-arrow-thin-left</e-icon></e-btn>
                                <e-spacer></e-spacer>
                                <e-btn cs="circle"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                            </e-toolbar>
                            <e-card-body>
                                <e-input label="焦距提示" hint="现在是焦距状态"></e-input>
                                <e-input cs="info" label="一直存在提示" hint="看到了吗，我是提示" isHint></e-input>
                                <e-input label="人民币" value="10.00" prefix="￥"></e-input>
                                <e-input label="邮箱地址" value="example" suffix="@gmail.com"></e-input>
                                <e-input label="时间" value="12:30:00" type="time" suffix="PST"></e-input>
                            </e-card-body>
                        </e-card>
                    </e-col>
                </e-row>
            </exa>

        </section>
        <section>
            <e-well>
                未来补充 ：自定义验证,Solo style及其他样式,掩码, 进度条,
                本页面的子目录，复制代码，查询与数据表关联
            </e-well>
        </section>
    </e-container>
</template>

<script>
    import exdoc from './input/ex.doc.vue'    //docs 文档
    //import apiDataJson from "./apiData.json"
    import {apiData} from "./input/apiData.js"    //apiData的相关数据
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
                apiSelet:[{value:'e-input'}],
                //apiSeletDiseable:this.apiSelet.length===1,
                //////////
                showPassword:true,
                title: '陋室铭',
                email: '',
                rules: {
                    required: (value) => !!value || '需要填写email',
                    email: (value) => {
                        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return pattern.test(value) || '无效 e-mail.'
                    }
                },
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
            eCopy(){
                document.getElementById('copy2').select(); // 选择对象
                try{
                    if(document.execCommand('copy', false, null)){
                        document.execCommand("copy");
                        alert("已复制好，可贴粘。");
                    } else{
                        alert("复制失败，请手动复制");
                    }
                } catch(err){
                    alert("复制失败，请手动复制");
                }
            }
        }
    }
</script>