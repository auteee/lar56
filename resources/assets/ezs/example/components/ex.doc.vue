
<docs>
    <template><!--ex0-->
        <e-row justify-space-around>
            <e-btn  @click.stop="dialog1 = true">打开对话框1</e-btn>
            <e-btn  @click.stop="dialog2 = true">打开对话框2</e-btn>
            <e-dialog v-model="dialog1" fullscreen>
                <e-card height="100%">
                    <e-toolbar>
                        <e-btn @click="dialog1=!dialog1" ><e-icon>ion-android-close</e-icon></e-btn>
                        <e-toolbar-title>设置示例</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn>保存</e-btn>
                        <e-btn>取消</e-btn>
                    </e-toolbar>
                    <e-card-body >
                        <e-btn  @click.stop="dialog2 = true">打开对话框2</e-btn>
                        <e-row>
                            <e-well>
                                {{loushiming}}
                            </e-well>
                        </e-row>
                    </e-card-body>
                    <e-card-footer>底部位置，可以放置其他按钮</e-card-footer>
                </e-card>
            </e-dialog>
            <e-dialog v-model="dialog2" max-width="500px">
                <e-card>
                    <e-card-header>标题</e-card-header>
                    <e-card-body>
                        对话框内打开对话框测试
                        <e-btn @click.stop="dialog3 = !dialog3">打开对话框3</e-btn>
                    </e-card-body>
                    <e-card-footer>this is footer</e-card-footer>
                </e-card>
            </e-dialog>
            <e-dialog v-model="dialog3" max-width="500px">
                <e-well>陋室铭</e-well>
            </e-dialog>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return {
                    dialog1:false,
                    dialog2:false,
                    dialog3:false,
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
    <template><!--ex1-->
        <e-container>
            <e-btn @click="dialog4=!dialog4">打开对话框</e-btn>
            <e-dialog v-model="dialog4" persistent>
                <e-card>
                    <e-card-body>{{loushiming}}</e-card-body>
                    <e-card-footer>
                        <e-btn @click="dialog4=false">确定</e-btn>
                        <e-btn @click="dialog4=false">取消</e-btn>
                    </e-card-footer>
                </e-card>
            </e-dialog>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    dialog4:false
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-container>
            <e-btn @click="dialog5=!dialog5">打开对话框</e-btn>
            <e-dialog v-model="dialog5" closed>
                <e-card>
                    <e-card-body>{{loushiming}}</e-card-body>
                </e-card>
            </e-dialog>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    dialog5:false,
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
    <template><!--ex3-->
        <e-container>
            <e-btn  @click.stop="dialog6 = true">打开对话框1</e-btn>
            <e-dialog v-model="dialog6" fullscreen>
                <e-card height="100%">
                    <e-toolbar>
                        <e-btn @click="dialog6=!dialog6" ><e-icon>ion-android-close</e-icon></e-btn>
                        <e-toolbar-title>设置示例</e-toolbar-title>
                        <e-spacer></e-spacer>
                        <e-btn>保存</e-btn>
                        <e-btn>取消</e-btn>
                    </e-toolbar>
                    <e-card-body >
                        <e-row>
                            <e-well>
                                {{loushiming}}
                            </e-well>
                        </e-row>
                    </e-card-body>
                    <e-card-footer>底部位置，可以放置其他按钮</e-card-footer>
                </e-card>
            </e-dialog>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    dialog6:false,
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
</docs>
