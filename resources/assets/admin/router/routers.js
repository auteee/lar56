import Login from '../views/login/Login.vue';
import Layout from '../views/layout/Layout.vue'
import Home from '../views/home/Home.vue';
import Permission from '../views/permission/Permission.vue';
import AdminUser from '../views/adminUser/adminUser.vue';
import Roles from  '../views/roles/roles.vue';

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

// const routes= [
//         { path:'/login',title:'登录', name:'Login', component:Login},
//         {
//             path:'/',
//             redirect: '/home',
//             name:'首页',
//             component:Layout,
//             children:[
//                 {path:'/home',title:'首页',name:'Home',component:Home}
//             ]
//         },
//
//     ];
// const router = new Router({
//     routes: routes
// });
// router.beforeEach((to, from, next) => {
//     if(window.apiToken){ // 通过vuex state获取当前的token是否存在
//         if (to.path === '/login') {
//             next({ path: '/' });
//         }else{
//             //是否获取用户，如果没获取则获取
//             next({path:'/'})
//         }
//     }else{
//         next({ path: '/login' })
//     }
// });
//
// export default router


export default new Router({
    linkActiveClass:'active',
    scrollBehavior:()=>({y:0}),
    routes:[
        { path:'/login',title:'登录', name:'Login', component:Login},
        {
            path:'/',
            redirect: '/home',
            title:'首页',
            name:'Admin',
            component:Layout,
            children:[
                {path:'/home',name:'Home',component:Home},
                {path:'/permission',name:'permission',component:Permission},
                {path:'/adminuser',name:'adminuser',component:AdminUser},
                {path:'/role',name:'roles',component:Roles},
            ]
        },

    ]
})