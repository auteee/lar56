//import {getTransformProperties, parsePosition} from "../../../../quasar/src/utils/popup";
import { positionValidator } from '../../util/popup'
import {frameDebounce} from "../../../../quasar/src/utils/debounce";
//import {viewport, width} from "../../../../quasar/src/utils/dom";
//import {setPosition} from "../../../../quasar/src/utils/popup";

export default {
    name:'e-popover',
    data(){
       return {
           anchorEl:null,
       }
    },
    props:{
        anchor: {
            type: String,
            default: 'bottom left',
            validator: positionValidator
        },
        self: {
            type: String,
            default: 'top left',
            validator: positionValidator
        },
    },

    computed: {
        // transformCSS () {
        //     return getTransformProperties({selfOrigin: this.selfOrigin})
        // },
        // anchorOrigin () {
        //     return parsePosition(this.anchor)
        // },
        // selfOrigin () {
        //     return parsePosition(this.self)
        // },
        styles(){
            return{
                transformOrigin: this.self,
            }
        }
    },
    created () {
        //this.__updatePosition = frameDebounce(() => { this.reposition() })
    },
    methods:{

    },
    mounted: function () {
        // this.$nextTick(() => {
        //     this.anchorEl = this.$el.parentNode;
        //     this.anchorEl.removeChild(this.$el);
        //     if (this.anchorEl.classList.contains('q-btn-inner') || this.anchorEl.classList.contains('q-if-inner')) {
        //         this.anchorEl = this.anchorEl.parentNode
        //     }
        //     if (this.anchorClick) {
        //         this.anchorEl.classList.add('cursor-pointer');
        //         this.anchorEl.addEventListener('click', this.toggle)
        //     }
        // });
        // if (this.value) {
        //     this.show()
        // }
    },
    render (h) {
        return h('div', {
            staticClass: 'popover animate-scale',
            style: this.styles,
            on: {
                click (e) { e.stopPropagation() }
            }
        }, this.$slots.default)
    },
}