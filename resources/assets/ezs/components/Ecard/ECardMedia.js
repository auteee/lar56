import Routeable from '../../mixins/routeable'

export default {
    name: 'e-card-media',
    mixins: [Routeable],
    props: {
        contain: Boolean,
        height: {
            type: [Number, String],
            default: 'auto'
        },
        img:String,
        cs:String,
        tag: {
            type: String,
            default: 'div'
        },
    },
    computed:{
        classes () {
            let classes={
                'card-media':true
            };
            if(this.cs){
                classes[this.cs]=true;
            }
            return classes;
        },
        styles () {
            const style = {
                height: !isNaN(this.height) ? `${this.height}px` : this.height
            };

            if (this.img) {
                style.background= `url(${this.img}) center center / ${this.contain ? 'contain' : 'cover'} no-repeat`;
            }

            return style
        }
    },
    render (h) {
        const { tag, data } = this.generateRouteLink();

        data.style = this.styles;

        return h(tag, data, this.$slots.default);
    }
}
