
export default {
    name:'e-chip',
    data () {
        return {
            isActive: !!this.value
        }
    },
    props:{
        closed: Boolean,
        disabled: Boolean,
        // Used for selects/tagging
        selected: Boolean,
        cs:String,
        value: {
            type: Boolean,
            default: true
        }
    },
    computed:{
        classes () {
            return{
                'disabled': this.disabled,
                'selected': this.selected,
                [this.cs]:this.cs
            };
        }
    },
    watch: {
        value (val) {
            this.isActive = !!val
        },
    },
    render(h){
        const data = {
            staticClass: 'chip',
            'class': this.classes,
            attrs: { tabindex: this.disabled ? -1 : 0 },
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        };
        const children=[this.$slots.default];
        if(this.closed){
            const close = h('span', {
                'class': 'closed',
                on: {
                    click: () => {
                        this.$emit('input', false);
                        this.isActive=false
                    }
                }
            }, '×');
            children.push(close)
        }
        return h('span',data,children)
    }
}