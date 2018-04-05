
<docs>
    <template><!--ex0-->
        <e-row wrap>
            <e-col xs12 d-flex justify-space-around align-center>
                <e-chip>例子</e-chip>
                <e-chip closed>
                    <e-avatar>
                        <img src="/img/ezs.jpg">
                    </e-avatar>
                    例子avatar
                </e-chip>
                <e-chip closed>例子closed</e-chip>
                <e-chip>
                    <e-avatar cs="bg-info">E</e-avatar>
                    例子+avatar
                </e-chip>
                <e-chip closed>
                    例子+icon
                    <e-icon cs="right">fa fa-home</e-icon>
                </e-chip>
            </e-col>
        </e-row>
    </template>
    |
    <template><!--ex1-->
        <e-row wrap justify-space-around align-center>
            <e-col xs12 d-flex justify-space-around align-center>
                <e-chip cs="bg-error">红色</e-chip>
                <e-chip cs="bg-primary">蓝色</e-chip>
                <e-chip cs="bg-royal"><e-avatar><img src="/img/img1.jpg"/></e-avatar>头像</e-chip>
                <e-chip cs="bg-success">icon围标<e-icon cs="right">fa fa-home</e-icon></e-chip>
                <e-chip cs="outline-warning">轮廓</e-chip>
                <e-chip cs="outline-danger">轮廓</e-chip>
                <e-chip cs="bg-primary label" >标签</e-chip>
            </e-col>
            <e-col xs12 d-flex justify-center align-center>
                <e-chip cs="label" closed v-model="mod1">标签/关闭</e-chip>
                <e-btn v-if="!mod1" @click="mod1=!mod1">打开chip</e-btn>
            </e-col>
        </e-row>
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
    <template><!--ex2-->

    </template>
</docs>
