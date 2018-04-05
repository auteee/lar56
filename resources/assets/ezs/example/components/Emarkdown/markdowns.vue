<template>
    <e-container>
        <e-markdown-edit v-model="helpCn" @htmlCode="htmlCode"></e-markdown-edit>
        <e-markdown-it v-model="ddd"></e-markdown-it>
    </e-container>
</template>
<script>
    import test from './test.vue'
    //console.info(typeof test.__docs);
    import help_cn from './help_cn.md'
    export default {
        data(){
            return{
                helpCn:help_cn,
                ddd:test.__docs
            }
        },
        mounted(){
            //console.info(test);
        },
        methods:{
            htmlCode(val,d){
                //console.info(val);
            }
        }
    }
</script>