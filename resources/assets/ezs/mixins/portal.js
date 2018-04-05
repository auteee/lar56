//传送门，改变el的位置　用于位置显示
export default {
    props:{
        eTarget: {
            type: null,
            validator (value) {
                if (HTMLElement && value && value instanceof HTMLElement) {
                    return true
                }

                return console.warn('The e-target-el prop is invalid. You should pass a valid HTMLElement.', this);
            }
        }
    },
    watch: {
        eTarget (newTarget, oldTarget) {
            this.changeParentEl(newTarget);

            if (oldTarget) {
                this.$forceUpdate()
            }
        }
    },
    methods: {
        changeParentEl (el,newTarget) {
            newTarget && newTarget.appendChild(el)
        },
        killGhostElement (el) {
            if (!el) return;

            // IE11 Fix
            try {
                el.parentNode.removeChild(el)
            } catch (e) {}
            // if (el.parentNode) {
            //     this.changeParentEl(this.originalParentEl);
            //     this.$options._parentElm = this.originalParentEl;
            //     el.parentNode.removeChild(el)
            // }
        }
    }
}