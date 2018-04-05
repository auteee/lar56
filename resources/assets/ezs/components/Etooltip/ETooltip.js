import Stackable from '../../mixins/stackable'
import {
    positionValidator,
    offsetValidator,
    setPosition
} from '../../util/popup'
export default {
    name:'e-tooltip',
    mixins:[Stackable],
    data(){
        return {
            anchorEl:null,   //锚点，目标节点，通过id获取节点 或者父级节点
            timer:null,      //计时器
            isActive:!!this.value,
        }
    }
    ,
    props:{
        isHover:Boolean,
        anchor: {                   //显示位置
            type: Array,
            default: ()=>{ return ['top','middle']},
            validator: positionValidator
        },
        itself: {
            type: Array,
            default: ()=>{ return ['bottom','middle']},
            validator: positionValidator
        },
        offset: {                   //偏移量[x,y]
            type: Array,
            default:()=>{ return [5,5]},
            validator: offsetValidator
        },
        anchorid:String,        //锚点ID
        delay: {                //延时显示时间，毫秒
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        zIndex: {
            type: [Number, String],
            default: null
        },
        maxHeight: String,
        transition: String,
        disabled: Boolean,
        value:{ require: false},
        cs:String
    },
    computed:{
        tipClass(){
            return {
                [this.cs]:this.cs
            }
        },
        computedTransition () {

            if (this.transition) return this.transition;
            let pos=this.anchor[0];

            if (pos==='top') return 'slide-y-reverse-transition';
            if (pos==='right') return 'slide-x-transition';
            if (pos==='bottom') return 'slide-y-transition';
            if (pos==='left') return 'slide-x-reverse-transition';

            return 'scale-transition'
        },
        styles(){
            // let vert = this.anchorOrigin.vertical;
            // let horiz = this.anchorOrigin.horizontal==='middle' ? 'center' : this.anchorOrigin.horizontal;
            // let transform=vert + ' '+ horiz + ' 0px';
            return {
                //'transform-origin':transform,
                zIndex: this.zIndex || this.activeZIndex
            }
        }
    },
    watch:{
        value(val){
            !!val && this.show();
            this.isActive=!!val;
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input',val);
        }
    },

    methods:{
        updatePosition () {
            setPosition({
                el: this.$el,
                anchorEl: this.anchorEl,
                anchorOrigin: this.anchor,
                selfOrigin: this.itself,
                maxHeight: this.maxHeight,
                offset: this.offset
            })
        },
        show () {
            //this.isActive=true;
            document.body.appendChild(this.$el);
            this.updatePosition();
        },
        hide(){
            this.isActive && document.body.removeChild(this.$el);
            this.isActive=false;
        },

        delayShow () {
            this.isActive=true;
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(this.show, this.delay)
        },
        delayHide () {
            clearTimeout(this.timer);
            this.hide()
        }
    },
    mounted () {
        this.$nextTick(()=>{
            this.anchorEl = this.anchorid?document.getElementById(this.anchorid) : this.$el.parentNode;
            //移除节点　显示的时候添加到body　以宿主做位置参考
            this.$el.parentNode.removeChild(this.$el);
            //对宿主添加事件，便于显示　if(ismoble) 没判断是否是手机，以后添加
            if(!this.isHover){
                this.anchorEl.addEventListener('mouseenter', this.delayShow);
                this.anchorEl.addEventListener('focus', this.delayShow);
                this.anchorEl.addEventListener('mouseleave', this.delayHide);
                this.anchorEl.addEventListener('blur', this.delayHide);
            }
            this.value && this.show();
        });
    },
    beforeDestroy () {
        this.timer && clearTimeout(this.timer);
        //销毁之前，移除事件
        if(!this.isHover){
            this.anchorEl.removeEventListener('mouseenter', this.delayShow);
            this.anchorEl.removeEventListener('focus', this.delayShow);
            this.anchorEl.removeEventListener('mouseleave', this.delayHide);
            this.anchorEl.removeEventListener('blur', this.delayHide)
        }
    },
    render (h) {

        const tooltip = h(this.tag, {
            staticClass: 'tooltip',
            'class': this.tipClass,
            style: this.styles,
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            ref:'tooltip'
        }, this.$slots.default);

        return h('transition',{props:{name: this.computedTransition}},[tooltip]);
    }
}