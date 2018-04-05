
<docs>
    <template><!--ex0-->
        <e-row wrap>
            <e-col xs12 sm6 md6>
                <e-slider v-model="slider" :min="16" :max="200" label="图片大小"></e-slider>
                <e-switch label="形状" v-model="tile"></e-switch>
            </e-col>
            <e-col xs12 sm6 md6 d-flex justify-center align-center>
                <e-avatar :tile="tile" :size="`${slider}px`">
                    <img src="/img/ezs.jpg" />
                </e-avatar>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    slider:56,
                    tile:false
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-row wrap justify-space-around align-center>
            <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
            <e-avatar><img src="/img/john.jpg" alt="John"></e-avatar>
            <e-badge>
                <span slot="badge">3</span>
                <e-avatar cs="bg-error"><e-icon>fa fa-home</e-icon></e-avatar>
            </e-badge>
            <e-avatar cs="bg-primary">
                <span class="error">C</span>
            </e-avatar>
        </e-row>
    </template>
    |
    <template><!--ex2-->
        <e-container fluid>

        </e-container>
    </template>
</docs>
