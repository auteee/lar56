import EProgressCircular from './EProgressCircular'
import EProgressLinear from './EProgressLinear'

const EProgress ={};

EProgress.install=function install(Vue) {
    Vue.component(EProgressCircular.name,EProgressCircular);
    Vue.component(EProgressLinear.name,EProgressLinear);
};

export default EProgress