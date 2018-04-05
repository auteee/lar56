
<docs>
    <template><!--ex0-->
        <e-container>
            <e-row>
                <e-col d-flex justify-center><e-btn cs="bg-primary" @click="mod1 = !mod1">打开/关闭</e-btn></e-col>
            </e-row>
            <transition name="myclass" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
                <h1 v-show="mod1">Animate.css</h1>
            </transition>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    mod1:true
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-container>
            <e-row>
                <e-col d-flex justify-center>
                    <e-btn cs="bg-primary" @click="mod2 = !mod2">打开/关闭</e-btn>
                </e-col>
            </e-row>
            <e-animate in="zoomIn" out="zoomOut">
                <e-well v-show="mod2">{{loushiming}}</e-well>
            </e-animate>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    mod2:true,
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
    <template><!--ex2-->
        <e-well>vue模仿animate.css官方实例</e-well>
        <e-row wrap text-xs-c justify-center align-center style="padding-top:20px;">
            <e-col xs12>
                <div id="animate" :class="animateValue"><h1 class="gradient">Animate.css</h1></div>
            </e-col>
            <e-col xs4>
                <e-select :options="animateList" v-model="animateSelectValue"></e-select>
            </e-col>
            <e-col xs4 >
                <e-btn @click="animateIt" cs="bg-primary">动一动它</e-btn>
            </e-col>
        </e-row>
    </template>
    <script>
        import animateArr  from "./animateArr.js";
        export default {
            data(){
                return{
                    animateList:animateArr,
                    animateSelectValue:'bounce',
                    animateValue:'',
                }
            },
            computed:{
                el(){
                    return document.getElementById('animate');
                },
                animations(){
                    let obj={
                        animation: 'animationend',
                        OAnimation: 'oAnimationEnd',
                        MozAnimation: 'mozAnimationEnd',
                        WebkitAnimation: 'webkitAnimationEnd',
                    };
                    for (let t in obj) {
                        if (this.el.style[t] !== undefined) {
                            return obj[t];
                        }
                    }
                }
            },
            watch:{
                animateSelectValue(val){
                    this.animateValue='animated '+val;
                }
            },
            mounted(){
                this.animateValue='animated '+this.animateSelectValue;
                this.el.addEventListener('animationend',()=>{
                    this.animateValue='';
                })
            },
            methods:{
                animateIt(){
                    this.animateValue='animated '+this.animateSelectValue;
                }
            }
        }
    </script>
    |
    <!--ex3-->
    <script>
        import { createSimpleTransition } from '../../../util/helpers'

        const myTransition = createSimpleTransition('my-transition');

        Vue.component('my-transition', myTransition)
    </script>
    <style>
        .fade-transition-leave-active{
            position: absolute
        }
        .fade-transition-leave-active,
        .fade-transition-leave,
        .fade-transition-leave-to
        {
            transition: $primary-transition
        }
        .fade-transition-enter,.fade-transition-leave-to{
            opacity: 0
        }
    </style>
</docs>
