//import Toggleable from '../../mixins/toggleable'

import Menuable from './mixins/menu.js'
import Anchor from './mixins/menu-anchor'
import Position from './mixins/menu-position'
import Delayable from './mixins/delayable'

import ClickOutside from '../../directives/click-outside'


export default {
    name:'e-menu',
    mixins: [ Anchor,Menuable,Position,Delayable ],
    directives: { ClickOutside },
    data () {
        return {
            defaultOffset: 8,
            maxHeightAutoDefault: '200px',
            startIndex: 3,
            stopIndex: 0,
            resizeTimeout: null,
            isActive:!!this.value,
            showMenuList:false,  //显示菜单
        }
    },
    props: {
        cs:String,
        auto: Boolean,
        disabled: Boolean,
        blocked: Boolean,         //display:block 或inline-block 控制menu元素本身
        offsetX: Boolean,         //控制menu-list
        offsetY: Boolean,
        origin: {
            type: String,
            default: 'top left'
        },
        closeOnClick: {
            type: Boolean,
            default: true
        },
        closeOnContentClick: {
            type: Boolean,
            default: true
        },
        openOnClick: {              //默认鼠标点击打开菜单
            type: Boolean,
            default: true
        },
        openOnHover: Boolean,       //鼠标经过打开菜单
        transition: {
            type: [Boolean, String],
            default: 'menu-transition'
        },
        value:{ require:false }
    },
    computed:{
        classes(){
            return{
                'menu':true,
                'disabled': this.disabled,
                [this.cs]:this.cs
            };
        },
        calculatedLeft () {
            let left = this.calcLeft;
            if (this.auto) left = this.calcLeftAuto;
            return `${this.calcXOverflow(left())}px`
        },
        calculatedMaxHeight () {
            return this.auto
                ? '200px'
                : isNaN(this.maxHeight)
                    ? this.maxHeight
                    : `${this.maxHeight}px`
        },
        calculatedMaxWidth () {
            return isNaN(this.maxWidth)
                ? this.maxWidth
                : `${this.maxWidth}px`
        },
        calculatedMinWidth () {
            if (this.minWidth) {
                return isNaN(this.minWidth)
                    ? this.minWidth
                    : `${this.minWidth}px`
            }

            const minWidth = (
                this.dimensions.anchor.width +
                this.nudgeWidth +
                (this.auto ? 16 : 0)
            );

            const calculatedMaxWidth = isNaN(parseInt(this.calculatedMaxWidth))
                ? minWidth
                : parseInt(this.calculatedMaxWidth);

            return `${Math.min(
                calculatedMaxWidth,
                minWidth
            )}px`
        },
        calculatedTop () {
            const top = this.auto ? this.calcTopAuto : this.calcTop;

            return `${this.calcYOverflow(top())}px`
        },
        styles () {
            return {
                maxHeight: this.calculatedMaxHeight,
                minWidth: this.calculatedMinWidth,
                maxWidth: this.calculatedMaxWidth,
                top: this.calculatedTop,
                left: this.calculatedLeft,
                transformOrigin: this.origin,
                zIndex: this.zIndex || this.activeZIndex
            }
        }
    },
    watch: {
        anchor (newAnchor, oldAnchor) {
            this.removeActivatorEvents(oldAnchor);
            this.addActivatorEvents(newAnchor)
        },
        value(val){
          this.isActive=!!val;
        },
        isActive(val){
            this.value && this.$emit('input',val);
            val && this.openMenuList() || this.closeMenuList();
        }
    },

    methods:{
        openMenuList () {
            this.checkForWindow();
            if (!this.hasWindow) return;
            this.updateDimensions();
            // Start the transition
            requestAnimationFrame(this.startTransition);
            // Once transitioning, calculate scroll position
            setTimeout(this.calculateScroll, 50)
        },
        startTransition () {
            requestAnimationFrame(() => (this.showMenuList = true))
        },
        closeMenuList(){
            this.showMenuList = false;
        },
        genAnchor () {      //anchor锚点菜单显示挂载位置
            if (!this.$slots.anchor) return null;
            const options = {
                staticClass: 'menu-anchor',
                'class': {
                    'active': this.showMenuList || this.isActive
                },
                ref: 'anchor',
                on: {}
            };
            //默认鼠标点击打开菜单，设置openOnHover 鼠标经过时打开菜单
            if (this.openOnHover) {
                options.on['mouseenter'] = this.mouseEnterHandler;
                options.on['mouseleave'] = this.mouseLeaveHandler
            } else if (this.openOnClick) {
                options.on['click'] = this.activatorClickHandler
            }

            return this.$createElement('div', options, this.$slots.anchor)
        },
        closeConditional () {
            return this.isActive && this.closeOnClick
        },
        genDirectives () {
            // Do not add click outside for hover menu
            const directives = !this.openOnHover ? [{
                name: 'click-outside',
                value: () => (this.isActive = false),
                args: {
                    closeConditional: this.closeConditional,
                    //include: () => [this.$el, ...this.getOpenDependentElements()]
                }
            }] : [];

            directives.push({
                name: 'show',
                value: this.showMenuList
            });
            return directives
        },
        genMenuList () {
            const options = {
                'class': [
                    'menu-list',
                    { 'menu-list-show': this.isActive }
                ],
                style: this.styles,
                directives: this.genDirectives(),
                ref: 'content',
                on: {
                    click: e => {
                        e.stopPropagation();
                        if (e.target.getAttribute('disabled')) return;
                        if (this.closeOnContentClick) this.isActive = false
                    }
                }
            };
            !this.disabled && this.openOnHover && (options.on.mouseenter = this.mouseEnterHandler);
            this.openOnHover && (options.on.mouseleave = this.mouseLeaveHandler);
            return this.$createElement('div', options, this.$slots.default)
        },
        genTransition () {
            if (!this.transition) return this.genMenuList();

            return this.$createElement('transition', {
                props: {
                    name: this.transition
                }
            }, [this.genMenuList()])
        },
        moveNode(){
            if (this._isDestroyed) return;
            const app = document.querySelector('[data-app]');
            if (!app) {
                return console.warn('Application is missing <e-app> component.')
            }
            // If child has already been removed, bail
            if (!this.$refs.content) return;

            app.insertBefore(
                this.$refs.content,
                app.firstChild
            )
        }
    },
    mounted () {
        this.moveNode()
    },
    beforeDestroy () {
        if (!this.$refs.content) return;

        // IE11 Fix
        try {
            this.$refs.content.parentNode.removeChild(this.$refs.content)
        } catch (e) {}
    },
    render(h){
        const data = {
            class: this.classes,
            style: {
                display: this.blocked ? 'block' : 'inline-block'
            },
            // directives: [{
            //     name: 'resize',
            //     value: {
            //         debounce: 500,
            //         value: this.onResize
            //     }
            // }],
            // on: {
            //     keydown: this.changeListIndex
            // }
        };
        //console.info(this.$refs.hhhh);
        return h('div', data, [
            this.genAnchor(),
            this.genTransition()
        ])

        //return h('div', data,[this.genActivator(),this.genTransition()]);

    }
}