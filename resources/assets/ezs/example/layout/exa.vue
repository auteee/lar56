<template>
    <e-card>
        <e-card-header>
            <div class="title" v-if="title">{{title}}</div>
            <e-spacer></e-spacer>
            <e-btn cs="link-primary circle small" @click="ex=!ex"><e-icon>ion-code</e-icon></e-btn>
        </e-card-header>
        <e-tabs v-if="ex" v-model="tabs">
            <e-tabs-header>
                <e-tabs-nav v-for="(v,key,i) in exArrObj" :key="i">
                    {{key==='html'?'TEMPLATE':(key==='js'?'SCRIPT':'STYLE')}}
                </e-tabs-nav>
                <e-tabs-slider cs="bg-error"></e-tabs-slider>
            </e-tabs-header>
            <e-tabs-body>
                <e-tabs-body>
                    <e-tabs-content v-for="(v,key,i) in exArrObj" :key="i">
                        <e-markdown-it v-model="exArrObj[key]" :language="key"></e-markdown-it>
                    </e-tabs-content>
                </e-tabs-body>
            </e-tabs-body>
        </e-tabs>
        <e-card-body>
            <!--ex内容-->
            <slot></slot>
            <!--ex内容-->
        </e-card-body>
    </e-card>
</template>
<script>
    export default {
        name:'exa-component',
        data(){
            return {
                ex:false,
                tabs:0
            }
        },
        props:{
            exArrObj:{required: false},
            title:String
        }
    }
</script>