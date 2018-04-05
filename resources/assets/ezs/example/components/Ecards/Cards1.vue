<template xmlns="">
    <e-container grid-list-md>
        <e-row wrap>
            <e-col xs12>
                <e-card @click="test">
                    <e-card-header>这里是头部</e-card-header>
                    <e-card-media img="/img/img3.jpg" height="200"></e-card-media>
                    <e-card-body>
                        这里是内容
                        card [header,body,footer,media]
                    </e-card-body>
                    <e-card-footer>这里是尾部</e-card-footer>
                </e-card>
            </e-col>
            <e-col xs6>
                <e-card>
                    <e-card-header>this is header</e-card-header>
                    <e-card-body>this is body</e-card-body>
                    <e-card-footer>this is footer</e-card-footer>
                </e-card>
                <e-card>
                    <e-card-header>this is header</e-card-header>
                    <e-card-body>this is body</e-card-body>
                    <e-card-footer>this is footer</e-card-footer>
                </e-card>
            </e-col>
            <e-col xs6>
                <e-card>
                    <e-card-header>this is header</e-card-header>
                    <e-card-body>this is body</e-card-body>
                    <e-card-footer>this is footer</e-card-footer>
                </e-card>
                <e-card>
                    <e-card-header>this is header</e-card-header>
                    <e-card-body>this is body</e-card-body>
                    <e-card-footer>this is footer</e-card-footer>
                </e-card>
            </e-col>
            <e-col xs6>
                <e-card>
                    <e-card-media :img="img" height="200" @click="test">dddd</e-card-media>
                    <e-card-body cs="bg-primary">this is body</e-card-body>
                </e-card>
            </e-col>
            <e-col xs6>
                <e-collapse>
                    <e-collapse-content v-for="(item,i) in 5" :key="i">
                        <div slot="header">Item</div>
                        <e-card>
                            <e-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</e-card-body>
                        </e-card>
                    </e-collapse-content>
                </e-collapse>
            </e-col>
            <e-col xs6>
                <e-collapse >
                    <e-collapse-content v-for="(item,i) in 5" :key="i" :ripple="true">
                        <div slot="header">Item</div>
                        <e-card>
                            <e-card-body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</e-card-body>
                        </e-card>
                    </e-collapse-content>
                </e-collapse>
            </e-col>
        </e-row>

    </e-container>
</template>
<script>
    export default {
        data(){
            return {
                img:'./img/6.png',
                ripple:true
            }
        },
        methods:{
            test(){
                alert('你点击了我');
            }
        }
    }
</script>