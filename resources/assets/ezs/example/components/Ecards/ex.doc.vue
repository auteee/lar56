
<docs>
    <template><!--ex0-->
        <e-container>
            <e-card>
                <e-card-header>{{article.title}}</e-card-header>
                <e-card-media img="/img/img3.jpg" height="200"></e-card-media>
                <e-card-body>
                    <h2>{{article.title}}</h2>
                    <div>{{article.content}}</div>
                </e-card-body>
                <e-card-footer>{{article.author}}--{{article.times}}</e-card-footer>
            </e-card>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
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
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-container grid-list-xl text-xs-c>
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
    </template>
    <script>
        export default {
            data(){
                return {
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
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-container fluid>
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
    </template>
    |
    <template><!--ex3-->
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
    </template>
    |
    <template><!--ex4-->
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
    </template>
    <script>
        export default {
            data(){
                return {
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
            }
        }
    </script>
</docs>
