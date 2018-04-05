<template>
    <e-container>
        <e-row wrap>
            //普通<br/>
            <e-slider v-model="value1" step="0"></e-slider>
            <br/>//disable<br/>
            <e-slider v-model="value1" disabled></e-slider>
            <br/>//ticks<br/>
            <e-slider v-model="value" handle-label step="10" ticks></e-slider>
            <br/>//ticks value=5<br/>
            <e-slider v-model="value2" handle-label step="10" ticks></e-slider>
            <br/>//ticks value=5<br/>
            <e-slider v-model="value3" handle-label></e-slider>
            <br/>//icon<br/>
            <e-slider v-model="value3" handle-label prependIcon="fa-bell"></e-slider>
            <e-slider v-model="value3" handle-label appendIcon="fa-clock-o"></e-slider>
            <br/>//ticks value=5<br/>
            <e-slider v-model="value3" handle-label></e-slider>
        </e-row>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                value:0,
                value1: 0,
                value2:5,
                value3:20,
            }
        }
    }
</script>