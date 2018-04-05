<template>
    <e-container>
        <e-row>
            <e-parallax src="/img/material.jpg"></e-parallax>
        </e-row>
        <e-row wrap>
            <e-card>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>

                <e-card-body>
                    <e-parallax src="/img/parallax1.jpg">
                        <h1>Parallax</h1>
                    </e-parallax>
                </e-card-body>

                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>{{ text }}</e-card-body>
                <e-card-body>
                    <e-parallax src="/img/mountains.jpg" height="200">
                        <h1>Parallax</h1>
                    </e-parallax>
                </e-card-body>
                <e-card-body v-for="i in 5" :key="i">{{ text }}</e-card-body>
            </e-card>
        </e-row>
    </e-container>
</template>
<script>
    export default {
        data(){
            return {
                text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
        }
    }
</script>