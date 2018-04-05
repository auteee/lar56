import Etooltip from './ETooltip'

Etooltip.install=function install(Vue) {
    Vue.component(Etooltip.name,Etooltip);
};

export default Etooltip