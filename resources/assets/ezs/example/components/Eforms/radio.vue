<template>
    <e-container>
        这样用radios 会有什么不方便的地方? 样式布局问题 ,
        the ex : {{ex}}
        <e-radios v-model="ex" :radios="radios"></e-radios>
        <e-radios v-model="ex1" :radios="radios"></e-radios>
        //row
        <e-radios v-model="ex1" :radios="radios" row></e-radios>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                ex:'',
                ex1:'radio1',
                radios:[
                    {label:'radio1gggggggggggggggggggggggggggggg',value:'radio1'},
                    {label:'radio2ffffffffffffffffss',value:'radio2'},
                    {label:'radio3hhhhhhhhhhhhhhhhhhh',value:'radio3',color:'error'},
                    {label:'radio4ddddd',value:'radio4',disabled:true},
                    {label:'radio55555ddddd',value:'radio5',color:'primary'}
                ]
            }
        }
    }
</script>