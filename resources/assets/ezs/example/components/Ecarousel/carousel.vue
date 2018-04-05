<template>
    <e-container>
        <e-carousel>
            <e-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></e-carousel-item>
        </e-carousel>
        <e-card height="200">
            <e-card-body>
                {{aa}}
            </e-card-body>
        </e-card>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                items: [
                    {
                        src: '/img/girl.jpg'
                    },
                    {
                        src: '/img/material.jpg'
                    },
                    {
                        src: '/img/mountains.jpg'
                    },
                    {
                        src: '/img/parallax1.jpg'
                    }
                ],
                aa:null
            }
        },
        mounted(){
          this.js();
        },
        methods:{
            js(){
                let a=111,b=600;
                let c=(a/b).toFixed(2)*100;
                console.info(c);
                this.aa=c+'%'
            }
        }
    }
</script>