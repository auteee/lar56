import ClickOutside from '../../directives/click-outside'
//import Toggleable from "../../vsrc/mixins/toggleable";

export default {

    name:'e-btn-dial',
    //mixins:[Toggleable],
    directives: { ClickOutside },
    data () {
        return {
            isActive: !!this.value
        }
    },
    props: {
        mode: String,
        origin: String,
        cs:String,
        posxy:{
            type:String,
            default:'space-r-b'
        },
        direction: {
            type: String,
            default: 'top',
            validator: val => {
                return ['top', 'right', 'bottom', 'left'].includes(val)
            }
        },
        openOnHover: Boolean,
        transition: {
            type: String,
            default: 'scale-transition'
        },
        value:{required: false}
    },

    computed: {
        classes () {
            return {
                'btn-dial': true,
                [`direction-${this.direction}`]: true,
                [this.posxy]:this.posxy,
                [this.cs]:this.cs
            }
        }
    },
    watch: {
        value(val){
            this.isActive=!!val;
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input',val);
        }
    },
    render (h) {
        let children = [];
        const data = {
            'class': this.classes,
            directives: [{
                name: 'click-outside',
                value: () => (this.isActive = false)
            }],
            on: {
                click: () => (this.isActive = !this.isActive)
            }
        };

        if (this.openOnHover) {
            data.on.mouseenter = () => (this.isActive = true);
            data.on.mouseleave = () => (this.isActive = false)
        }

        if (this.isActive) {
            children = (this.$slots.default || []).map((b, i) => {
                b.key = i;

                return b
            })
        }

        const list = h('transition-group', {
            'class': 'btn-dial-list',
            props: {
                name: this.transition,
                mode: this.mode,
                origin: this.origin,
                tag: 'div'
            }
        }, children);

        return h('div', data, [this.$slots.anchor, list])
    }
}