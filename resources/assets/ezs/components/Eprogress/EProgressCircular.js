
export default {
    name:'e-progress-circular',
    props:{
        cs:String,
        button: Boolean,
        indeterminate: Boolean,     //不定的
        fill: {
            type: String,
            default () { return this.indeterminate ? 'none' : 'transparent' }
        },
        rotate: {
            type: Number,
            default: 0
        },
        size: {
            type: [Number, String],
            default: 32
        },
        width: {
            type: Number,
            default: 4
        },
        value: {
            type: Number,
            default: 0
        }
    },
    computed:{
        classes(){
            let classes={
                'progress-circular': true,
                'indeterminate': this.indeterminate,
                'button': this.button,
                [this.cs]:this.cs
            };
            return classes;
        },
        calculatedSize () {
            let size = Number(this.size);
            if (this.button) size += 8;

            return size
        },

        circumference () {
            return 2 * Math.PI * this.radius
        },
        cxy () {
            return this.indeterminate && !this.button ? 50 : this.calculatedSize / 2
        },

        normalizedValue () {
            if (this.value < 0) {
                return 0
            }

            if (this.value > 100) {
                return 100
            }

            return this.value
        },

        radius () {         //半径
            return this.indeterminate &&
            !this.button
                ? 20
                : (this.calculatedSize - this.width) / 2
        },

        strokeDashArray () {
            return Math.round(this.circumference * 1000) / 1000
        },

        strokeDashOffset () {
            return ((100 - this.normalizedValue) / 100) * this.circumference + 'px'
        },

        styles () {
            return {
                height: `${this.calculatedSize}px`,
                width: `${this.calculatedSize}px`
            }
        },

        svgSize () {
            return this.indeterminate ? false : this.calculatedSize
        },

        svgStyles () {
            return {
                transform: `rotate(${this.rotate}deg)`
            }
        },

        viewBox () {
            return this.indeterminate ? '25 25 50 50' : false
        }
    },
    methods:{
        genCircle (h, name, offset) {
            return h('circle', {
                class: `progress-circular-${name}`,
                attrs: {
                    fill: this.fill,
                    cx: this.cxy,
                    cy: this.cxy,
                    r: this.radius,
                    'stroke-width': this.width,
                    'stroke-dasharray': this.strokeDashArray,
                    'stroke-dashoffset': offset
                }
            })
        },
        genSvg (h) {
            const children = [
                !this.indeterminate && this.genCircle(h, 'underlay', 0),
                this.genCircle(h, 'overlay', this.strokeDashOffset)
            ];

            return h('svg', {
                style: this.svgStyles,
                attrs: {
                    xmlns: 'http://www.w3.org/2000/svg',
                    height: this.svgSize,
                    width: this.svgSize,
                    viewBox: this.viewBox
                }
            }, children)
        }
    },
    render (h) {
        const info = h('div', { class: 'progress-circular-info' }, [this.$slots.default]);
        const svg = this.genSvg(h);

        return h('div', {
            class: this.classes,
            style: this.styles,
            on: this.$listeners
        }, [svg, info])
    }
}