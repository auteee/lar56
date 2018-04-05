
import Overlayable from '../../mixins/overlayable'

import Resize from '../../directives/resize'
import ClickOutside from '../../directives/click-outside'

export default {
    name:'e-app-aside',
    mixins: [ Overlayable],
    directives:{
        Resize,
        ClickOutside
    },
    data(){
      return{
          isActive: this.value,
          isMobile: false,
      }
    },
    props:{
        disableResizeWatcher: Boolean,      //关闭窗口变化,默认是开启的
        mobileBreakPoint: {
            type: Number,
            default: 1264
        },
        width: {
            type: [Number, String],
            default: 300
        },
        right:Boolean,
        clipped:Boolean,
        isOpened:Boolean,                   //固定, 默认关闭,永久显示或永久不显示 一但开启级别最高  level=0
        floated:Boolean,                  //是否浮动
        value: { required: false }
    },
    computed:{
        calculatedHeight () {
            return this.height || '100%'
        },
        calculatedWidth () {
            return this.miniVariant
                ? this.miniVariantWidth
                : this.width
        },
        marginTop () {
            let marginTop = this.$ezs.application.bar;

            marginTop += this.clipped
                ? this.$ezs.application.top
                : 0;

            return marginTop
        },
        classes(){
            const clasees={
                'app-aside-drawer':true,
                'right':this.right,
                'clipped':this.clipped,
                'closed': !this.isActive,
                'isOpened':this.isOpened,
                'floated':this.floated,
                'opened':this.isActive,
            };
            return clasees;
        },

        styles () {
            return {
                height: this.calculatedHeight,
                width: `${this.calculatedWidth}px`,
                marginTop: `${this.marginTop}px`,
                //maxHeight: `calc(100% - ${this.maxHeight}px)`,
            }
        },
        showOverlay () {
            if(this.isOpened){

            }else if(this.floated){
                return this.isActive;
            }else{

            }
        },
    },
    watch:{
        isActive (val) {
            this.$emit('input', val);
            this.showOverlay &&
            val &&
            this.genOverlay() ||
            this.removeOverlay()
            //console.info(this.$el)
             //this.$el.scrollTop = 0
        },
        isOpened (val) {
            this.$emit('input', val)
        },
        value (val) {
            if (this.isOpened) return;
            if (val !== this.isActive) this.isActive = val
        }
    },
    mounted(){
        //this.$ezs.load(this.init)
    },
    created(){
        if(this.isOpened){
            this.isActive=true;
            if(this.right){
                this.$ezs.application.right = this.calculatedWidth
            }else{
                this.$ezs.application.left = this.calculatedWidth
            }

        } else if(this.floated){
            this.isActive=false;
            this.$ezs.application.right = 0;
            this.$ezs.application.left = 0;
        }
    },
    methods:{
        updateApplication(){
            const width = !this.isActive
                        || this.$ezs.breakpoint.width < this.mobileBreakPoint
                    ? 0
                    : this.calculatedWidth;
            if(this.right){
                this.$ezs.application.right=width
            }else{
                this.$ezs.application.left = width
            }
        },
        genDirectives () {
            const directives = [
                {
                    name: 'resize',
                    value: this.onResize
                }
            ];
            if(this.floated || this.isMobile) {
                directives.push({
                    name: 'click-outside',
                    value: false
                })
            }
            // !this.touchless && directives.push({
            //     name: 'touch',
            //     value: {
            //         parent: true,
            //         left: this.swipeLeft,
            //         right: this.swipeRight
            //     }
            // })

            return directives
        },
        checkIfMobile () {
            this.isMobile = window.innerWidth < parseInt(this.mobileBreakPoint)
        },
        onResize () {           //窗口变化
            if (this.disableResizeWatcher || this.isOpened ||  this.floated)
                return ;
            this.checkIfMobile();
            this.isActive =!this.isMobile
        },
    },
    render(h){

        if(!this.isOpened && !this.floated){
            this.updateApplication()
        }

        const data = {
            'class': this.classes,
            style: this.styles,
            directives: this.genDirectives(),
            on: {
                //click: () => this.$emit('update:miniVariant', false)
            }
        };

        return h('aside', data, this.$slots.default,)
    }
}