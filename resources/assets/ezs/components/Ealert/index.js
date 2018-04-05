import EAlert from './EAlert'
import EWell from './Ewell'
EAlert.install=function install(Vue){
    Vue.component(EAlert.name,EAlert);
    Vue.component(EWell.name,EWell);
};

export default EAlert