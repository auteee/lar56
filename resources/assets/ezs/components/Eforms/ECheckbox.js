
//_forms.styl
import EIcon from '../Eicon'
import Ripple from '../../directives/ripple'


export default{
    name:'e-checkbox',
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    components: { EIcon },
    directives: { Ripple },
    props:{
        cs:String,
        disabled: Boolean,
        label: String,
        inputValue: null,
        indeterminate: Boolean,
        ripple: {
            type: [Boolean, Object],
            default: true
        },
        tabindex:{
            type:Number,
            default:0
        },
        value: {
            required: false
        }
    },
    mounted(){
        //console.info(this.inputValue)
    },
    computed:{
        classes(){
            const classes={
                'form-group': true,
                'checkbox': true,
                'disabled':this.disabled,
                'checked': this.isActive
            };
            return classes;
        },
        icon () {
            if (this.indeterminate) {
                return 'ion-android-checkbox-blank'
            } else if (this.isActive) {
                return 'ion-android-checkbox'
            } else {
                return 'ion-android-checkbox-outline-blank'
            }
        },
        isActive(){
            if ((Array.isArray(this.inputValue))) {
                return this.inputValue.indexOf(this.value) !== -1
            }
            return this.value
                ? this.value === this.inputValue
                : Boolean(this.inputValue)
        }
    },
    methods:{
        isChecked(){
            if (this.disabled) {
                return
            }
            let input = this.inputValue;

            if (Array.isArray(input)) {
                input = input.slice();
                const i = input.indexOf(this.value);
                i===-1 && input.push(this.value) || input.splice(i, 1)
            } else if (this.value) {
                input = this.value === this.inputValue
                    ? null
                    : this.value
            } else {
                input = !input
            }
            //this.$emit('input',input);
            this.$emit('change', input,this.value)
        }
    },
    render: function (h) {

        const children = [];
        //const group=[];
        const _icon=h('e-icon', {
            class:this.cs,
            key: this.icon,
            on: Object.assign({
                click: this.isChecked
            }, this.$listeners)
        }, this.icon);
        const transition=h('transition',{props:{name:'fade-transition',mode:"in-out"}},[_icon]);

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
        //children.push(h('div',{staticClass:'form-group-input'},group));
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