import Positionable from './positionable'

import Stackable from './stackable'

const dimensions = {
    anchor: {                   //锚点位置
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    popself: {                  //弹出层自身
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    hasWindow: false
};
export default {
    mixins: [Positionable, Stackable],
    data: () => ({
        absoluteX: 0,
        absoluteY: 0,
        dimensions: Object.assign({}, dimensions),
        pageYOffset: 0,
        stackClass: 'menu-list-show',
        stackMinZIndex: 6
    }),
    props: {
        offsetX: Boolean,         //控制menu-list
        offsetY: Boolean,
        anchor: {
            default: null,
            validate: val => {
                return ['string', 'object'].includes(typeof val)
            }
        },
        allowOverflow: Boolean,
        maxWidth: {
            type: [Number, String],
            default: 'auto'
        },
        maxHeight: {
            type: [Number, String],
            default: '200px'
        },
        minWidth: [Number, String],
        nudgeBottom: {
            type: Number,
            default: 0
        },
        nudgeLeft: {
            type: Number,
            default: 0
        },
        nudgeRight: {
            type: Number,
            default: 0
        },
        nudgeTop: {
            type: Number,
            default: 0
        },
        nudgeWidth: {
            type: Number,
            default: 0
        },
        offsetOverflow: Boolean,
        positionX: {
            type: Number,
            default: null
        },
        positionY: {
            type: Number,
            default: null
        },
        zIndex: {
            type: [Number, String],
            default: null
        }
    },
    computed: {
        hasAnchor () {
            return !!this.$slots.anchor || this.anchor || !!this.$refs.anchor
        }
    },
    methods:{
        updateDimensions () {
            const dimensions = {};
            // Activator should already be shown
            //if(!!this.$slots.anchor || this.anchor || this.ab)
            dimensions.anchor = !this.hasAnchor || this.absolute
                ? this.absolutePosition()
                : this.measure(this.getAnchor());
            // Display and hide to get dimensions
            this.sneakPeek(() => {
                dimensions.popself = this.measure(this.$refs.popself);

                this.dimensions = dimensions
            })
        },
        absolutePosition () {
            return {
                offsetTop: 0,
                scrollHeight: 0,
                top: this.positionY || this.absoluteY,
                bottom: this.positionY || this.absoluteY,
                left: this.positionX || this.absoluteX,
                right: this.positionX || this.absoluteX,
                height: 0,
                width: 0
            }
        },
        sneakPeek (cb) {
            requestAnimationFrame(() => {
                const el = this.$refs.popself;

                if (!el || el.style.display !== 'none') return cb();

                el.style.display = 'inline-block';
                cb();
                el.style.display = 'none'
            })
        },
        measure (el, selector) {
            el = selector ? el.querySelector(selector) : el;

            if (!el) return null;

            const { top, bottom, left, right, height, width} = el.getBoundingClientRect();

            return {
                offsetTop: el.offsetTop,
                scrollHeight: el.scrollHeight,
                top, bottom, left, right, height, width
            }
        },
        getAnchor () {
            if (this.anchor) {
                return typeof this.anchor === 'string'
                    ? document.querySelector(this.anchor)
                    : this.anchor
            }
            //console.dir(this.$refs.anchor);
            return this.$refs.anchor
        },
        //以下是计算位置
        calcLeft () {
            const a = this.dimensions.anchor;
            const c = this.dimensions.popself;
            // Content always has a min width
            // of its anchor. This is applied
            // when the menu is shown, but not
            // reflected in the getBoundingClientRect
            // method
            const minWidth = a.width < c.width ? c.width : a.width;
            let left = this.left ? a.right - minWidth : a.left;

            if (this.offsetX) left += this.left ? -a.width : a.width;
            if (this.nudgeLeft) left -= this.nudgeLeft;
            if (this.nudgeRight) left += this.nudgeRight;

            return left
        },
        calcXOverflow (left) {
            const parsedMaxWidth = isNaN(parseInt(this.maxWidth))
                ? 0
                : parseInt(this.maxWidth);
            const innerWidth = this.getInnerWidth();
            const maxWidth = Math.max(
                this.dimensions.popself.width,
                parsedMaxWidth
            );
            const totalWidth = left + maxWidth;
            const availableWidth = totalWidth - innerWidth;

            if ((!this.left || this.right) && availableWidth > 0) {
                left = (
                    innerWidth -
                    maxWidth -
                    (innerWidth > 600 ? 30 : 12) // Account for scrollbar
                )
            }
            if (left < 0) left = 12;
            return left
        },
        calcTop () {
            this.checkForWindow();

            const a = this.dimensions.anchor;
            const c = this.dimensions.popself;
            let top = this.top ? a.bottom - c.height : a.top;

            if (this.offsetY) top += this.top ? -a.height : a.height;
            if (this.nudgeTop) top -= this.nudgeTop;
            if (this.nudgeBottom) top += this.nudgeBottom;
            return top + this.pageYOffset
        },
        calcYOverflow (top) {
            const documentHeight = this.getInnerHeight();
            const toTop = this.pageYOffset + documentHeight;
            const anchor = this.dimensions.anchor;
            const contentHeight = this.dimensions.popself.height;
            const totalHeight = top + contentHeight;
            const isOverflowing = toTop < totalHeight;

            // If overflowing bottom and offset
            if (isOverflowing && this.offsetOverflow) {
                top = this.pageYOffset + (anchor.top - contentHeight)
                // If overflowing bottom
            } else if (isOverflowing && !this.allowOverflow) {
                top = toTop - contentHeight - 12
                // If overflowing top
            } else if (top < this.pageYOffset && !this.allowOverflow) {
                top = this.pageYOffset + 12
            }
            return top < 12 ? 12 : top
        },
        checkForWindow () {
            this.hasWindow = typeof window !== 'undefined';

            if (this.hasWindow) {
                this.pageYOffset = this.getOffsetTop()
            }
        },
        getOffsetTop () {
            if (!this.hasWindow) return 0;

            return window.pageYOffset ||
                document.documentElement.scrollTop
        },
        getInnerHeight () {
            if (!this.hasWindow) return 0;

            return window.innerHeight ||
                document.documentElement.clientHeight
        },
        getInnerWidth () {
            if (!this.hasWindow) return 0;

            return window.innerWidth
        },
    }
}