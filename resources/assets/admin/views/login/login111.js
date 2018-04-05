
import axios from 'axios'
import Vue from 'vue'
import Ezs from '../../ezs/index'

window.axios=axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

Vue.use(Ezs);



import Login from './Login.vue'

new Vue({
    el: '#app',
    render: h => h(Login)
});