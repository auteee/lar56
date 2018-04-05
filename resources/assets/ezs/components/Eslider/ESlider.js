import {addOnceEventListener} from "../../util/helpers";

export default {
    name:'e-slider',
    data () {
        return {
            app: {},
            isActive: false,
            keyPressed: 0
        }
    },
    props:{
        cs:String,
        label: String,
        prependIcon: String,        //前置icon
        prependIconCb:Function,     //前置icon 事件
        appendIcon:String,
        appendIconCb:Function,
        ticks:Boolean,
        tabindex: {
            default: 0
        },
        min: {
            type: [Number, String],
            default: 0
        },
        max: {
            type: [Number, String],
            default: 100
        },
        step: {
            type: [Number, String],
            default: 1
        },
        handlecs: String,
        disabled: Boolean,
        handleLabel: Boolean,
        value:{require:false}
    },
    computed:{
        classes(){
            return{
                'disabled':this.disabled,
                'active':this.isActive,
                [this.cs]:this.cs
            };
        },
        handleClasses(){
            return {
                'label': this.handleLabel,
                [this.handlecs]:this.handlecs && this.inputWidth > 0
            };
        },
        inputValue: {
            get () {
                return this.value
            },
            set (val) {
                const { min, max } = this;
                val = Math.min(Math.max(val, min), max);
                // Round value to ensure the entire slider range can be selected with step
                const value = this.roundValue(val);

                if (value !== this.value) {
                    this.$emit('input', value)
                }
            }
        },
        //track
        trackFillStyles () {
            return {
                transition: this.keyPressed >= 2 ? 'none' : '',
                width: `calc(${this.inputWidth}% - ${this.trackPadding}px)`
            }
        },
        trackPadding () {
            if (this.handleLabel && this.isActive) return 0;

            return 6 + (this.isActive && !this.disabled ? 3 : 0)
        },
        inputWidth () {
            return (this.roundValue(this.inputValue) - this.min) / (this.max - this.min) * 100
        },
        stepNumeric () {
            return this.step > 0 ? parseFloat(this.step) : 0
        },
        handleStyles () {
            return {
                transition: this.keyPressed >= 2 ? 'none' : '',
                left: `${this.inputWidth}%`
            }
        },
        //ticks
        numTicks () {
            return Math.ceil((this.max - this.min) / this.stepNumeric)
        },
        tickContainerStyles () {
            return { transform: `translate(0, -50%)` }
        },
    },
    watch: {
        min (val) {
            val > this.inputValue && this.$emit('input', parseFloat(val))
        },
        max (val) {
            val < this.inputValue && this.$emit('input', parseFloat(val))
        },
        value (val) {
            this.inputValue = parseFloat(val)
        }
    },
    mounted () {
        //this.inputValue = this.value

        // Without a v-app, iOS does not work with body selectors
        this.app = document.querySelector('body') ||
            console.warn('需要body节点')
    },
    methods:{
        onMouseDown (e) {
            if(this.disabled) return;
            this.keyPressed = 2;
            const options = { passive: true };
            this.isActive = true;
            if ('touches' in e) {
                this.app.addEventListener('touchmove', this.onMouseMove, options);
                addOnceEventListener( this.app, 'touchend', this.onMouseUp)
            } else {
                this.app.addEventListener('mousemove', this.onMouseMove, options);
                addOnceEventListener( this.app, 'mouseup', this.onMouseUp)
            }
        },
        onMouseUp () {
            this.keyPressed = 0;
            const options = { passive: true };
            this.isActive = false;
            this.app.removeEventListener('touchmove', this.onMouseMove, options);
            this.app.removeEventListener('mousemove', this.onMouseMove, options)
        },
        onMouseMove (e) {
            if(this.disabled) return;
            const {
                left: offsetLeft,
                width: trackWidth
            } = this.$refs.slider.getBoundingClientRect();
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            const left = Math.min(Math.max((clientX - offsetLeft) / trackWidth, 0), 1);

            if (clientX >= offsetLeft - 8 && clientX <= offsetLeft + trackWidth + 8) {
                this.inputValue = parseFloat(this.min) + left * (this.max - this.min)
            }
        },
        sliderMove (e) {
            if (!this.isActive) {
                this.onMouseMove(e)
            }
        },
        onKeyDown (e) {
            if (this.disabled || ![33, 34, 35, 36, 37, 39].includes(e.keyCode)) return;
            e.preventDefault();
            const step = this.stepNumeric || 1;
            const steps = (this.max - this.min) / step;
            if (e.keyCode === 37 || e.keyCode === 39) {
                // Left/right
                this.keyPressed += 1;
                const direction = e.keyCode === 37 ? -1 : 1;
                const multiplier = e.shiftKey ? 3 : (e.ctrlKey ? 2 : 1);

                this.inputValue = this.inputValue + direction * step * multiplier
            } else if (e.keyCode === 36) {
                // Home
                this.inputValue = parseFloat(this.min)
            } else if (e.keyCode === 35) {
                // End
                this.inputValue = parseFloat(this.max)
            } else if (e.keyCode === 33 || e.keyCode === 34) {
                // Page up/down
                const direction = e.keyCode === 34 ? -1 : 1;
                this.inputValue = this.inputValue - direction * step * (steps > 100 ? steps / 10 : 10)
            }
        },
        onKeyUp () {
            this.keyPressed = 0
        },
        roundValue (value) {
            if (!this.stepNumeric) {
                return value
            }
            // Format input value using the same number
            // of decimals places as in the step prop
            const trimmedStep = this.step.toString().trim();
            const decimals = trimmedStep.indexOf('.') > -1 ? (trimmedStep.length - trimmedStep.indexOf('.') - 1) : 0;
            return 1 * (Math.round(value / this.stepNumeric) * this.stepNumeric).toFixed(decimals)
        },

        genHandleLabel (h) {
            return h('transition', {
                props: { name:'scale-transition',origin: 'bottom center' }
            }, [
                h('div', {
                    staticClass: 'slider-handle-label',
                    'class':this.inputWidth>0?this.handlecs:'',
                    directives: [
                        {
                            name: 'show',
                            value: this.isActive
                        }
                    ]
                }, [
                    h('span', {}, this.inputValue)
                ])
            ])
        },
        genHandleContainer (h) {
            const children = [];
            children.push(h('div', {
                staticClass: 'slider-handle',
                'class':this.handleClasses
            }));

            this.handleLabel && children.push(this.genHandleLabel(h));
            return h('div', {
                staticClass: 'slider-handle-container',
                style: this.handleStyles,
                on: {
                    touchstart: this.onMouseDown,
                    mousedown: this.onMouseDown
                },
                ref: 'thumb'
            }, children)
        },
        genIcon (type,defaultCallback = null) {
            let pre=false,app=false;
            if(type==='prependIcon')
                pre=true;
            else if(type==='appendIcon')
                app=true;
            else
                return;
            const icon=this[`${type}`];
            const callback= this.disabled?null:defaultCallback;
            return this.$createElement('e-icon', {
                'class': {
                    'prepend-icon': pre,
                    'append-icon': app,
                },
                on: {
                    click: e => {
                        if (!callback) return;
                        e.stopPropagation();
                        callback()
                    }
                }
            }, icon)
        },
        genTicks (h) {
            const ticks = [];

            for (let i = 0; i < (this.numTicks+1); i++) {
                ticks.push(h('div', {
                    staticClass: 'slider-ticks',
                    key: `ticks${i}`,
                    style: {
                        left: `${i * 100 * this.step / (this.max - this.min)}%`
                    }
                }))
            }
            return ticks;
        },
    },
    render(h){
        const children=[],slder=[];
        this.label && children.push(h('label',{},this.label));
        this.prependIcon && children.unshift(this.genIcon('prependIcon',this.prependIconCb));

        slder.push(h('div', { staticClass: 'slider-track' }));
        this.step && this.ticks && slder.push(this.genTicks(h));
        slder.push(h('div', {
            staticClass: 'slider-track fill',
            style: this.trackFillStyles
        }));
        slder.push(this.genHandleContainer(h));
        const sliders = h('div', {
            staticClass: 'slider',
            attrs: {
                role:"slider",
                tabindex: this.disabled ? -1 : this.tabindex
            },
            on: Object.assign({}, {
                mouseup: this.sliderMove,
                keydown: this.onKeyDown,
                keyup: this.onKeyUp
            }, this.$listeners),
            ref:'slider'
        }, slder);

        children.push(sliders);
        this.appendIcon && children.push(this.genIcon('appendIcon',this.appendIconCb));

        return h('div',{
            staticClass:'slider-container',
            'class':this.classes,
        },children)

    }
}