
<docs>
    <template><!--ex0-->
        <e-container>
            <e-btn id="anchorid">id测试</e-btn>
            <e-tooltip anchorid="anchorid">设置了anchorid则tip位置任意放</e-tooltip>
            <e-btn>tooltio测试<e-tooltip>未设置anchorid,则tip以父节点为锚点</e-tooltip></e-btn>
            <e-btn>tooltio测试<e-tooltip >默认tip</e-tooltip></e-btn>
            <e-btn>tooltio测试<e-tooltip :anchor="['bottom','middle']">anchor="['bottom','middle']"</e-tooltip></e-btn>
            <e-btn>tooltio测试<e-tooltip :anchor="['bottom','left']" :tipself="['top','middle']">anchor="['bottom','left']"</e-tooltip></e-btn>
        </e-container>
    </template>
    |
    <template><!--ex1-->
        <e-row>
            <e-col d-flex xs6 offset-xs3 align-center>
                <e-btn @click="mod1=!mod1">点我显示图标提示</e-btn>
                <e-icon icon="fa fa-home"><e-tooltip v-model="mod1">这是home图标</e-tooltip></e-icon>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    mod1:false,
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-row wrap>
            <e-col xs12 d-flex align-center>
                <e-btn>鼠标滑过
                    <e-tooltip :anchor="anchor" :itself="itself" :delay="delay">
                        显示位置和时间测试
                    </e-tooltip>
                </e-btn>
            </e-col>
            <e-col xs8 d-flex align-center>
                anchor={{anchor}} , itself={{itself}}
            </e-col>
            <e-col xs4><e-input type="number" label="延时显示/毫秒" v-model.number="delay"></e-input></e-col>
            <e-col xs3>
                anchor:垂直方向
                <e-radio-group v-model="vertical1">
                    <e-radio label='top' value="top"></e-radio>
                    <e-radio label='center' value="center"></e-radio>
                    <e-radio label='bottom' value="bottom"></e-radio>
                </e-radio-group>
            </e-col>
            <e-col xs3>
                anchor:水平方向
                <e-radio-group v-model="horizontal1">
                    <e-radio label='left' value="left"></e-radio>
                    <e-radio label='middle' value="middle"></e-radio>
                    <e-radio label='right' value="right"></e-radio>
                </e-radio-group>
            </e-col>
            <e-col xs3>
                itself:垂直方向
                <e-radio-group v-model="vertical2">
                    <e-radio label='top' value="top"></e-radio>
                    <e-radio label='center' value="center"></e-radio>
                    <e-radio label='bottom' value="bottom"></e-radio>
                </e-radio-group>
            </e-col>
            <e-col xs3>
                itself:水平方向
                <e-radio-group v-model="horizontal2">
                    <e-radio label='left' value="left"></e-radio>
                    <e-radio label='middle' value="middle"></e-radio>
                    <e-radio label='right' value="right"></e-radio>
                </e-radio-group>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    vertical1:'top',
                    horizontal1:'middle',
                    vertical2:'bottom',
                    horizontal2:'middle',
                    delay:10
                }
            },
            computed:{
                anchor(){
                    return [this.vertical1,this.horizontal1]
                },
                itself(){
                    return [this.vertical2,this.horizontal2]
                }
            },
        }
    </script>
</docs>
