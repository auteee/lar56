import ClickOutside from './click-outside'
import Resize from './resize'
import Ripple from './ripple'
import Scroll from './scroll'
import Touch from './touch'

export {
    ClickOutside,
    Resize,
    Ripple,
    Scroll,
    Touch
}

export default function install(Vue) {
    Vue.directive('click-outside',ClickOutside);
    Vue.directive('resize',Resize);
    Vue.directive('ripple',Ripple);
    Vue.directive('scroll',Scroll);
    Vue.directive('touch',Touch);
}