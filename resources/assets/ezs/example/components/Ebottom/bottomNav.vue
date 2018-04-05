<template>
    <e-container>
        <e-card height="200px">
            <div class="headline text-xs-center pa-5">Active: {{ e2 }}</div>
            <e-bottom-nav absolute :value="true" :active.sync="e2" >
                <e-btn cs="flat bg-info" value="recent">
                    <span>recent</span>
                    <e-icon>fa-bath</e-icon>
                </e-btn>
                <e-btn cs="flat" value="favorites">
                    <span>favorites</span>
                    <e-icon>fa-bath</e-icon>
                </e-btn>
                <e-btn cs="flat" value="nearby">
                    <span>nearby</span>
                    <e-icon>fa-bath</e-icon>
                </e-btn>
            </e-bottom-nav>
        </e-card>
    </e-container>
</template>
<script>
    export default {
        data () {
            return {
                e1: 'recent',
                e2:'recent'
            }
        }
    }
</script>