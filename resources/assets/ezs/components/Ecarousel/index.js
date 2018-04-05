import Ecarousel from './ECarousel'
import EcarouselItem from './ECarouselItem'

Ecarousel.install=function install(Vue) {
    Vue.component(Ecarousel.name,Ecarousel);
    Vue.component(EcarouselItem.name,EcarouselItem);
};

export default Ecarousel;