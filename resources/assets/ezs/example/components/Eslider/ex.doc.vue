
<docs>
    <template><!--ex0-->
        <e-container>
            //正常
            <e-slider v-model="mod1" step="0"></e-slider>
            //不可用
            <e-slider v-model="mod1" step="0" disabled></e-slider>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    mod1:0,
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-container>
            <e-slider v-model="mod2" handle-label step="10" ticks></e-slider>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    mod2:0
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-container>
            <e-slider v-model="mod3" handle-label prependIcon="fa fa-bell"></e-slider>
            <e-slider v-model="mod3" handle-label appendIcon="fa fa-clock-o"></e-slider>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    mod3:0,
                }
            }
        }
    </script>
    |
    <template><!--ex3-->
        <e-container>
            <e-card>
                <e-card-media height="200px" :style="{ background: `rgb(${red}, ${green}, ${blue})` }"></e-card-media>
                <e-card-body>
                    <e-row wrap>
                        <e-col xs8 justify-center>
                            <e-slider v-model="red" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="red" type="number"></e-input>
                        </e-col>
                        <e-col xs8 justify-center>
                            <e-slider v-model="green" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="green" type="number"></e-input>
                        </e-col>
                        <e-col xs8 justify-center>
                            <e-slider v-model="blue" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="blue" type="number"></e-input>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    red:66,
                    green:100,
                    blue:22
                }
            }
        }
    </script>
    |
    <template><!--ex4-->
        <e-container>
            <e-card>
                <e-card-media height="200px" :style="{ background: `rgb(${red}, ${green}, ${blue})` }"></e-card-media>
                <e-card-body>
                    <e-row wrap>
                        <e-col xs8 justify-center>
                            <e-slider v-model="red" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="red" type="number"></e-input>
                        </e-col>
                        <e-col xs8 justify-center>
                            <e-slider v-model="green" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="green" type="number"></e-input>
                        </e-col>
                        <e-col xs8 justify-center>
                            <e-slider v-model="blue" :min="0" :max="255"></e-slider>
                        </e-col>
                        <e-col xs4>
                            <e-input v-model="blue" type="number"></e-input>
                        </e-col>
                    </e-row>
                </e-card-body>
            </e-card>
        </e-container>
    </template>
    <script>
        export default {
            data(){
                return {
                    red:66,
                    green:100,
                    blue:22
                }
            }
        }
    </script>
</docs>
