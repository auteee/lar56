import ETabs from './ETabs'
import ETabsHeader from './ETabsHeader'
import ETabsSlider from './ETabsSlider'
import ETabsNav from './ETabsNav'
import ETabsBody from './ETabsBody'
import ETabsContent from './ETabsContent'

ETabs.install=function install(Vue) {
    Vue.component(ETabs.name,ETabs);
    Vue.component(ETabsHeader.name,ETabsHeader);
    Vue.component(ETabsNav.name,ETabsNav);
    Vue.component(ETabsSlider.name,ETabsSlider);
    Vue.component(ETabsBody.name,ETabsBody);
    Vue.component(ETabsContent.name,ETabsContent);
};
export default ETabs