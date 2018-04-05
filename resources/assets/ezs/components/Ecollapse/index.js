import ECollapse from './ECollapse';
import ECollapseContent from './ECollapseContent';

ECollapse.install=function install(Vue) {
    Vue.component(ECollapse.name,ECollapse);
    Vue.component(ECollapseContent.name,ECollapseContent);
};

export default ECollapse;