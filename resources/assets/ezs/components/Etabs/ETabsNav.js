import Routeable from '../../mixins/routeable'
export default {
    name:'e-tabs-nav',
    inject: ['slider', 'tabClick', 'registerTabNav', 'unregisterTabNav'],
    mixins:[Routeable],
    data () {
        return {
            isActive: false
        }
    },
    props:{
        activeClass: {
            type: String,
            default: 'tabs-nav-active'
        },
    },
    computed:{
        classes () {
            const classes = {
                'tabs-nav-link': true,
                'disabled': this.disabled
            };
            classes[this.activeClass] = !this.to && this.isActive;
            return classes
        },
        action () {
            const to = this.to || this.href;

            if (typeof to === 'string') return to.replace('#', '');
            if (to === Object(to) &&
                (to.hasOwnProperty('name') ||
                    to.hasOwnProperty('path'))
            ) return to.name || to.path;

            return this
        }
    },
    watch: {
        $route () {
            this.to && this.callSlider()
        }
    },
    mounted(){
        this.registerTabNav(this);
        this.callSlider();
    },
    beforeDestroy () {
        this.unregisterTabNav(this);
    },
    methods:{
        callSlider () {
            setTimeout(() => {
                this.$el.firstChild.classList.contains('tabs-nav-active') &&
                this.slider(this.$el)
            }, 100)
        },
        click (e) {
            if (this.href &&
                this.href.indexOf('#') > -1
            ) e.preventDefault();

            this.$emit('click', e);

            this.to || this.tabClick(this);
            //this.slider(this.$el)
        },
        toggle (action,index) {
            this.isActive = (action === this.action) || (action===index);
            this.$nextTick(() => {
                this.isActive && this.slider(this.$el)
            })
        }
    },
    render(h){
        let link=this.generateRouteLink();
        const {data}=link;
        data.on.click=this.click;
        const tag = this.disabled ? 'div' : link.tag;
        return h('li', [h(tag, data, this.$slots.default)])
    }
}