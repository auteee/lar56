
<docs>
    <template><!--ex0-->
        <e-container>
            <e-checkbox  v-bind:label="`测试1: ${mod1.toString()}`" v-model="mod1"></e-checkbox>
            <e-radios v-model="mod2" :radios="radios"></e-radios>
            <e-radio-group v-model="radioGroup">
                <e-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></e-radio>
            </e-radio-group>
            <e-switch v-model="mod3" label="switch" cs="primary"></e-switch>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    radios:[
                        {label:'radios1',value:1} ,
                        {label:'radios2',value:2},
                        {label:'radios3',value:3}
                    ],
                    radioGroup:1,
                    mod1:true,
                    mod2:'',
                    mod3:true,
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-row wrap>
            <e-col xs2>布尔值</e-col>
            <e-col xs2>
                <e-checkbox :label="`Check 1: ${checkbox1.toString()}`" v-model="checkbox1"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox :label="`Check 2: ${checkbox2.toString()}`" v-model="checkbox2"></e-checkbox>
            </e-col>
            <e-col xs6></e-col>
            <e-col xs2>数组</e-col>
            <e-col xs2>
                <e-checkbox label="John" v-model="checkbox3" value="John"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox label="Jacob" v-model="checkbox3" value="Jacob"></e-checkbox>
            </e-col>
            <e-col xs2>
                {{ checkbox3 }}
            </e-col>
            <e-col xs4></e-col>
            <e-col xs2>状态</e-col>
            <e-col xs2>
                <e-checkbox label="on" input-value="true" value></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox label="off" value></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox label="indeterminate" indeterminate value></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox label="on disabled" input-value="true" value disabled></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox label="off disabled" value disabled></e-checkbox>
            </e-col>
            <e-col xs12>色彩:复选框可以设置颜色通过使用<code>cs</code>属性，颜色可以是任何内置的颜色或者其上下文名称。</e-col>
            <e-col xs2>色彩</e-col>
            <e-col xs2>
                <e-checkbox cs="primary" label="primary" v-model="checkbox4"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox cs="info" label="info" v-model="checkbox5"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox cs="error" label="error" v-model="checkbox6"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox cs="success" label="success" v-model="checkbox7"></e-checkbox>
            </e-col>
            <e-col xs2>
                <e-checkbox cs="warning" label="warning" v-model="checkbox8"></e-checkbox>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    checkbox1:true,
                    checkbox2:false,
                    checkbox3:[],
                    checkbox4:true,
                    checkbox5:true,
                    checkbox6:true,
                    checkbox7:true,
                    checkbox8:true,
                    checkbox9:true,
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-row wrap>
            <e-col xs6><code>e-radio-group</code> 和<code>e-radio</code>结合</e-col>
            <e-col xs4>
                <e-radio-group v-model="radio1" :mandatory="false">
                    <e-radio label="Radio 1" value="radio-1"></e-radio>
                    <e-radio label="Radio 2" value="radio-2"></e-radio>
                </e-radio-group>
            </e-col>
            <e-col xs2>{{radio1}}</e-col>
            <e-col xs6><code>e-radios</code></e-col>
            <e-col xs4>
                <e-radios :radios="radios1" v-model="radio2"></e-radios>
            </e-col>
            <e-col xs2>{{radio2}}</e-col>
            <e-divider></e-divider>
            <e-col xs12>
                <e-well>单选框组可以作为一行或者一列的形式，通过使用 column 或者 row 属性设置，默认是使用列的方式。</e-well>
            </e-col>
            <e-col xs12>
                <e-radios :radios="radios2" v-model="radio3"></e-radios>
                <e-divider></e-divider>
                <e-radios :radios="radios2" v-model="radio3" row></e-radios>
            </e-col>
            <e-col xs12>
                <e-well>单选框也是可以通过<code>color</code>(e-radios)属性使用内置的颜色来设置色彩</e-well>
            </e-col>
            <e-col xs12>
                <e-radios :radios="radios3" v-model="radio4"></e-radios>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    radio1:'radio-1',
                    radio2:1,
                    radio3:1,
                    radio4:null,
                    radios1:[
                        {label:'radios1',value:1} ,
                        {label:'radios2',value:2}
                    ],
                    radios2:[
                        {label:'radios1',value:1} ,
                        {label:'radios2',value:2},
                        {label:'radios3',value:3}
                    ],
                    radios3:[
                        {label:'primary',value:1,color:'primary'} ,
                        {label:'error',value:2,color:'error'},
                        {label:'disabled',value:3,color:'info',disabled:true}
                    ],
                }
            }
        }
    </script>
    |
    <template><!--ex3-->
        <e-row wrap>
            <e-col xs12>
                <e-well>布尔值</e-well>
                <e-switch :label="`Switch 1: ${switch1.toString()}`" v-model="switch1"></e-switch>
                <e-switch :label="`Switch 2: ${switch2.toString()}`" v-model="switch2"></e-switch>
            </e-col>
            <e-col xs12>
                <e-well>数组:{{people}}</e-well>
                <e-switch label="John" v-model="people" value="John"></e-switch>
                <e-switch label="Jacob" v-model="people" value="Jacob"></e-switch>
            </e-col>
            <e-col xs12>
                <e-well>状态</e-well>
                <e-switch label="on" value input-value="true"></e-switch>
                <e-switch label="off"></e-switch>
                <e-switch label="on disabled" value input-value="true" disabled></e-switch>
                <e-switch label="off disabled" disabled></e-switch>
            </e-col>
            <e-col xs12>
                <e-well>颜色开关也可以通过<code>color</code>属性使用内置的颜色来设置色彩。</e-well>
                <e-switch label="默认" v-model="switch3" value="primary"></e-switch>
                <e-switch label="info" v-model="switch3" value="info" color="info"></e-switch>
                <e-switch label="error" v-model="switch3" value="error" color="error"></e-switch>
                <e-switch label="success" v-model="switch3" value="success" color="success"></e-switch>
                <e-switch label="secondary" v-model="switch3" value="secondary" color="secondary"></e-switch>
                <e-switch label="warning" v-model="switch3" value="warning" color="warning"></e-switch>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    switch1:true,
                    switch2:false,
                    people: ['John'],
                    switch3: ['primary', 'secondary', 'success', 'info', 'warning', 'error']
                }
            }
        }
    </script>
    |
    <template><!--ex4-->

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
