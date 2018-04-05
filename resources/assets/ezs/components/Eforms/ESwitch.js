
import Ripple from '../../directives/ripple'
import Touch from "../../directives/touch"
//import InputGroup from '../../mixins/inputGroup'

export default {
    name:'e-switch',
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    directives: { Ripple,Touch },
    props:{
        label:String,
        ripple: {
            type: [Boolean, Object],
            default: true
        },
        inputValue:null,
        cs:String,
        disabled: Boolean,
        value: {required:false},
        color:{
            type:String,
            default:'primary'
        }
    },
    computed:{
        classes () {
            const classes={
                'form-group switch': true,
                'disabled':this.disabled,
            };
            return classes;
        },
        isActive () {
            if ((Array.isArray(this.inputValue))
            ) {
                return this.inputValue.indexOf(this.value) !== -1
            }

            if (!this.trueValue || !this.falseValue) {
                return this.value
                    ? this.value === this.inputValue
                    : Boolean(this.inputValue)
            }
            return this.inputValue === this.trueValue
        },
        containerClasses () {
            return {
                'switch-container': true,
                'disabled': this.disabled,
                [this.color]:this.isActive,
            }
        },
        toggleClasses () {
            return {
                'switch-toggle': true,
                'active': this.isActive
            }
        },
        rippleClasses () {
            return {
                'switch-ripple': true,
                'active': this.isActive,

            }
        }
    },
    methods:{
        onSwipeLeft () {
            if (this.isActive) this.toggle()
        },
        onSwipeRight () {
            if (!this.isActive) this.toggle()
        },
        toggle () {
            if (this.disabled) return;
            let input = this.inputValue;
            if (Array.isArray(input)) {
                input = input.slice();
                const i = input.indexOf(this.value);

                if (i === -1) {
                    input.push(this.value)
                } else {
                    input.splice(i, 1)
                }
            } else if (this.value) {
                input = this.value === this.inputValue
                    ? null
                    : this.value
            } else {
                input = !input
            }
            //this.validate(true, input);
            this.$emit('change', input)
        },
        genRipple (data = { directives: [] }) {
            data.class = this.isActive?this.rippleClasses:'switch-ripple';
            data.directives.push({
                name: 'ripple',
                value: this.ripple && !this.disabled && { center: true }
            });
            data.on = Object.assign({
                click: this.toggle
            }, this.$listeners);

            return this.$createElement('div', data)
        }
    },
    render(h){
        // const children = [];
        // children.push(
        //     this.genRipple({
        //         directives: [{
        //             name: 'touch',
        //             value: {
        //                 left: this.onSwipeLeft,
        //                 right: this.onSwipeRight
        //             }
        //         }]
        // }));

        const container=[];
        container.push(h('div', {
            'class': this.containerClasses
        }, [
            h('div', { 'class': this.toggleClasses }),
            this.genRipple({
                directives: [{
                    name: 'touch',
                    value: {
                        left: this.onSwipeLeft,
                        right: this.onSwipeRight
                    }
                }]
            })
        ]));
        if (this.label) {
            container.push(h('label', {
                on: Object.assign({
                    click: this.toggle
                }, this.$listeners)
            }, this.$slots.label || this.label))
        }
        return h('div', {'class': this.classes},[container]);
    }
}