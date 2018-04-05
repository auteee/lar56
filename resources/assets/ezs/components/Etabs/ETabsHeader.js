import Touch from "../../directives/touch";
import Resize from "../../directives/resize";
import EIcon from "../../components/Eicon";

export default {
    name:'e-tabs-header',
    directives: {
        Resize,
        Touch
    },
    inject: ['isScrollable','isMobile'],

    props:{
          cs:{
              type:String,
              default:'bg-primary'
          },
        centered: Boolean,
    },
    data () {
        return {
            isOverflowing: false,
            itemOffset: 0,
            scrollOffset: 0,
            startX: 0
        }
    },
    computed:{
        classes(){
            return{
                'tabs-header':true,
                'centered': this.centered,
                [this.cs]:this.cs
            };
        },
        containerClasses () {
            return {
                'tabs-nav-container': true
            }
        },
        overlayClasses () {
            return {
                'tabs-nav-overlay': true,
                'scrollable': this.leftIconVisible || this.rightIconVisible,
                'overflow': this.isOverflowing
            }
        },
        containerStyles () {
            return {
                'transform': `translateX(${-this.scrollOffset}px)`
            }
        },
        leftIconVisible () {
            return !this.isMobile() &&
                this.isScrollable() &&
                this.isOverflowing &&
                this.scrollOffset > 0
        },
        rightIconVisible () {
            if (this.isMobile() ||
                !this.isScrollable() ||
                !this.isOverflowing) return;

            // Check one scroll ahead to know the width of right-most item
            const container = this.$refs.container;
            const item = this.newOffsetRight(this.scrollOffset, this.itemOffset);
            const itemWidth = item && container.children[item.index].clientWidth || 0;
            const scrollOffset = this.scrollOffset + container.clientWidth;

            return container.scrollWidth - scrollOffset > itemWidth * 0.30
        }
    },
    methods:{
        genContainer () {
            return this.$createElement('ul', {
                'class': this.containerClasses,
                'style': this.containerStyles,
                ref: 'container'
            }, this.$slots.default)
        },
        genIcon (direction) {
            const capitalize = direction.charAt(0).toUpperCase() + direction.slice(1);
            return this.$createElement(EIcon, {
                class: { [`${direction}`]: true },
                style: { display: 'inline-flex' },
                on: {
                    click: this[`scroll${capitalize}`]
                }
            }, `fa-chevron-${direction}`)
        },
        genOverlay () {
            return this.$createElement('div', {
                class: this.overlayClasses,
                directives: [{
                    name: 'touch',
                    value: {
                        start: this.start,
                        move: this.move,
                        end: this.end
                    }
                }]
            }, [this.genContainer()])
        },
        scrollLeft () {
            const { offset, index } = this.newOffset('Left');
            this.scrollOffset = offset;
            this.itemOffset = index
        },
        scrollRight () {
            const { offset, index } = this.newOffset('Right');
            this.scrollOffset = offset;
            this.itemOffset = index
        },
        newOffset (direction) {
            return this[`newOffset${direction}`](this.scrollOffset, this.itemOffset)
        },
        onResize(){
          if (this._isDestroyed) return;

          const container = this.$refs.container;
          this.isOverflowing = container.clientWidth < container.scrollWidth
        },
        newOffsetLeft (currentOffset, currentIndex) {
            const container = this.$refs.container;
            const items = container.children;
            let offset = 0;

            for (let index = currentIndex - 1; index >= 0; index--) {
                if (!items[index].classList.contains('tabs__slider')) {
                    const newOffset = offset + items[index].clientWidth;
                    if (newOffset >= container.clientWidth) {
                        return { offset: currentOffset - offset, index: index + 1 }
                    }
                    offset = newOffset
                }
            }

            return { offset: 0, index: 0 }
        },
        newOffsetRight (currentOffset, currentIndex) {
            const container = this.$refs.container;
            const items = container.children;
            let offset = currentOffset;

            for (let index = currentIndex; index < items.length; index++) {
                if (!items[index].classList.contains('tabs-slider')) {
                    const newOffset = offset + items[index].clientWidth;
                    if (newOffset > currentOffset + container.clientWidth) {
                        return { offset, index }
                    }
                    offset = newOffset
                }
            }

            return null
        },
        start (e) {
            this.startX = this.scrollOffset + e.touchstartX;
            this.$refs.container.style.transition = 'none'
        },
        move (e) {
            const offset = this.startX - e.touchmoveX;
            this.scrollOffset = offset
        },
        end (e) {
            this.onResize()
            const container = this.$refs.container;
            const scrollWidth = container.scrollWidth - this.$el.clientWidth / 2;
            container.style.transition = null;

            if (this.scrollOffset < 0 || !this.isOverflowing) {
                this.scrollOffset = 0
            } else if (this.scrollOffset >= scrollWidth) {
                const lastItem = container.children[container.children.length - 1];
                this.scrollOffset = scrollWidth - lastItem.clientWidth
            }
        },
    },
    render(h){
        return h('div', {
            'class': this.classes,
            directives: [{
                name: 'resize',
                value: this.onResize
            }]
        }, [
            this.genOverlay(),
            this.leftIconVisible ? this.genIcon('left') : null,
            this.rightIconVisible ? this.genIcon('right') : null
        ])
    }
}