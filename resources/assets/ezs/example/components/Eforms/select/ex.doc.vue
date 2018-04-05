
<docs>
    <template><!--ex0-->
        <e-select :options="selects" label="select" v-model="mod1"></e-select>
    </template>
    <script>
        export default {
            data(){
                return{
                    selects: [
                        {title:'State 1', value: 'State 1' },
                        {title:'State 2', value: 'State 2' },
                        {title:'State 3', value: 'State 3' },
                        {title:'State 4', value: 'State 4' },
                        {title:'State 5', value: 'State 5' },
                        {title:'State 6', value: 'State 6' },
                        {title:'State 7', value: 'State 7' }
                    ],
                    mod1:null,
                }
            }
        }
    </script>
    |
    <template><!--ex1-->
        <e-row justify-space-around>
            <e-col xs3>
                <e-select :options="selects" label="普通单选" v-model="mod2"></e-select>
            </e-col>
            <e-col xs3>
                <e-select :options="selects" label="radio单选" radio v-model="mod3"></e-select>
            </e-col>
            <e-col xs3>
                <e-select :options="selects" label="多选" multiple v-model="mod4"></e-select>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    selects: [
                        {title:'State 1', value: 'State 1' },
                        {title:'State 2', value: 'State 2' },
                        {title:'State 3', value: 'State 3' },
                        {title:'State 4', value: 'State 4' },
                        {title:'State 5', value: 'State 5' },
                        {title:'State 6', value: 'State 6' },
                        {title:'State 7', value: 'State 7' }
                    ],
                    mod2:null,
                    mod3:'State 1',
                    mod4:[],
                }
            }
        }
    </script>
    |
    <template><!--ex2-->
        <e-row justify-space-around>
            <e-col xs3>
                <e-select :options="selects" label="普通单选" v-model="mod5" autocomplete></e-select>
            </e-col>
            <e-col xs3>
                <e-select :options="selects" label="多选" multiple v-model="mod6" autocomplete></e-select>
            </e-col>
        </e-row>
    </template>
    <script>
        export default {
            data(){
                return{
                    selects: [
                        {title:'State 1', value: 'State 1' },
                        {title:'State 2', value: 'State 2' },
                        {title:'State 3', value: 'State 3' },
                        {title:'State 4', value: 'State 4' },
                        {title:'State 5', value: 'State 5' },
                        {title:'State 6', value: 'State 6' },
                        {title:'State 7', value: 'State 7' }
                    ],
                    mod5:'State 1',
                    mod6:[],
                }
            }
        }
    </script>
    |
    <template><!--ex3-->

    </template>
    |
    <template><!--ex4-->

    </template>
    <script>

    </script>
</docs>
