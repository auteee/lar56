//import axios from 'axios'
import Vue from 'vue'
import Ezs from '../ezs/index'
import store from './store/index'
import router from './router/routers'
import {getToken} from "./helpers/helpers";

Vue.use(Ezs);

import axios from './utils/ioax'

window.axios=axios;

// window.axios=axios;
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// let token = document.head.querySelector('meta[name="csrf-token"]');
// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }
// window.apiToken=window.localStorage.token;
// router.beforeResolve(()=>{
//
// });
//免登录白名单
const whiteList=['/login'];
console.info(getToken());
router.beforeEach((to, from, next) => {
    if(getToken()){ // 通过vuex state获取当前的token是否存在
        if (to.path === '/login') {
            next({ path: '/' });
        }else if(!store.getters.isLogin){
            store.dispatch('GetUserInfo').then(res=>{
                //获取菜单，权限控制写在后台，前端暂时跳过，以后添加
                next({ ...to, replace: true })
            }).catch((e) => {
                console.info(e);
                console.info('aaa');
                store.dispatch('FedLogOut').then(() => {
                    //Message.error('Verification failed, please login again')
                    next({ path: '/login' })
                })
            })
        }else{
            next();
            //下面二行是在前端判断有没有权限//暂时跳过
            // if (hasPermission(store.getters.roles, to.meta.roles)) {
            //     next()
            // }else{
            //     next({ path: '/401', replace: true, query: { noGoBack: true }})
            // }
        }
    }else{
        //has no token
        //在免登录白名单中，直接进入
        if(whiteList.indexOf(to.path)!==-1){
            next();
        }
        //否则全部重定向到登录页面
        next('/login');
    }
});


import App from './App.vue'
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});




// router.beforeEach((to, from, next) => {
//     if (store.getters.token) { // 判断是否有token
//         if (to.path === '/login') {
//             next({ path: '/' });
//         } else {
//             if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
//                 store.dispatch('GetInfo').then(res => { // 拉取info
//                     const roles = res.data.role;
//                     store.dispatch('GenerateRoutes', { roles }).then(() => { // 生成可访问的路由表
//                         router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//                         next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
//                     })
//                 }).catch(err => {
//                     console.log(err);
//                 });
//             } else {
//                 next() //当有用户权限的时候，说明所有可访问路由已生成 如访问没权限的全面会自动进入404页面
//             }
//         }
//     } else {
//         if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
//             next();
//         } else {
//             next('/login'); // 否则全部重定向到登录页
//         }
//     }
// });