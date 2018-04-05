/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Vue from 'vue'
import * as components from './components'
function Ezs(Vue, args){
    const Ezs = components.Ezs;
    Vue.use(Ezs, {
        components,
        ...args
    })
}
Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
    // 只在 2.2.0+ 可用
    console.log(arguments)
};
Ezs(Vue);

 //import testvue1 from './vsrc/components/VBottomNav'
 //import vicon from './src/components/VIcon';
 //import testvue from './src/components/VStepper'
 //Vue.use(vicon);
 //Vue.use(testvue);
 //Vue.use(testvue1);
import App from './App.vue'
import router from './routers.js'

new Vue({
    el: '#app',
    router,

    render: h => h(App)
});


