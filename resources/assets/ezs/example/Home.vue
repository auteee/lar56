<template>
    <e-container>

        this is home
        <div id="example-3">
            <button @click="show = !show">
                Toggle render
            </button>
            <e-dh in="bounceInDown" out="bounceOutRight">
                <p v-if="show">hello</p>
            </e-dh>
        </div>
        <div style="border: 1px solid #eee;padding: 25px 35px;margin:5px auto; line-height: 1.5em;display: block;">
            <button @click="open = !open">
                Toggle render
            </button>
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated tada"
                    leave-active-class="animated bounceOutRight"
            >
                <h1 v-show="open" style="line-height: 1.6em;z-index: 1;margin: 0;padding: 0">hello</h1>
            </transition>
        </div>
    </e-container>
</template>
<script>
    export default {
        data() {
            return {
                boxshow:true,
                open:true,
                show: true
            }
        }
    }
</script>