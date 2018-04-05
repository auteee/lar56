import EBtn from "../Ebtn";
import EIcon from "../Eicon";
import Touch from '../../directives/touch'
export default {
    name:'e-carousel',
    directives: { Touch },
    provide () {
        return {
            register: this.register,
            unregister: this.unregister
        }
    },
    data(){
        return{
            inputValue: null,
            items: [],
            slideTimeout: null,
            reverse: false,
            //
            percentage:null,
            percentTime:null,
            time:10
        }
    },
    props:{
        cycle: {
            type: Boolean,
            default: true
        },
        delimiterIcon: {
            type: String,
            default: 'fa-circle'
        },
        hideControls: Boolean,
        hideDelimiters: Boolean,
        interval: {
            type: [Number, String],
            default: 6000,
            validator: value => value > 0
        },
        leftControlIcon: {
            type: [Boolean, String],
            default: 'fa-arrow-left'
        },
        rightControlIcon: {
            type: [Boolean, String],
            default: 'fa-arrow-right'
        },
        alwayShow:{            //leftControlIcon,rightControlIcon 是否一直显示
            type:Boolean,
            default:false
        },
        height:{
            type:[Number,String],
            default:500
        },
        value: Number
    },
    computed:{
        carouselHeight(){
            return isNaN(this.height) ? this.height : `${this.height}px`
        }
    },
    watch:{
        items () {
            if (this.inputValue >= this.items.length) {
                this.inputValue = this.items.length - 1
            }
        },
        inputValue () {
            // Evaluate items when inputValue changes to account for dynamic changing of children
            this.items.forEach(i => {
                i.isShow(this.items[this.inputValue].uid, this.reverse)
            });
            this.$emit('input', this.inputValue);
            this.restartTimeout()
        },
        value (val) {
            this.inputValue = val
        },
        interval () {
            this.restartTimeout()
        },
        cycle (val) {
            if (val) {
                this.restartTimeout()
            } else {
                clearTimeout(this.slideTimeout);
                this.slideTimeout = null
            }
        },

    },
    mounted () {
        this.init()
    },
    methods:{
        init () {
            this.inputValue = this.value || 0
        },
        select (index) {
            this.reverse = index < this.inputValue;
            this.inputValue = index
        },
        //计时
        restartTimeout () {
            this.slideTimeout && clearInterval(this.slideTimeout);

            //this.slideTimeout = window.setInterval(() => this.next(), this.interval > 0 ? this.interval : 6000);
            //自动播放和时间条同时使用? 在重新计时之前，要清除原来的计时 JS中的定时器是有返回值的:->返回值是一个数字,代表当前是第几个定时器
            this.percentTime=0;
            this.slideTimeout=window.setInterval(()=>this.timebar(),10);
            // this.slideTimeout && clearTimeout(this.slideTimeout);
            // this.slideTimeout = null;
            // const raf = requestAnimationFrame || setTimeout;
            // raf(this.startTimeout)
        },
        timebar(){
            this.percentTime += 1/this.time;
            //console.info(this.percentTime);
            this.percentage = this.percentTime + "%";
            if(this.percentTime >= 100){
                this.next()
            }
        },
        startTimeout () {
            if (!this.cycle) return;

            this.slideTimeout = setTimeout(() => this.next(), this.interval > 0 ? this.interval : 6000);

        },
        //注入item
        register (uid, isShow) {
            this.items.push({ uid, isShow })
        },
        unregister (uid) {
            this.items = this.items.filter(i => i.uid !== uid)
        },
        //上一个，下一个
        next () {
            this.reverse = false;
            this.inputValue = (this.inputValue + 1) % this.items.length
        },
        prev () {
            this.reverse = true;
            this.inputValue = (this.inputValue + this.items.length - 1) % this.items.length
        },
        //创建元素
        genIcon (direction, icon, fn) {
            if (!icon) return null;

            return this.$createElement('div', {
                staticClass: `carousel-${direction}`,
                'class':this.alwayShow?'is-show':''
            }, [
                this.$createElement(EBtn, {
                    props: {
                        icon: true,
                    },
                    on: { click: fn }
                }, [this.$createElement(EIcon, icon)])
            ])
        },
        genDelimiters () {
            return this.$createElement('div', {
                staticClass: 'carousel-controls'
            }, this.genItems())
        },
        genItems () {
            return this.items.map((item, index) => {
                return this.$createElement(EBtn, {
                    class: {
                        'carousel-controls-item': true,
                        'active': index === this.inputValue
                    },
                    props: {
                        icon: true,
                    },
                    key: index,
                    on: { click: this.select.bind(this, index) }
                }, [this.$createElement(EIcon, this.delimiterIcon)])
            })
        },
        genTimebar(){
            return this.$createElement('hr',{
                staticClass:'carousel-timer',
                'class':'',
                style:{
                    width:this.percentage
                }
            })
        }
    },
    render (h) {

        return h('div', {
            staticClass: 'carousel',
            style: {
                height: this.carouselHeight
            },
            directives: [{
                name: 'touch',
                value: {
                    left: this.next,
                    right: this.prev
                }
            }]
        }, [
            this.genTimebar(),
            this.hideControls ? null : this.genIcon('left', this.leftControlIcon, this.prev),
            this.hideControls ? null : this.genIcon('right', this.rightControlIcon, this.next),
            this.hideDelimiters ? null : this.genDelimiters(),
            this.$slots.default
        ])
    }
}