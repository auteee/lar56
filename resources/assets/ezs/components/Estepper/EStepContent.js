

export default {
    name:'e-step-content',
    data () {
        return {
            height: 0,
            isActive: false,
            isReverse: false,
            isVertical: false
        }
    },
    props:{
        step: {
            type: [Number, String],
            required: true
        }
    },
    computed:{
        classes () {
            return {
                'step-content': true
            }
        },
        computedTransition () {
            return this.isReverse
                ? 'tab-reverse-transition'
                : 'tab-transition'
        },
        styles () {
            if (!this.isVertical) return {};

            return {
                height: !isNaN(this.height) ? `${this.height}px` : this.height
            }
        },
    },
    watch: {
        isActive (val) {
            if (!this.isVertical) {
                return
            }
            val ? this.enter() :this.leave();
            // if (this.isActive) {
            //     this.enter()
            // } else {
            //     this.leave()
            // }
        }
    },
    mounted () {
        this.$refs.wrapper.addEventListener(
            'transitionend',
            this.onTransition,
            false
        )
    },

    beforeDestroy () {
        this.$refs.wrapper.removeEventListener(
            'transitionend',
            this.onTransition,
            false
        )
    },
    methods:{
        onTransition () {
            if (!this.isActive) return;
            this.height = 'auto'
        },
        enter () {
            let scrollHeight = 0;
            // Render bug with height
            setTimeout(() => {
                scrollHeight = this.$refs.wrapper.scrollHeight
            }, 0);
            this.height = 0;
            // Give the collapsing element time to collapse
            setTimeout(() => (this.height = (scrollHeight || 'auto')), 450)
        },
        leave () {
            this.height = this.$refs.wrapper.clientHeight;
            setTimeout(() => (this.height = 0), 0)
        },
        toggle (step, reverse) {
            this.isActive = step.toString() === this.step.toString();

            this.isReverse = reverse
        }
    },
    render(h){
        const contentData = {
            'class': this.classes
        };
        const wrapperData = {
            staticClass:'step-wrapper',
            style: this.styles,
            ref: 'wrapper'
        };

        if (!this.isVertical) {
            contentData.directives = [{
                name: 'show',
                value: this.isActive
            }]
        }

        const wrapper = h('div', wrapperData, [this.$slots.default]);
        const content = h('div', contentData, [wrapper]);

        return h('transition', {
            props:{
                name:this.computedTransition
            },
            on: this.$listeners
        }, [content])
    }
}