import Emarkdownit from './EMarkdownIt'
import Emarkdownedit from './EMarkdownEdit'

const Emarked={};

Emarked.install=function install(Vue) {
    Vue.component(Emarkdownit.name,Emarkdownit);
    Vue.component(Emarkdownedit.name,Emarkdownedit);
};

export default Emarked;