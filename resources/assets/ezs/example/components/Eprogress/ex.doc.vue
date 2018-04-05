
<docs>
    <template><!--ex0-->
        <e-row wrap>
            <e-col d-flex xs12 justify-space-around style="padding: 20px 0;">
                <e-progress-circular :value="20"></e-progress-circular>
                <e-progress-circular :value="40"></e-progress-circular>
                <e-progress-circular :value="60"></e-progress-circular>
                <e-progress-circular :value="80"></e-progress-circular>
                <e-progress-circular :value="100"></e-progress-circular>
                <e-progress-circular indeterminate></e-progress-circular>
            </e-col>
            <e-col xs12>
                <e-progress-linear :percentage="50" stripe></e-progress-linear>
                <e-progress-linear :percentage="80" stripe></e-progress-linear>
                <e-progress-linear indeterminate></e-progress-linear>
            </e-col>
        </e-row>
    </template>
    |
    <template><!--ex1-->
        <e-row wrap>
            <e-col d-flex xs12 justify-space-around>
                <e-progress-circular :value="20" cs="warning"></e-progress-circular>
                <e-progress-circular :value="40" cs="primary"></e-progress-circular>
                <e-progress-circular :value="60" cs="info"></e-progress-circular>
                <e-progress-circular :value="80" cs="error"></e-progress-circular>
                <e-progress-circular :value="100" cs="pink"></e-progress-circular>
            </e-col>
            <e-col d-flex xs12 justify-space-between>
                <e-progress-circular indeterminate cs="warning"></e-progress-circular>
                <e-progress-circular indeterminate cs="primary"></e-progress-circular>
                <e-progress-circular indeterminate cs="info"></e-progress-circular>
                <e-progress-circular indeterminate cs="error"></e-progress-circular>
                <e-progress-circular indeterminate cs="pink"></e-progress-circular>
            </e-col>
            <e-col d-flex xs12 justify-space-around>
                <e-progress-circular v-model="jdt_num" :size="100" :width="15" :rotate="360" cs="warning">{{ jdt_num }}</e-progress-circular>
                <e-progress-circular :size="50" :width="10" :rotate="360" indeterminate cs="primary"></e-progress-circular>
                <e-progress-circular :size="30" :width="5" :rotate="360" indeterminate cs="info"></e-progress-circular>
                <e-progress-circular :size="30" :width="3" :rotate="360" indeterminate cs="error"></e-progress-circular>
                <e-progress-circular :size="30" :rotate="360" indeterminate cs="pink"></e-progress-circular>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return {
                    interval: null,
                    jdt_num: 0
                }
            },
            beforeDestroy () {
                clearInterval(this.interval)
            },
            mounted(){
                this.interval = setInterval(() => {
                    if (this.jdt_num === 100) {
                        return (this.jdt_num = 0)
                    }
                    this.jdt_num += 10
                }, 1000)
            },
        }
    </script>
    |
    <template><!--ex2-->
        <e-container>
            <e-progress-linear :percentage="30" ></e-progress-linear>
        </e-container>
    </template>
    |
    <template><!--ex3-->
        <e-container>
            <e-progress-linear indeterminate></e-progress-linear>
        </e-container>
    </template>
    |
    <template><!--ex4-->
        <e-container>
            <e-progress-linear :percentage="30" :buffer="40"></e-progress-linear>
        </e-container>
    </template>
    |
    <template><!--ex5-->
        <e-container>
            <e-progress-linear :percentage="30" color="error"></e-progress-linear>
            <e-progress-linear :percentage="40" color="info"></e-progress-linear>
            <e-progress-linear :percentage="50" color="error" stripe></e-progress-linear>
            <e-progress-linear :percentage="80" color="info" stripe></e-progress-linear>
            <e-progress-linear :percentage="30" stripe animate style="height: 45px"></e-progress-linear>
        </e-container>
    </template>
</docs>
