
const dimensions = {
    anchor: {
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    itself: {
        top: 0, left: 0,
        bottom: 0, right: 0,
        width: 0, height: 0,
        offsetTop: 0, scrollHeight: 0
    },
    hasWindow: false
};

export default {
    name:'popover',
    data: () => ({
        absoluteX: 0,
        absoluteY: 0,
        dimensions: Object.assign({}, dimensions),
        isContentActive: false,
        pageYOffset: 0,
        stackClass: 'menuable__content__active',
        stackMinZIndex: 6
    }),
    props:{
        anchor: {
            default: null,
            validator: val => {
                return ['string', 'object'].includes(typeof val)
            }
        },
    },
    beforeMount () {
        this.checkForWindow()
    },
    methods:{
        getOffsetTop () {
            if (!this.hasWindow) return 0;

            return window.pageYOffset || document.documentElement.scrollTop
        },
        checkForWindow () {
            if (!this.hasWindow) {
                this.hasWindow = typeof window !== 'undefined'
            }

            if (this.hasWindow) {
                this.pageYOffset = this.getOffsetTop()
            }
        },
    }
}