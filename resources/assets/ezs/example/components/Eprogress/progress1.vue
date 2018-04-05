<template>
    <e-container>
        <e-row>
            <e-progress-circular :value="20"></e-progress-circular>
            <e-progress-circular :value="40" cs="primary"></e-progress-circular>
            <e-progress-circular :value="60" cs="info"></e-progress-circular>
            <e-progress-circular :value="80" cs="error"></e-progress-circular>
            <e-progress-circular :value="100"></e-progress-circular>
            <e-progress-circular indeterminate cs="error"></e-progress-circular>
            <e-progress-circular indeterminate></e-progress-circular>
        </e-row>
        <e-row>
            <e-progress-circular
                    v-bind:size="100"
                    v-bind:width="15"
                    v-bind:rotate="360"
                    v-bind:value="value"
                    cs="info"
            >
                {{ value }}
            </e-progress-circular>
            <e-progress-circular
                    v-bind:size="100"
                    v-bind:width="15"
                    v-bind:rotate="100"
                    v-bind:value="value"
                    cs="error"
            >
                {{ value }}
            </e-progress-circular>
        </e-row>
        <e-row row wrap>
            <e-progress-linear :percentage="30" :buffer="40"></e-progress-linear>
            <e-progress-linear :percentage="30" cs="error"></e-progress-linear>
            <e-progress-linear :percentage="40" cs="info"></e-progress-linear>
            <e-progress-linear :percentage="50" cs="error" stripe></e-progress-linear>
            <e-progress-linear :percentage="80" cs="info" stripe></e-progress-linear>
            <e-progress-linear indeterminate></e-progress-linear>
            <e-progress-linear :percentage="30" stripe animate style="height: 45px"></e-progress-linear>
        </e-row>
    </e-container>
</template>
<script>
    export default {
        data () {
            return {
                interval: {},
                value: 0
            }
        },
        beforeDestroy () {
            clearInterval(this.interval)
        },
        mounted () {
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0)
                }
                this.value += 10
            }, 1000)
        }
    }
</script>