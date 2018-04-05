//_apps.styl
import Resize from '../../directives/resize'
import Breakpoint from '../../util/breakpoint'
export default {
    name:'e-app',
    mixins: [Breakpoint],
    directives: { Resize },
    data: () => ({
        resizeTimeout: {}
    }),

    props: {
        id: {
            type: String,
            default: 'app'
        }
    },

    mounted () {
        window.addEventListener('load', this.runCallbacks)
    },

    methods: {
        // Run all load callbacks created
        // from the load helper utility
        runCallbacks () {
            // For unit tests
            if (!document._loadCallbacks) return

            while (document._loadCallbacks.length) {
                document._loadCallbacks.pop()()
            }
        }
    },

    render (h) {
        const data = {
            staticClass: 'application',
            'class': {},
            attrs: { 'data-app': true },
            domProps: { id: this.id },
            directives: [{
                name: 'resize',
                value: this.onResize
            }]
        };

        return h('div', data, this.$slots.default)
    }
}