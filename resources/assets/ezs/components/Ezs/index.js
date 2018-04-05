import load from '../../util/load'
//import { consoleWarn } from '../../util/console'
import eGoTo from './util/eGoTo'
//注册全局变量
const Ezs={
    install(Vue,opts={}){
        if (this.installed) return;
        this.installed = true;

        const $ezs={
            load,
            eGoTo,
            application: { bar: 0, top: 0, bottom: 0, left: 0, right: 0 },
            breakpoint: {},
            touchSupport: false
        };
        Vue.util.defineReactive({}, 'breakpoint', $ezs);
        Vue.util.defineReactive({}, 'application', $ezs);

        Vue.prototype.$ezs = $ezs;

        if (opts.transitions) {
            Object.keys(opts.transitions).forEach(key => {
                const t = opts.transitions[key];
                if (t.name !== undefined && t.name.startsWith('e-')) {
                    Vue.component(t.name, t)
                }
            })
        }

        if (opts.directives) {
            Object.keys(opts.directives).forEach(key => {
                const d = opts.directives[key];
                Vue.directive(d.name, d)
            })
        }

        if (opts.components) {
            Object.keys(opts.components).forEach(key => {
                const c = opts.components[key];
                Vue.use(c)
            })
        }
    }
};

export default Ezs