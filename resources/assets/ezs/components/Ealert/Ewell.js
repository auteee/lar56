//_alerts.sytl
import EIcon from "../Eicon"
export default {
    name:'e-well',
    components:{ EIcon },
    props:{
        cs:String,
        tag:{
            type:String,
            default:'div'
        }
    },
    computed: {
        classes () {
            return {
                [this.cs]:this.cs
            };
        },
    },
    render(h){
        return h(this.tag,{
            staticClass:'well',
            'class':this.classes,
        },this.$slots.default);
    }
}