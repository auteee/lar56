import {
    createSimpleTransition,
    createJavaScriptTransition
} from '../../util/helpers'

import ExpandTransitionGenerator from './expand-transition'
import Animate from './animate'

// JavaScript transitions
export const eExpandTransition = createJavaScriptTransition('expand-transition', ExpandTransitionGenerator());
export const eFadeTransition = createSimpleTransition('fade-transition');
export default install

function install(Vue){
    Vue.component(Animate.name,Animate);
    Vue.component('dh-expand', eExpandTransition);
    Vue.component('e-fade-transition', eFadeTransition)
}