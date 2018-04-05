
export default {
    name:'e-tabs-content',
    inject: ['registerContent', 'unregisterContent'],

    data () {
        return {
            isActive: false,
            reverse: false
        }
    },
    props: {
        id: String,
        cs:String,
        dh: {
            type: [Boolean, String],
            default: 'tab-transition'
        },
        reverseDh: {
            type: [Boolean, String],
            default: 'tab-reverse-transition'
        }
    },
    computed: {
        computedTransition () {
            return this.reverse ? this.reverseDh : this.dh
        }
    },
    methods: {
        toggle (target, reverse, showTransition,index) {
            this.$el.style.transition = !showTransition ? 'none' : null;
            this.reverse = reverse;
            this.isActive = (this.id || index) === target
        }
    },
    mounted () {
        this.registerContent(this)
    },

    beforeDestroy () {
        this.unregisterContent(this)
    },
    render (h) {
        const data = {
            staticClass: 'tabs-content',
            'class':{[this.cs]:this.cs},
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        };

        if (this.id) data.domProps = { id: this.id };

        const div = h('div', data, this.$slots.default);

        if (!this.computedTransition) return div;

        return h('transition', {
            props: { name: this.computedTransition }
        }, [div])
    }
}