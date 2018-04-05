import {getPermissionMenu} from "../../utils/login";

const menu ={
    state:{
        menus:[],
    },
    mutations:{
        SET_MENU:(state,menu)=>{
            state.menus=menu;
        },
    },
    actions:{
        GetPermissionMenu({commit}){
            return new Promise((resolve, reject) => {
                getPermissionMenu().then(response => {
                    commit('SET_MENU', response.data);
                    //resolve(response)
                }).catch(error => {
                    console.info(error);
                    reject(error)
                })
            })
        }
    }
};

export default menu;