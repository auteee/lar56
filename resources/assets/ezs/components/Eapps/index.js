import EApp from './EApp'
import EAppAside from './EAppAside'
import EAppHeader from './EAppHeader'
import EAppMain from './EAppMain'

const Application ={};

Application.install=function (Vue){
    Vue.component(EApp.name,EApp);
    Vue.component(EAppAside.name,EAppAside);
    Vue.component(EAppHeader.name,EAppHeader);
    Vue.component(EAppMain.name,EAppMain)
};

export default Application