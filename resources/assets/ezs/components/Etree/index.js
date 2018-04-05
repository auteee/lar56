import ETree from './ETree'

ETree.install=function install(Vue){
    Vue.component(ETree.name,ETree)
};

export default ETree