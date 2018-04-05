import ETree from './ETree'
import Enestable from './Enestable'

ETree.install=function install(Vue){
    Vue.component(ETree.name,ETree);
    Vue.component(Enestable.name,Enestable);
};

export default ETree