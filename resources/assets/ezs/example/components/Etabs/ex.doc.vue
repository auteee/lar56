
<docs>
    <template><!--ex0-->
        <e-card>
            <e-tabs v-model="mod1">
                <e-tabs-header>
                    <e-tabs-nav v-for="n in 3" :key="n">选项{{ n }}</e-tabs-nav>
                    <e-tabs-slider cs="bg-error"></e-tabs-slider>
                </e-tabs-header>
                <e-tabs-body>
                    <e-tabs-content v-for="n in 3" :key="n">
                        <e-row justify-center>
                            {{article.title}} + 选项卡{{ n }}
                        </e-row>
                        <e-container>
                            {{article.content}}
                        </e-container>
                    </e-tabs-content>
                </e-tabs-body>
            </e-tabs>
            <e-card-footer>
                <e-row justify-center>
                    <e-btn @click="next">下一个</e-btn>
                </e-row>
            </e-card-footer>
        </e-card>
    </template>
    <script>
        export default {
            data(){
                return {
                    mod1:0,
                    article:{
                        title:'陋室铭',
                        author:'刘禹锡',
                        times:'唐代',
                        content:'山不在高，有仙则名。水不在深，有龙则灵。' +
                        '斯是陋室，惟吾德馨。苔痕上阶绿，草色入帘青。' +
                        '谈笑有鸿儒，往来无白丁。' +
                        '可以调素琴，阅金经。' +
                        '无丝竹之乱耳，无案牍之劳形。' +
                        '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？'
                    }
                }
            },
            methods:{
                next(){
                    let active = this.mod1;
                    this.mod1 = active < 2 ? active + 1 : 0
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-tabs >
            <e-tabs-header centered>
                <e-tabs-nav v-for="n in 3" :key="n">选项卡 {{ n }}</e-tabs-nav>
                <e-tabs-slider cs="bg-error"></e-tabs-slider>
            </e-tabs-header>
        </e-tabs>
    </template>
    |
    <template><!--ex2-->

    </template>
</docs>
