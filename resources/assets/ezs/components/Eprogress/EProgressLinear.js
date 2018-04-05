
function width (val) {
    return { width: `${val}%` }
}
function between (v, min, max) {
    if (max <= min) {
        return min
    }
    return Math.min(max, Math.max(min, v))
}
export default {
    name:'e-progress-linear',
    props: {
        percentage: {
            type: Number,
            default: 0
        },
        cs: String,
        stripe: Boolean,            //条纹
        animate: Boolean,
        indeterminate: Boolean,
        buffer: Number,
        height: {
            type: [Number, String],
            default: 7
        },
    },
    computed: {
        //本身，填充，轨道
        fill () {
            return between(this.percentage, 0, 100)
        },
        bufferModel () {
            return between(this.buffer || 0, 0, 100 - this.fill)
        },
        bufferStyle () {
            return width(this.bufferModel)
        },
        trackStyle () {
            return width(this.buffer ? 100 - this.buffer : 100)
        },
        fillStyle () {
            return width(this.fill)
        },
        fillClass () {
            return {
                'animate': this.animate,
                'stripe': this.stripe,
                'indeterminate': this.indeterminate
            }
        },
        styles () {
            return { height: this.height }
        },
        classes () {
            return {
                [this.cs]:this.cs
            };
        },
    },
    render(h){
        const children=[];

        this.buffer && !this.indeterminate && children.push(h('div',{staticClass: 'progress-linear-buffer',style: this.bufferStyle}));

        children.push(h('div',{staticClass: 'progress-linear-track',style: this.trackStyle}));

        children.push(h('div',{staticClass: 'progress-linear-fill',style: this.fillStyle,'class': this.fillClass}));


        return h('div', {
            staticClass: 'progress-linear',
            style: this.styles,
            'class': this.classes
        }, children)

    }
}