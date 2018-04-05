export default {
    name: 'e-portal',
    abstract: true,
    props: {
        mdAttachToParent: Boolean,
        eTarget: {
            type: null,
            validator (value) {
                if (HTMLElement && value && value instanceof HTMLElement) {
                    return true
                }

                return console.warn('The md-target-el prop is invalid. You should pass a valid HTMLElement.', this);
            }
        }
    },
    data: () => ({
        originalParentEl: null
    }),
    watch: {
        eTarget (newTarget, oldTarget) {
            this.changeParentEl(newTarget);

            if (oldTarget) {
                this.$forceUpdate()
            }
        }
    },
    methods: {
        killGhostElement (el) {
            if (el.parentNode) {
                this.changeParentEl(this.originalParentEl);
                this.$options._parentElm = this.originalParentEl;
                el.parentNode.removeChild(el)
            }
        },
        changeParentEl (newTarget) {
            newTarget && newTarget.appendChild(this.$el)
        }
    },
    mounted () {

        if (this.mdAttachToParent && this.$el.parentNode.parentNode) {
            this.changeParentEl(this.$el.parentNode.parentNode)
        } else if (document) {
            this.changeParentEl(this.eTarget || document.body)
        }
    },
    beforeDestroy () {
        this.killGhostElement(this.$el)
    },
    render () {
        const defaultSlot = this.$slots.default;

        if (defaultSlot && defaultSlot[0]) {
            return defaultSlot[0]
        }
    }
}