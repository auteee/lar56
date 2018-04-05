<template>
    <e-container>
        <e-stepper v-model="e1">
            <e-step-header>
                <e-step-nav step="1" :complete="e1 > 1">第一步</e-step-nav>
                <e-divider :cs="e1>1?'bg-primary':''"></e-divider>
                <e-step-nav step="2" :complete="e1 > 2">第二步</e-step-nav>
                <e-divider></e-divider>
                <e-step-nav step="3">完成</e-step-nav>
            </e-step-header>
            <e-step-body>
                <e-step-content step="1">
                    <e-card cs="bg-primary"  height="200px">
                        <e-card-body></e-card-body>
                        <e-card-footer>
                            <e-btn @click.native="e1 = 2">Continue</e-btn>
                            <e-btn cs="flat">Cancel</e-btn>
                        </e-card-footer>
                    </e-card>
                </e-step-content>
                <e-step-content step="2">
                    <e-card cs="bg-info" height="200px">
                        <e-card-body></e-card-body>
                        <e-card-footer>
                            <e-btn  @click.native="e1 = 3">Continue</e-btn>
                            <e-btn flat>Cancel</e-btn>
                        </e-card-footer>
                    </e-card>
                </e-step-content>
                <e-step-content step="3">
                    <e-card cs="bg-error" height="200px">
                        <e-card-body></e-card-body>
                        <e-card-footer>
                            <e-btn  @click.native="e1 = 1">Continue</e-btn>
                            <e-btn flat>Cancel</e-btn>
                        </e-card-footer>
                    </e-card>
                </e-step-content>
            </e-step-body>
        </e-stepper>
        可编辑　editable
        <e-stepper>
            <e-step-header>
                <e-step-nav step="1" complete editable>Name of step 1</e-step-nav>
                <e-divider cs="bg-error"></e-divider>
                <e-step-nav step="2" complete>Name of step 2</e-step-nav>
                <e-divider></e-divider>
                <e-step-nav step="3">Name of step 3</e-step-nav>
            </e-step-header>
        </e-stepper>
        不可编辑　Non-editable steps
        <e-stepper>
            <e-step-header>
                <e-step-nav step="1" complete >Name of step 1</e-step-nav>
                <e-divider></e-divider>
                <e-step-nav step="2" >Name of step 2</e-step-nav>
                <e-divider></e-divider>
                <e-step-nav step="3">Name of step 3</e-step-nav>
            </e-step-header>
        </e-stepper>
        //
        <e-stepper v-model="e6" vertical>
            <e-step-nav step="1" :complete="e6 > 1">第一步</e-step-nav>
            <e-step-content step="1">
                <e-card cs="bg-primary"  height="200px">
                    <e-card-body></e-card-body>
                    <e-card-footer>
                        <e-btn @click.native="e6 = 2">Continue</e-btn>
                        <e-btn cs="flat">Cancel</e-btn>
                    </e-card-footer>
                </e-card>
            </e-step-content>

            <e-step-nav step="2" :complete="e6 > 2">第二步</e-step-nav>
            <e-step-content step="2">
                <e-card cs="bg-info" height="200px">
                    <e-card-body></e-card-body>
                    <e-card-footer>
                        <e-btn  @click.native="e6 = 3">Continue</e-btn>
                        <e-btn flat>Cancel</e-btn>
                    </e-card-footer>
                </e-card>
            </e-step-content>

            <e-step-nav step="3" :complete="e6 > 3">完成</e-step-nav>
            <e-step-content step="3">
                <e-card cs="bg-error" height="200px">
                    <e-card-body></e-card-body>
                    <e-card-footer>
                        <e-btn  @click.native="e6 = 4">Continue</e-btn>
                        <e-btn flat>Cancel</e-btn>
                    </e-card-footer>
                </e-card>
            </e-step-content>

            <e-step-nav step="4">完成</e-step-nav>
            <e-step-content step="4">
                <e-card cs="bg-info" height="200px">
                    <e-card-body></e-card-body>
                    <e-card-footer>
                        <e-btn  @click.native="e6 = 1">Continue</e-btn>
                        <e-btn flat>Cancel</e-btn>
                    </e-card-footer>
                </e-card>
            </e-step-content>
        </e-stepper>
    </e-container>
</template>
<script>
    export default {
        data(){
            return{
                e1: 0,
                e6: 0
            }
        }
    }
</script>