import Eportal from './EPortal'

Eportal.install=function install(Vue) {
    Eportal.component(Eportal.name,Eportal);
};

export default Eportal