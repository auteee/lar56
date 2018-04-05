<template>
    <e-container>
        状态过度有一些问题，未解决
        <h1>this is checkbox</h1>
        Checkboxes - Boolean
        <e-checkbox  :label="`无input`" value="ex1"></e-checkbox>
        <e-checkbox  v-bind:label="`测试1: ${ex1.toString()}`" v-model="ex1"></e-checkbox>
        <e-checkbox cs="primary" v-bind:label="`测试1: ${ex1.toString()}`" v-model="ex1"></e-checkbox>
        <e-checkbox cs="primary"  v-model="ex1">无label</e-checkbox>
        <e-checkbox cs="error" label="测试2" v-model="ex1"></e-checkbox>
        Array-
        <p>{{ ex2 }}</p>
        <e-checkbox label="john" v-model="ex2" value="john"></e-checkbox>
        <e-checkbox label="Jacob" v-model="ex2" value="Jacob"></e-checkbox>
        Checkboxes - States
        <e-checkbox value></e-checkbox>
        <e-checkbox value indeterminate></e-checkbox>
        <e-checkbox value disabled></e-checkbox>
        ////
        <e-checkbox label="状态显示" :value="all" :indeterminate="indeterminate"></e-checkbox>
        <e-checkbox label="all" :value="all"></e-checkbox>
        <e-checkbox label="none" :value="none"></e-checkbox>
        <e-checkbox label="notall" :value="notall"></e-checkbox>
        <e-checkbox label="all" value="all" :input-value="el3"></e-checkbox>
        <p>{{ el3 }}</p>
        <button @click="all=!all">ffff</button>
        //radio
        <!--<v-radio-group>-->
            <!--<v-radio label="radio" value="radio"></v-radio>-->
        <!--</v-radio-group>-->

    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                el3:[],
                ex1: true,
                ex2:['john'],
                state:this.all,
                all:true,
                notall:false,
                none:true,
                zo:'',
                indeterminate:''
            }
        }
    }
</script>