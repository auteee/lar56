import ENotify from './ENotify'

ENotify.install=function install(Vue) {
    Vue.component(ENotify.name,ENotify)
};

export default ENotify