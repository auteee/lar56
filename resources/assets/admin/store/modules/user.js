import {getToken,setToken,removeToken} from '../../helpers/helpers.js';
import {login,logout,getUserInfo} from '../../utils/login.js';
import axios from '../../utils/ioax';

const user ={
    state:{
        isLogin:false,
        username:'',
        avatar: '',
        email:'',
        roles: [],
        //menus:[],
        token:getToken(),
        isError:false,
        message:'',
    },
    mutations:{
        // SET_MENU:(state,menu)=>{
        //     state.menus=menu;
        // },
        SET_LOGIN:(state,islogin)=>{
            state.isLogin=islogin;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USERNAME: (state, username) => {
            state.username=username;
        },
        SET_AVATAR:(state,avatar)=>{
            state.avatar=avatar;
        },
        SET_EMAIL:(state,email)=>{
            state.avatar=email;
        },
        SET_MESSAGE:(state,msg)=>{
            state.MESSAGE=msg;
        }
    },
    actions:{
        // 用户名登录
        Login({ commit }, userInfo) {
            return new Promise((resolve, reject) => {
                login(userInfo).then(response => {
                    if(response.data.success===1){
                        commit('SET_TOKEN', response.data.access_token);
                        commit('SET_LOGIN', true);
                        setToken(response.data.access_token);
                        //登录成功后更新设置 headers
                        axios.defaults.headers.common['Authorization'] = 'Bearer '+getToken();
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetUserInfo({ commit}) {
           return new Promise((resolve,reject)=>{
                getUserInfo().then(response => {
                    if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
                        reject('error')
                    }
                    commit('SET_USERNAME', response.data.username);
                    commit('SET_AVATAR', response.data.avatar);
                    commit('SET_EMAIL', response.data.email);
                    //commit('SET_ROLES', response.data.roles);
                    commit('SET_LOGIN', true);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                });
            });
        },
        // 登出
        LogOut({ commit }) {
            return new Promise((resolve, reject) => {
                logout().then((response) => {
                    if(response.data.success===1){
                        commit('SET_TOKEN', '');
                        commit('SET_LOGIN', false);
                        removeToken();
                    }
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                removeToken();
                resolve()
            })
        },

        // 动态修改权限
        ChangeRoles({ commit }, role) {
            return new Promise(resolve => {
                commit('SET_TOKEN', role);
                setToken(role);
                getUserInfo(role).then(response => {
                    const data = response.data;
                    commit('SET_ROLES', data.roles);
                    commit('SET_NAME', data.name);
                    commit('SET_AVATAR', data.avatar);
                    commit('SET_INTRODUCTION', data.introduction);
                    resolve()
                })
            })
        }
        // 第三方验证登录
        // LoginByThirdparty({ commit, state }, code) {
        //   return new Promise((resolve, reject) => {
        //     commit('SET_CODE', code)
        //     loginByThirdparty(state.status, state.email, state.code).then(response => {
        //       commit('SET_TOKEN', response.data.token)
        //       setToken(response.data.token)
        //       resolve()
        //     }).catch(error => {
        //       reject(error)
        //     })
        //   })
        // },
    }


};

export default user