//_badges.styl
export default {
    name:'e-badge',
    data () {
        return {
            isActive: !!this.value
        }
    },
    props:{
        mode: String,
        origin: String,
        bottom: Boolean,
        left: Boolean,
        overlap: Boolean,
        cs:{
          type:String,
          default:'bg-primary'
        },
        dh: {
            type: String,
            default: 'fab-transition'
        },
        value: {
            default: true
        }
    },
    computed: {
        classes () {
            return {
                'bottom': this.bottom,
                'left': this.left,
                'overlap':this.overlap
            }
        }
    },
    watch: {
        value (val) {
            this.isActive = !!val
        },
    },
    render(h){
        const badge = this.$slots.badge ? [h('span', {
            staticClass: 'badge-badge',
            'class': this.cs,
            attrs: this.attrs,
            directives: [{
                name: 'show',
                value: this.isActive
            }]
        }, this.$slots.badge)] : null;
        const children=[h('transition', {
            props: {
                name: this.dh,
                origin: this.origin,
                mode: this.mode
            }
        }, badge)];
        children.unshift(this.$slots.default);
        return h('span', {
            staticClass: 'badge',
            'class': this.classes
        }, children)
    }
}