
<docs>
    <template><!--ex0-->
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
    </template>
    |
    <template><!--ex1-->
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
    </template>
    |
    <template><!--ex2-->
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
    </template>
    |
    <template><!--ex3-->
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
    </template>
    |
    <template><!--ex4-->
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
    </template>
    <script>
        export default {
            computed: {
                binding () {
                    const binding = {};

                    if (this.$ezs.breakpoint.mdAndUp) binding.column = true;

                    return binding
                }
            }
        }
    </script>
    |
    <template><!--ex5-->
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
    <template><!--ex6-->
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
