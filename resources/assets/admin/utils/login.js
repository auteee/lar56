import ioax from '../utils/ioax.js';
//const baseUrl='http://lar56.cn/api/admin';
export function login(data) {
    //data: {username,password}
    //return ioax.post(baseUrl+'/login',data);
    return ioax({
        url: '/login',
        method: 'post',
        data
    })
}

export function logout() {
    return ioax({
        url: '/logout',
        method: 'post'
    })
}

export function getUserInfo(token) {
    return ioax({
        url: '/user',
        method: 'get',
        //params: { '':token }
    })
}

export function getPermissionMenu() {
    return ioax({
        url: '/permission-menu',
        method:'get',
    })
}
