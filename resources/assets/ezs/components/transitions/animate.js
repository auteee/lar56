
export default {
    name:'e-animate',
    props:{
        name:String,
        in:String,
        out:String,
        mode: {
            type: String,
            default: 'in-out'
        }
    },
    render(h){
        const _props={};
            _props.name=this.name?this.name:'e-transition-name';
            if(this.in){
                _props['enter-active-class']="animated"+' '+this.in;
            }
            if(this.out){
                _props['leave-active-class']="animated"+' '+this.out;
            }
        const data={
            props:_props
        };
        return h('transition',data,this.$slots.default)
    }
}