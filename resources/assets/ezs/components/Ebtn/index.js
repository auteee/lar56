import Ebtn from './EBtn'
import EbtnDial from './EBtnDial'
Ebtn.install=function install(Vue){
    Vue.component(Ebtn.name,Ebtn);
    Vue.component(EbtnDial.name,EbtnDial)
};

export default Ebtn