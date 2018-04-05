
<docs>
    <template><!--ex0-->
        <e-container>
            <e-row row wrap>
                <e-col xs3>
                    <e-checkbox v-model="x" value="left" label="Left"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="x" value="right" label="Right"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="y" value="top" label="Top"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="y" value="bottom" label="Bottom"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="y" value="center" label="center"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></e-checkbox>
                </e-col>
                <e-col xs12 sm4 offset-sm4>
                    <e-input v-model="text" type="text" label="Text"></e-input>
                </e-col>
                <e-col xs12 sm4>
                    <e-input v-model.number="timeout" type="number" label="Timeout"></e-input>
                </e-col>
            </e-row>
            <e-btn block @click.native="snackbar = true" dark>Show Snackbar</e-btn>
            <e-notify :timeout="timeout"
                      :center="y==='center'"
                      :top="y === 'top'"
                      :bottom="y === 'bottom'"
                      :right="x === 'right'"
                      :left="x === 'left'"
                      :multi-line="mode === 'multi-line'"
                      :vertical="mode === 'vertical'"
                      v-model="snackbar">
                {{ text }}
                <e-btn cs="bgwh-pink" @click.native="snackbar = false">Close</e-btn>
            </e-notify>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    y: 'top',
                    x: null,
                    mode: '',
                    timeout: 6000,
                    text: '山不在高，有仙则名。水不在深，有龙则灵。',
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-container grid-list-xl text-xs-c>
            <e-row wrap>
                <e-col xs12>
                    <e-btn @click="notifys('left top','bgw-info')" cs="circle info" style="transform:rotate(-45deg);"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                    <e-btn @click="notifys('top','bgw-warning')" cs="circle warning"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                    <e-btn @click="notifys('right top','bgw-danger')" cs="circle danger" style="transform:rotate(45deg);"><e-icon>ion-android-arrow-up</e-icon></e-btn>
                </e-col>
                <e-col xs12>
                    <e-btn @click="notifys('left center','bgw-royal')" cs="circle royal"><e-icon>ion-android-arrow-back</e-icon></e-btn>
                    <e-btn @click="notifys('center','bgw-primary')" cs="circle primary"><e-icon>ion-arrow-shrink</e-icon></e-btn>
                    <e-btn @click="notifys('right center','bgw-pink')" cs="circle pink"><e-icon>ion-android-arrow-forward</e-icon></e-btn>
                </e-col>
                <e-col xs12>
                    <e-btn @click="notifys('left bottom','outline-orange')" cs="circle orange" style="transform:rotate(45deg);"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                    <e-btn @click="notifys('bottom','outline-teal flat')" cs="circle teal"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                    <e-btn @click="notifys('right bottom','outline-brown')" cs="circle brown" style="transform:rotate(-45deg);"><e-icon>ion-android-arrow-down</e-icon></e-btn>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="mod1" value="multi-line" label="Multi-line"></e-checkbox>
                </e-col>
                <e-col xs3>
                    <e-checkbox v-model="mod1" value="vertical" label="Vertical"></e-checkbox>
                </e-col>
                <e-col xs12 sm4 offset-sm4>
                    <e-input v-model="text" type="text" label="Text"></e-input>
                </e-col>
                <e-col xs12 sm4>
                    <e-input v-model.number="timeout1" type="number" label="Timeout"></e-input>
                </e-col>
            </e-row>
            <e-notify closed :timeout="timeout1" :cs="cs" :positions="pos"
                      :multi-line="mod1 === 'multi-line'"
                      :vertical="mod1 === 'vertical'"
                      v-model="notify">
                {{ text1 }}
            </e-notify>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    notify:false,
                    mod1:'',
                    timeout1: 6000,
                    text1: '谈笑有鸿儒，往来无白丁。',
                    cs:'',
                    pos:'',
                }
            },
            methods:{
                notifys(pos,cs){
                    console.info(pos);
                    console.info(cs);
                    this.pos=pos;
                    this.cs=cs;
                    this.notify=true;
                }
            }
        }
    </script>
</docs>
