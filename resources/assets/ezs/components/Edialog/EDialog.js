
//import Stackable from '../../mixins/stackable'
import Overlayable from "../../mixins/overlayable";
import Dependent from '../../mixins/dependent'
import Portal from '../../mixins/portal'
import { getZIndex } from '../../util/helpers'
export default {
    name:'e-dialog',
    mixins: [ Overlayable,Dependent,Portal ],
    data () {
        return {
            isDependent: false,
            stackClass: 'dialog-container-active',
            stackMinZIndex: 200,
            isActive:!!this.value
        }
    },
    props:{
        cs:String,
        disabled: Boolean,
        persistent: Boolean,        //持久的
        fullscreen: Boolean,
        fullWidth: Boolean,
        closed:Boolean,
        maxWidth: {
            type: [String, Number],
            default: '300px'
        },
        origin: {
            type: String,
            default: 'center center'
        },
        width: {
            type: [String, Number],
            default: 'auto'
        },
        scrollable: Boolean,
        transition: {
            type: [String, Boolean],
            default: 'dialog-transition'
        },
        value:{ require: false}
    },
    computed:{
        classes(){
            return{
                'dialog': true,
                'active': this.isActive,
                'persistent': this.persistent,
                'fullscreen': this.fullscreen,
                'scrollable': this.scrollable,
                [this.cs]:this.cs
            };
        },
        contentClasses () {
            return {
                'dialog-container': true,
                'dialog-container-active': this.isActive
            }
        },
        activeZIndex () {
            if(this.isActive){
                let ortherz = this.getMaxZindex([this.$refs.content]);
                if(ortherz && ortherz >= this.stackMinZIndex){
                    this.stackMinZIndex+=2;
                }
            }
            return this.stackMinZIndex;
        }
    },
    watch:{
        value(val){
            this.isActive=!!val;
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input',val);
            if (val) {
                this.show()
            } else {
                this.removeOverlay();
                this.unbind()
            }
        }
    },
    methods:{
        getMaxZindex(exclude){
            const activeElements = [...document.getElementsByClassName(this.stackClass)];
            //console.info(activeElements);
            const zis=[0];
            if(!exclude){
                for (let index = 0; index < activeElements.length; index++) {
                    zis.push(getZIndex(activeElements[index]))
                }
            }else{
                for (let index = 0; index < activeElements.length; index++) {
                    if (!exclude.includes(activeElements[index])) {
                        zis.push(getZIndex(activeElements[index]))
                    }
                }
            }
            return Math.max(...zis);
        },
        show () {

            !this.fullscreen && !this.hideOverlay && this.genOverlay();
            this.fullscreen && this.hideScroll();
            this.$refs.content.focus();
            this.$listeners.keydown && this.bind();
            //console.info(this.getMaxZIndex());
            if(!this.persistent){
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    document.body.addEventListener('click', this.__bodyHide, true);
                }, 0);
            }
        },
        bind () {
            window.addEventListener('keydown', this.onKeydown)
        },
        unbind () {
            window.removeEventListener('keydown', this.onKeydown)
        },
        onKeydown (e) {
            this.$emit('keydown', e)
        },
        __bodyHide (e) {
            const { clientX: x, clientY: y } = e;
            let b = this.$refs.dialog.getBoundingClientRect();
            // Check if the click was in the element's bounding rect
            let noOut= x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
            if(!noOut && getZIndex(this.$refs.content) >= this.getMaxZindex()){
                clearTimeout(this.timer);
                document.body.removeEventListener('click', this.__bodyHide, true);
                this.isActive=false;
            }
        },
    },
    mounted () {
        this.changeParentEl(this.$el,(this.eTarget || document.getElementById('app') || document.body))
    },
    beforeDestroy () {
        if (typeof window !== 'undefined') this.unbind();
        this.killGhostElement(this.$el)
    },
    render(h){
        //const children = [];
        const data = {
            'class': this.classes,
            ref: 'dialog',
            directives: [
                { name: 'show', value: this.isActive }
            ]
        };

        if (!this.fullscreen) {
            data.style = {
                maxWidth: this.maxWidth === 'none' ? undefined : (isNaN(this.maxWidth) ? this.maxWidth : `${this.maxWidth}px`),
                width: this.width === 'auto' ? undefined : (isNaN(this.width) ? this.width : `${this.width}px`)
            }
        }

        const close=[];
        if(this.closed){
            close.push(h('span', {
                'class': 'closed',
                on: {
                    click: () => {
                        this.$emit('input', false);
                        this.isActive=false
                    }
                }
            }, '×'));
        }

        const dialog = h('transition', {
            props: {
                name: this.transition || '', // If false, show nothing
                origin: this.origin
            }
        }, [h('div', data, [close,this.$slots.default])]);

        return h('div', {
            'class': this.contentClasses,
            domProps: { tabIndex: -1 },
            style: { zIndex:this.activeZIndex },
            ref: 'content',
        }, [dialog]);

    }
}