
export default {
    name:'e-stepper',
    provide () {
        return {
            stepClick: this.stepClick
        }
    },
    data () {
        return {
            inputValue: null,
            isBooted: false,
            steps: [],
            content: [],
            isReverse: false
        }
    },
    props:{
        nonLinear: Boolean,
        altLabels: Boolean,
        vertical: Boolean,
        value: [Number, String]
    },
    computed:{
        classes () {
            return {
                'stepper': true,
                'is-booted': this.isBooted,
                'vertical': this.vertical,
                'alt-labels': this.altLabels,
                'non-linear': this.nonLinear,
            }
        }
    },
    watch: {
        inputValue (val, prev) {
            this.isReverse = Number(val) < Number(prev);
            this.steps.forEach(i => i.toggle(this.inputValue));
            this.content.forEach(i => i.toggle(this.inputValue, this.isReverse));

            this.$emit('input', this.inputValue);
            prev && (this.isBooted = true)
        },
        value () {
            this.getSteps();
            this.$nextTick(() => (this.inputValue = this.value))
        }
    },
    mounted () {
        this.getSteps();

        this.inputValue = this.value || this.steps[0].step || 1
    },
    methods:{
        getSteps () {
            this.steps = [];
            this.content = [];
            this.$children.forEach(i => {
                if (i.$options._componentTag === 'e-step-nav') {
                    this.steps.push(i)
                } else if (i.$options._componentTag === 'e-step-content') {
                    i.isVertical = this.vertical;
                    this.content.push(i)
                }
            })
        },
        stepClick (step) {
            this.getSteps();
            this.$nextTick(() => (this.inputValue = step))
        }
    },
    render(h){
        return h('div', {
            'class': this.classes
        }, this.$slots.default)
    }
}