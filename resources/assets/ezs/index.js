import * as components from './components'
import * as directives from './directives'

function Ezs(Vue, args){
    const Ezs = components.Ezs;
    Vue.use(Ezs, {
        components,
        directives,
        ...args
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Ezs)
}

export default Ezs

