
import Ripple from '../../directives/ripple'
export default {
    name:'e-radio',
    inheritAttrs: false,
    directives: { Ripple },
    inject: ['isMandatory', 'name','radio'],
    data: () => ({
        isActive: false
    }),
    props:{
        cs:String,
        disabled: Boolean,
        value: null,
        label: String,
        tabFocused: false,
        ripple: {
            type: [Boolean, Object],
            default: true
        },
    },
    computed:{
        classes(){
            const classes={
                'form-group': true,
                'radio': true,
                'disabled':this.disabled,
                'checked': this.isActive
            };
            return classes;
        },
        icon () {
            return this.isActive ? 'ion-android-radio-button-on' : 'ion-android-radio-button-off'
        },
    },
    mounted () {
        this.radio.register(this)
    },

    beforeDestroy () {
        this.radio.unregister(this)
    },
    methods:{
        isChecked(){
            const mandatory = this.isMandatory &&
                this.isMandatory() || false;

            if (!this.disabled && (!this.isActive || !mandatory)) {
                this.isActive = true;
                this.$emit('change', this.value)
            }
        }
    },
    render(h){
        const children = [];
        const _icon=h('e-icon', {
            class:this.cs,
            key: this.icon,
            on: Object.assign({
                click: this.isChecked
            }, this.$listeners)
        }, this.icon);
        const transition=h('transition',{props:{name:'fade-transition'}},[_icon]);

        children.push(transition);
        this.ripple && !this.disabled && children.push(h('span',{
            class:this.cs,
            staticClass:'checkbox-ripple',
            on: Object.assign({click: this.isChecked}, this.$listeners),
            directives:[{
                name:'ripple',
                value:this.ripple && {center:true}
            }]
        }));
        if (this.label) {
            children.push(h('label', {
                on: Object.assign({
                    click: this.isChecked
                }, this.$listeners)
            }, this.$slots.label || this.label))
        }
        return h('div', {'class': this.classes}, [children,this.$slots.default])
    }
}