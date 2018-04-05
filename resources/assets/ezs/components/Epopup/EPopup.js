import {offsetValidator, parsePosition, positionValidator} from "../../util/popup";

import Popup from './mixin/popup'

import ClickOutside from '../../directives/click-outside'

export default {
    mixins:[Popup],
    directives: { ClickOutside },
    data () {
        return {
            isActive: !!this.value,
            hasJustFocused: false,
            resizeTimeout: null
        }
    },
    props:{
        anchor: {                   //显示位置
            type: String,
            default: 'top middle',
            validator: positionValidator
        },
        self: {
            type: String,          //
            default: 'bottom middle',
            validator: positionValidator
        },
        offset: {                   //偏移量[x,y]
            type: Array,
            validator: offsetValidator
        },
        anchorid:String,        //锚点ID
        delay: {                //延时显示时间，毫秒
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'div'
        },
        zIndex: {
            type: [Number, String],
            default: null
        },
        maxHeight: String,
        transition: String,
        disabled: Boolean,
        value:{ require: false},
        ///打开方式
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
    },
    computed: {
        anchorOrigin () {
            return parsePosition(this.anchor)
        },
        selfOrigin () {
            return parsePosition(this.self)
        },
    },
    watch: {
        value (val) {
            this.isActive = !!val
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input', val)
        },
        isContentActive (val) {
            this.hasJustFocused = val
        }
    },
    method:{

        /////event
        anchorClickHandler (e) {
            if (this.disabled) return;
            if (this.openOnClick && !this.isActive) {
                this.getActivator().focus();
                this.isActive = true;
                this.absoluteX = e.clientX;
                this.absoluteY = e.clientY
            } else if (this.closeOnClick && this.isActive) {
                this.getActivator().blur();
                this.isActive = false
            }
        },
        mouseEnterHandler (e) {
            this.runDelay('open', () => {
                if (this.hasJustFocused) return;

                this.hasJustFocused = true;
                this.isActive = true
            })
        },
        mouseLeaveHandler (e) {
            // Prevent accidental re-activation
            this.runDelay('close', () => {
                if (this.$refs.content.contains(e.relatedTarget)) return;

                requestAnimationFrame(() => {
                    this.isActive = false;
                    this.callDeactivate()
                })
            })
        },
        addActivatorEvents (activator = null) {
            if (!activator) return;
            activator.addEventListener('click', this.anchorClickHandler)
        },
        removeActivatorEvents (activator = null) {
            if (!activator) return;
            activator.removeEventListener('click', this.anchorClickHandler)
        },
        ////gen
        genAnchor () {
            if (!this.$slots.anchor) return null;

            const options = {
                staticClass: 'popup-anchor',
                'class': {
                    'active': this.hasJustFocused || this.isActive
                },
                ref: 'anchor-el',
                on: {}
            };

            if (this.openOnHover) {
                options.on['mouseenter'] = this.mouseEnterHandler;
                options.on['mouseleave'] = this.mouseLeaveHandler
            } else if (this.openOnClick) {
                options.on['click'] = this.anchorClickHandler
            }

            return this.$createElement('div', options, this.$slots.activator)
        },
        genTransition () {
            if (!this.transition) return this.genContent();

            return this.$createElement('transition', {
                props: {
                    name: this.transition
                }
            }, [this.genContent()])
        },
        genContent () {
            const options = {
                'class': [
                    (`popup-content ${this.contentClass}`).trim(),
                    { 'active': this.isActive }
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
        genDirectives () {
            // Do not add click outside for hover menu
            const directives = !this.openOnHover ? [{
                name: 'click-outside',
                value: {
                    callback: () => this.closeOnClick,
                    //include: () => [this.$el, ...this.getOpenDependentElements()]
                }
            }] : [];

            directives.push({
                name: 'show',
                value: this.isContentActive
            });

            return directives
        },
    },
    render (h) {
        const data = {
            staticClass: 'popup',
            class: {
                'disabled': this.disabled
            }
        };

        return h('div', data, [
            this.genAnchor(),
            this.genTransition()
        ])
    }
}