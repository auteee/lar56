
<docs>
    <template><!--ex0-->
        <e-container grid-list-md text-xs-c>
            <e-alert type="success" :value="true">这是alert的测试</e-alert>
            <e-alert type="info" :value="true">这是alert的测试</e-alert>
            <e-alert type="warning" :value="true">这是alert的测试</e-alert>
            <e-alert type="error" :value="true">这是alert的测试</e-alert>
        </e-container>
    </template>
    |
    <template><!--ex1-->
        <e-container grid-list-xl text-xs-c>
            <p> 使用<span class="e-code">v-model</span>可以控制提示框的状态。如果您不想分配一个v-model，只显示警报，也可以简单地分配属性值。</p>
            <e-alert type="success" v-model="mod1" closed>这是alert的测试</e-alert>
            <e-btn cs="bg-primary" v-if="!mod1" @click="mod1 = true">打开提示框</e-btn>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    mod1:true,
            }}
        }
    </script>
    |
    <template><!--ex2-->
        <e-container fluid>
            <e-alert value="true" icon="fa fa-home" cs="bg-primary">这是alert的测试</e-alert>
            <e-alert value="true" cs="bg-error">这是alert的测试</e-alert>
        </e-container>
    </template>
    |
    <template><!--ex3-->
        <e-container fluid grid-list-xl>
            <e-row>
                <e-col d-flex justify-center><e-btn cs="bg-primary" @click="mod2 = !mod2">打开/关闭</e-btn></e-col>
            </e-row>
            <e-alert v-model="mod2" cs="bg-error" :animate="['zoomIn','zoomOut']">这是alert的测试</e-alert>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return{
                    mod2:true,
                }}
        }
    </script>
    |
    <template><!--ex4-->
        <e-container>
            <p>可由属性 cs/class 制定轮廓cs="outline-primary"</p>
            <e-alert value="true" cs="outline-primary">这是alert的测试</e-alert>
            <e-alert value="true" cs="outline-error">这是alert的测试</e-alert>
            <e-alert value="true" cs="outline-info">这是alert的测试</e-alert>
            <e-alert value="true" cs="outline-royal">这是alert的测试</e-alert>
        </e-container>
    </template>
    |
    <template><!--ex5-->
        <e-container>
            <e-well>
                {{loushiming}}
            </e-well>
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
</docs>
