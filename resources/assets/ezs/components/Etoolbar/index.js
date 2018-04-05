import {
    createSimpleFunctional
} from '../../util/helpers'

import Esystembar from './ESystemBar'
import Etoolbar from './EToolbar'
const EToolbarTitle = createSimpleFunctional('toolbar-title');
const EToolbarItems = createSimpleFunctional('toolbar-items');
const EBar = {};

EBar.install=function install(Vue) {
    Vue.component(Esystembar.name,Esystembar);
    Vue.component(Etoolbar.name,Etoolbar);
    Vue.component(EToolbarTitle.name,EToolbarTitle);
    Vue.component(EToolbarItems.name,EToolbarItems);
};

export default EBar