
<docs>
    <template><!--ex0-->
        <e-card>
            <e-toolbar extended>
                <e-toolbar-title cs="grey">标题</e-toolbar-title>
                <e-spacer></e-spacer>
                <e-btn cs="secondary circle small"><e-icon>ion-ios-search-strong</e-icon></e-btn>
                <e-btn cs="secondary circle small"><e-icon>ion-android-apps</e-icon></e-btn>
                <e-btn cs="secondary circle small"><e-icon>ion-android-more-vertical</e-icon></e-btn>
                <e-btn cs="bgw-pink floating over-l-b"><e-icon>ion-android-add</e-icon></e-btn>
                <e-btn cs="bgw-primary floating over-r-b"><e-icon>ion-android-add</e-icon></e-btn>
            </e-toolbar>
            <e-card-body style="height: 200px">
                <e-btn cs="bgw-pink floating space-l-b"><e-icon>ion-android-add</e-icon></e-btn>
                <e-btn cs="bgw-pink floating space-r-b"><e-icon>ion-android-add</e-icon></e-btn>
            </e-card-body>
        </e-card>
    </template>
    |
    <template><!--ex1-->
        <e-card>
            <e-card-body >
                <e-row wrap>
                    <e-col xs12 sm6 md4>
                        <h3>选项</h3>
                        <e-switch v-model="ishover" label="Open on hover"></e-switch>
                    </e-col>
                    <e-col xs12 sm6 md4>
                        //选项
                        <e-radios :radios="radios1" v-model="posxy"></e-radios>
                    </e-col>
                    <e-col xs12 sm6 md4>
                        //选项
                        <e-radios :radios="radios" v-model="direction"></e-radios>
                    </e-col>
                    <e-col xs12 sm6 md4>
                        //选项
                        <e-radios :radios="radios2" v-model="dx"></e-radios>
                    </e-col>
                </e-row>
                <e-btn-dial :transition="dx" :openOnHover="ishover" :posxy="posxy" v-model="dial" :direction="direction">
                    <e-btn cs="bgw-primary circle dx" slot="anchor" v-model="dial">
                        <e-icon>ion-android-arrow-down</e-icon>
                        <e-icon>ion-android-arrow-back</e-icon>
                    </e-btn>
                    <e-btn cs="bgw-green circle small"><e-icon>ion-android-add</e-icon></e-btn>
                    <e-btn cs="bgw-indigo circle small"><e-icon>ion-android-add</e-icon></e-btn>
                    <e-btn cs="bgw-red circle small"><e-icon>ion-android-add</e-icon></e-btn>
                </e-btn-dial>
            </e-card-body>
        </e-card>
    </template>
    <script>
        export default {
            data(){
                return {
                    ishover:false,
                    posxy:'space-r-b',
                    direction:'left',
                    dial:false,
                    dx:'scale-transition',
                    radios1:[
                        {label:'左上',value:'space-l-t'},
                        {label:'左下',value:'space-l-b'},
                        {label:'右上',value:'space-r-t'},
                        {label:'右下',value:'space-r-b'}],
                    radios:[
                        {label:'left',value:'left'},
                        {label:'right',value:'right'},
                        {label:'top',value:'top'},
                        {label:'bottom',value:'bottom'}],
                    radios2:[
                        {label:'slide-y-transition',value:'slide-y-transition'},
                        {label:'slide-y-reverse-transition',value:'slide-y-reverse-transition'},
                        {label:'slide-x-transition',value:'slide-x-transition'},
                        {label:'slide-x-reverse-transition',value:'slide-x-reverse-transition'},
                        {label:'scale-transition',value:'scale-transition'}

                    ]
                }
            },
        }
    </script>
</docs>
