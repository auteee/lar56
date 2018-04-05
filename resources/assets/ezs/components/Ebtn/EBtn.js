//_buttons.style
//路由，注入
import Ripple from '../../directives/ripple'
export default {
    name:'e-btn',
    inject: {
        buttonGroup: { default: null }
    },
    directives: {
        Ripple
    },
    //mixins:[RegistrableInject('buttonGroup')],
    data () {
        return {
            isActive: !!this.value
        }
    },
    props:{
        cs:String,
        disabled:Boolean,
        activeClass: {
            type: String,
            default: 'btn-active'
        },
        ripple: {
            type: [Boolean, Object],
            default: true
        },
        tag:{
            type:String,
            default:'button'
        },
        href: [String, Object],
        target:String,
        to: [String, Object],
        value: null
    },
    computed:{
        classes() {
            return {
                'btn': true,
                'disabled':this.disabled,
                [this.activeClass]: this.isActive,
                [this.cs]:this.cs
            };
        },
    },
    watch: {
        value(val){
            this.isActive=!!val;
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input',val);
        }
    },
    methods:{
        click (e) {
            this.$el.blur();
            this.$emit('click', e)
        },
    },
    mounted () {
        //按钮组注入
        if (this.buttonGroup) {
            this.buttonGroup.register(this)
        }
    },

    beforeDestroy () {
        if (this.buttonGroup) {
            this.buttonGroup.unregister(this)
        }
    },
    render: function (h) {
        let tag = this.tag;

        const data = {
            'class': this.classes,
            props:{},
            domProps:{},
            directives: [{
                name: 'ripple',
                value: this.ripple || false
            }],
            on: {
                ...(this.$listeners || {}),
                click: this.click
            }
        };
        data.attrs = data.attrs || {};
        if(this.to){
            tag =  'router-link';
            Object.assign(data.props, {
                to: this.to,
            })
        }
        if(this.href){
            tag ='a';
            data.domProps.href=this.href;
            data.domProps.target=this.target || '_blank';
        }
        data.attrs.value = ['string', 'number'].includes(typeof this.value)
            ? this.value
            : JSON.stringify(this.value);
        return h(tag, data, [this.$slots.default])
    }
}