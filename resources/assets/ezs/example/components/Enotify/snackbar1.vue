<template>
    <e-container>
        <e-row row wrap>
            <e-col xs3>
                <e-checkbox v-model="x" value="left" label="Left"></e-checkbox>
            </e-col>
            <e-col xs3>
                <e-checkbox v-model="x" value="right" label="Right"></e-checkbox>
            </e-col>
            <e-col xs3>
                <e-checkbox v-model="y" value="top" label="Top"></e-checkbox>
            </e-col>
            <e-col xs3>
                <e-checkbox v-model="y" value="bottom" label="Bottom"></e-checkbox>
            </e-col>
            <e-col xs3>
                <e-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></e-checkbox>
            </e-col>
            <e-col xs3>
                <e-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></e-checkbox>
            </e-col>
            <e-col xs12 sm4 offset-sm4>
                <e-input v-model="text" type="text" label="Text"></e-input>
            </e-col>
            <e-col xs12 sm4>
                <e-input v-model.number="timeout" type="number" label="Timeout"></e-input>
            </e-col>
        </e-row>
        <e-btn block @click.native="snackbar = true" dark>Show Snackbar</e-btn>
        <e-snackbar :timeout="timeout"
                    :top="y === 'top'"
                    :bottom="y === 'bottom'"
                    :right="x === 'right'"
                    :left="x === 'left'"
                    :multi-line="mode === 'multi-line'"
                    :vertical="mode === 'vertical'"
                    v-model="snackbar">
            {{ text }}
            <e-btn flat color="pink" @click.native="snackbar = false">Close</e-btn>
        </e-snackbar>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                snackbar: false,
                y: 'top',
                x: null,
                mode: '',
                timeout: 6000,
                text: 'Hello, I\'m a snackbar'
            }
        }
    }
</script>