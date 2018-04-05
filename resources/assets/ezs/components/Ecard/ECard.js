import Routeable from '../../mixins/routeable'
export default {
    name:'e-card',
    mixins: [Routeable],
    props:{
        cs:String,
        height: {
            type: String,
            default: 'auto'
        },
        img: String,
        tag: {
            type: String,
            default: 'div'
        },
        to:[String,Object],
        width: [String, Number]
    },
    computed:{
        classes() {
            return {
                'card': true,
                [this.cs]:this.cs
            };
        },
        styles () {
            const style = {
                height: isNaN(this.height) ? this.height : `${this.height}px`
            };

            if (this.img) {
                style.background = `url("${this.img}") center center / cover no-repeat`
            }
            if (this.width) {
                style.width = isNaN(this.width) ? this.width : `${this.width}px`
            }
            return style
        }
    },

    render(h){
        const { tag, data } = this.generateRouteLink();

        data.style = this.styles;
        return h(tag, data, this.$slots.default);
    }
}