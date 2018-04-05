
export default {
    name:'e-parallax',
    data () {
        return {
            app:{},
            parallax: null,
            parallaxDist: null,
            percentScrolled: null,
            scrollTop: null,
            windowHeight: null,
            windowBottom: null,
            isBooted: false
        }
    },
    props:{
        alt: String,
        height: {
            type: [String, Number],
            default: 500
        },
        jumbotron: Boolean,
        src: String
    },
    computed:{
        styles () {
            return {
                display: 'block',
                opacity: this.isBooted ? 1 : 0,
                transform: `translate3D(-50%, ${this.jumbotron ? 0 : this.parallax + 'px'},0)`
            }
        },
        normalizedHeight () {
            if (this.jumbotron) {
                return isNaN(this.height) ? this.height : `${this.height}px`
            }

            return Number(this.height.toString().replace(/(^[0-9]*$)/, '$1'))
        },

        imgHeight () {
            return this.objHeight()
        }
    },
    watch: {
        parallax () {
            this.isBooted = true
        }
    },
    beforeDestroy () {
        this.app.removeEventListener('scroll', this.translate, false);
        window.removeEventListener('resize', this.translate, false)
    },
    methods:{
        listeners () {
            this.app.addEventListener('scroll', this.translate, false);
            window.addEventListener('resize', this.translate, false)
        },
        translate () {
            this.calcDimensions();

            this.percentScrolled = (
                (this.windowBottom - this.elOffsetTop) /
                (this.normalizedHeight + this.windowHeight)
            );
            this.parallax = Math.round(this.parallaxDist * this.percentScrolled);
        },

        calcDimensions () {
            const offset = this.$el.getBoundingClientRect();

            this.scrollTop = window.pageYOffset;
            this.parallaxDist = this.imgHeight - this.normalizedHeight;
            this.elOffsetTop = offset.top + this.scrollTop;
            this.windowHeight = window.innerHeight;
            this.windowBottom = this.scrollTop + this.windowHeight
        },
        init () {
            if (!this.$refs.img) return;

            if (this.$refs.img.complete) {
                this.translate();
                this.listeners()
            } else {
                this.$refs.img.addEventListener('load', () => {
                    this.translate();
                    this.listeners()
                }, false)
            }
        },
        objHeight () {
            return this.$refs.img.naturalHeight
        },
        elOffsetTop () {
            return this.$el.offsetTop
        }
    },
    mounted () {
        this.app = document.querySelector('main') || window || console.warn('需要body节点');
        this.init()
    },
    render(h){
        const imgData = {
            staticClass: 'parallax-image',
            'class': {
                'jumbotron': this.jumbotron
            },
            style: this.styles,
            attrs: {
                src: this.src
            },
            ref: 'img'
        };
        if (this.alt) imgData.attrs.alt = this.alt;

        const container = h('div', {
            staticClass: 'parallax-image-container'
        }, [
            h('img', imgData)
        ]);

        const content = h('div', {
            staticClass: 'parallax-content'
        }, this.$slots.default);

        return h('div', {
            staticClass: 'parallax',
            style: {
                height: this.jumbotron
                    ? this.normalizedHeight
                    : `${this.normalizedHeight}px`
            },
            on: this.$listeners
        }, [container, content])
    }
}