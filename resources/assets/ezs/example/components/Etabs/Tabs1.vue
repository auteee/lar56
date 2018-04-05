<template>

    <e-container>
        <!--<e-tabs >-->
            <!--<e-tabs-header centered>-->
                <!--<e-tabs-nav href="#home">homefffffff</e-tabs-nav>-->
                <!--<e-tabs-nav href="#tab2">tab2ffffffffff</e-tabs-nav>-->
                <!--<e-tabs-nav href="#tab3">tab3fffff</e-tabs-nav>-->
                <!--<e-tabs-nav href="#tab4">tab3fffff</e-tabs-nav>-->
                <!--<e-tabs-nav href="#tab5">tab3fffff</e-tabs-nav>-->
                <!--<e-tabs-nav href="#tab6">tab3fffff</e-tabs-nav>-->
                <!--<e-tabs-slider></e-tabs-slider>-->
            <!--</e-tabs-header>-->
        <!--</e-tabs>-->
        <e-btn @click.native="next">next tab</e-btn>
        <e-tabs>
            <e-tabs-header cs="bg-info">
                <e-tabs-nav href="#tabs1">homefffffff</e-tabs-nav>
                <e-tabs-nav href="#tabs2">tab2ffffffffff</e-tabs-nav>
                <e-tabs-nav href="#tabs3">tab3fffff</e-tabs-nav>
                <e-tabs-nav href="#tabs4">tab3fffff</e-tabs-nav>
                <e-tabs-nav href="#tabs5">tab3fffff</e-tabs-nav>
                <e-tabs-nav href="#tabs6">tab3fffff</e-tabs-nav>
                <e-tabs-slider></e-tabs-slider>
            </e-tabs-header>
            <e-tabs-body>
                <e-tabs-content id="tabs1">home{{text}}</e-tabs-content>
                <e-tabs-content id="tabs2">tab2{{text}}</e-tabs-content>
                <e-tabs-content id="tabs3">tab3{{text}}</e-tabs-content>
                <e-tabs-content id="tabs4">tab4{{text}}</e-tabs-content>
                <e-tabs-content id="tabs5">tab5{{text}}</e-tabs-content>
                <e-tabs-content id="tabs6">tab6{{text}}</e-tabs-content>
            </e-tabs-body>
        </e-tabs>
        <e-row>
            <e-col xs4>
                <e-tabs >
                    <e-tabs-header cs="bg-info">
                        <e-tabs-nav href="#home">homefffffff</e-tabs-nav>
                        <e-tabs-nav href="#tab2" >zzzz</e-tabs-nav>
                        <e-tabs-nav href="#tab3">tab3fffff</e-tabs-nav>
                        <e-tabs-nav href="#tab4">tab3fffff</e-tabs-nav>
                        <e-tabs-nav href="#tab5">tab3fffff</e-tabs-nav>
                        <e-tabs-nav href="#tab6">tab3fffff</e-tabs-nav>
                        <e-tabs-slider></e-tabs-slider>
                    </e-tabs-header>

                </e-tabs>
            </e-col>
            <e-col xs4>
                <span class="test">hhhh</span>
            </e-col>
        </e-row>
        <e-row>
            <e-tabs>
                <e-tabs-header>
                    <e-tabs-nav v-for="n in 3" :key="n">Item {{ n }}</e-tabs-nav>
                    <e-tabs-slider></e-tabs-slider>
                </e-tabs-header>
                <e-tabs-body>
                    <e-tabs-content v-for="n in 3" :key="n"> {{n}}{{text}}</e-tabs-content>
                </e-tabs-body>
            </e-tabs>
        </e-row>
    </e-container>
</template>
<script>
    export default {
        data () {
            return {
                ac:'home',
                active:null,
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            }
        },
        methods: {
            next () {
                const active = parseInt(this.active);
                this.active = active < 2 ? active + 1 : 0
            }
        }
    }
</script>