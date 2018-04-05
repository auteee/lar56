import Scroll from '../../directives/scroll'
export default {
    name:'e-toolbar',
    directives: { Scroll },
    data: () => ({
        heights: {          //高度
            mobileLandscape: 48,
            mobile: 56,
            desktop: 64,
            dense: 48
        },
        isExtended: false,
        isScrollingProxy: false,
        previousScroll: null,
        target: null
    }),

    props: {
        cs:String,
        dense: Boolean,
        extended: Boolean,
        floating: Boolean,
        height: [Number, String],
        prominent: Boolean,
        manualScroll: {
            type: Boolean,
            default: null
        },
        scrollOffScreen: Boolean,
        scrollTarget: String,
        scrollThreshold: {
            type: Number,
            default: 100
        }
    },
    computed:{
        classes(){
            let classes= {
                'toolbar': true,
                'dense': this.dense,
                'prominent': this.prominent,
                'extended': this.isExtended,
                [this.cs]:this.cs
            };
            return classes;
        },
        computedHeight () {
            if (this.height) return parseInt(this.height);
            if (this.dense) return this.heights.dense;

            if (this.prominent || this.$ezs.breakpoint.mdAndUp) return this.heights.desktop;

            if (this.$ezs.breakpoint.width > this.$ezs.breakpoint.height)
                return this.heights.mobileLandscape;

            return this.heights.mobile
        },
    },
    methods: {
        onScroll () {
            if (typeof window === 'undefined') return;

            if (!this.target) {
                this.target = this.scrollTarget
                    ? document.querySelector(this.scrollTarget)
                    : window
            }

            const currentScroll = this.scrollTarget
                ? this.target.scrollTop
                : this.target.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll < this.scrollThreshold) return;

            if (this.previousScroll === null) {
                this.previousScroll = currentScroll
            }

            this.isScrollingProxy = this.previousScroll < currentScroll;

            this.previousScroll = currentScroll
        },
        whenScrolled (val) {
            this.marginTop = val
                ? -this.$refs.content.clientHeight - 6
                : 0;
        }
    },
    mounted(){
        //console.info(this.$el);
    },
    render (h) {
        this.isExtended = this.extended || !!this.$slots.extension;

        const children = [];
        const data = {
            'class': this.classes,
            on: this.$listeners
        };

        if (this.scrollOffScreen) {
            data.directives = [{
                name: 'scroll',
                value: {
                    callback: this.onScroll,
                    target: this.scrollTarget
                }
            }]
        }

        children.push(h('div', {
            staticClass: 'toolbar-content',
            style: { height: `${this.computedHeight}px` },
            ref: 'content'
        }, this.$slots.default));

        if (this.isExtended) {
            children.push(h('div', {
                staticClass: 'toolbar-extension',
                style: { height: `${this.computedHeight}px` }
            }, this.$slots.extension))
        }

        return h('nav', data, children)
    }
}