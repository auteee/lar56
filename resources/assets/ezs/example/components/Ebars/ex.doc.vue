
<docs>
    <template><!--ex0-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    menulist:[{'value':'我是菜单一'},{'value':'我是菜单二'},{'value':'我是菜单三'}]
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    menulist:[{'value':'我是菜单一'},{'value':'我是菜单二'},{'value':'我是菜单三'}]
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
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
    </template>
    <script>
        export default {
            data(){
                return{
                    menulist:[{'value':'我是菜单一'},{'value':'我是菜单二'},{'value':'我是菜单三'}]
                }
            }
        }
    </script>
    |
    <template><!--ex3-->
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
    </template>
    |
    <template><!--ex4-->
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
    </template>
    <script>
        export default {
            data(){
                return {
                    menulist:[{'value':'我是菜单一'},{'value':'我是菜单二'},{'value':'我是菜单三'}]
                }
            }
        }
    </script>
    |
    <template><!--ex5-->
        <e-card img="/img/map.jpg" height="300px" cs="flat pa-3">
            <e-toolbar dense cs="floating bgb-white">
                <e-input prepend-icon="ion-ios-search-strong" hide-details></e-input>
                <e-btn cs="secondary circle small"><e-icon>ion-android-locate</e-icon></e-btn>
                <e-btn cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
            </e-toolbar>
        </e-card>
    </template>
    |
    <template><!--ex6-->
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
    <template><!--ex7-->
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
    </template>
    |
    <template><!--ex8-->
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
    </template>
</docs>
