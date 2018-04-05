import Icon from '../Eicon'
import Ripple from '../../directives/ripple'
export default {
    name:'e-radios',
    components:{ Icon },
    directives: { Ripple },
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    props:{
        inputValue:null,
        radios:[Array,Object],
        cs:String,
        row:Boolean,
        disabled: Boolean,
        value: null,
        ripple: {
            type: [Boolean, Object],
            default: true
        },
    },
    computed:{
        classes () {
            const classes={
                'radio-group': true,
                'row': this.row,
                'disabled':this.disabled,
            };
            if(this.cs) classes[this.cs]=true;
            return classes;
        },
    },
    methods:{
        genRadio(item,i){
            const children=[];
            let css='form-group radio';
            if(item.disabled) css += ' disabled';
            children.push(this.genIcon(item,i));

            this.ripple && !this.disabled && children.push(this.$createElement('span',{
                class:this.cs,
                staticClass:'checkbox-ripple',
                on: {
                    click:()=>!item.disabled && this.$emit('change',item.value)
                },
                directives:[{
                    name:'ripple',
                    value:this.ripple && {center:true}
                }]
            }));

            if(item.label) children.push(this.genLabel(item));
            return this.$createElement('div',{
                staticClass:item.color,
                class:css
            },children);
        },
        genLabel(item){
            return this.$createElement('label', {
                on: {
                    click:()=>!item.disabled && this.$emit('change',item.value)
                }
            }, item.label)
        },
        genIcon(item,i){
            let icon = item.value===this.inputValue ? 'ion-android-radio-button-on':'ion-android-radio-button-off';
            let css='';
            if(item.color) css=item.color;

            const _icon= this.$createElement('e-icon', {
                class:css,
                key: icon+i,
                on: {
                    click:()=>!item.disabled && this.$emit('change',item.value)
                }
            }, icon);
            return this.$createElement('transition',{props:{name:'fade-transition'}},[_icon]);
        }
    },
    render(h){

        const child=this.radios.map((item,i)=> {
            return this.genRadio(item,i)
        });
        return h('div',{class:this.classes},child)
    }
}