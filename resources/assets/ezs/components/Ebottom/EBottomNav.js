
import Applicationable from '../../mixins/applicationable'
import ButtonGroup from './mixins/button-group'
export default {
    name:'e-bottom-nav',
    mixins: [
        Applicationable('bottom', [
            'height',
            'value'
        ]),
        ButtonGroup
    ],
    props:{
        absolute: Boolean,
        fixed: Boolean,
        shift: Boolean,
        active: [Number, String],
        height: {
            default: 56,
            type: [Number, String],
            validator: v => !isNaN(parseInt(v))
        },
        value: { required: false }
    },
    watch: {
        active () {
            this.update()
        }
    },
    computed:{
        classes () {
            return {
                'absolute': this.absolute,
                'fixed': !this.absolute && (this.app || this.fixed),
                'shift': this.shift,
                'active': this.value
            }
        },
        computedHeight () {
            return parseInt(this.height)
        }
    },
    methods: {
        isSelected (i) {
            const item = this.getValue(i);
            return this.active === item
        },
        /**
         * Update the application layout
         *
         * @return {number}
         */
        updateApplication () {
            return !this.value
                ? 0
                : this.computedHeight
        },
        updateValue (i) {
            const item = this.getValue(i);

            this.$emit('update:active', item)
        }
    },

    render (h) {
        return h('div', {
            staticClass: 'bottom-nav',
            class: this.classes,
            style: {
                height: `${parseInt(this.computedHeight)}px`
            },
            ref: 'content'
        }, this.$slots.default)
    }
}