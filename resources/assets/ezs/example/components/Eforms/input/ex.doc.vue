
<docs>
    <template><!--ex0-->
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
    </template>
    |
    <template><!--ex1-->
        <e-container>
            <e-row>
                <e-col xs4 align-center d-flex>普通带hint模式</e-col>
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
    </template>
    |
    <template><!--ex2-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    showPassword:true,
                }
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
    |
    <template><!--ex3-->
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
    </template>
    |
    <template><!--ex4-->
        <e-row wrap>
            <e-col xs12><e-input label="计数器" maxlength="50" value="本例使用了字符计数器"></e-input></e-col>
            <e-col xs5>
                <e-input label="计数器" :rows="6" multi-line maxlength="500" v-model="loushiming"></e-input>
            </e-col>
            <e-col xs5 offset-xs2>
                <e-input label="计数器" :rows="6" textarea maxlength="500" v-model="loushiming"></e-input>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    loushiming: '山不在高，有仙则名。水不在深，有龙则灵。' +
                    '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                    '谈笑有鸿儒，往来无白丁。' +
                    '可以调素琴，阅金经。' +
                    '无丝竹之乱耳，无案牍之劳形。' +
                    '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
                }
            }
        }
    </script>
    |
    <template><!--ex5-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    title: '陋室铭',
                    email: '',
                    rules: {
                        required: (value) => !!value || '需要填写email',
                        email: (value) => {
                            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            return pattern.test(value) || '无效 e-mail.'
                        }
                    },
                }
            }
        }
    </script>
    |
    <template><!--ex6-->
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
    </template>
    |
    <template><!--ex7-->
        <e-container fluid grid-list-sm>
            <e-toolbar class="bg-error">
                <e-btn cs="bg-transparent"><e-icon>fa fa-home</e-icon></e-btn>
                <e-toolbar-title>标题</e-toolbar-title>
                <e-spacer></e-spacer>
                <e-btn><e-icon>fa fa-home</e-icon></e-btn>
            </e-toolbar>
        </e-container>
    </template>
</docs>
