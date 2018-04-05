import Ripple from "../../directives/ripple";
//import ClickOutside from "../../directives/click-outside";
import {eExpandTransition} from "../transitions";

export default {
    name:'e-collapse-content',
    directives: {
        Ripple,
//        ClickOutside
    },
    inject: ['focusable', 'panelClick'],
    data () {
        return {
            height: 'auto',
            isActive: !!this.value
        }
    },
    props: {
        hideActions: Boolean,
        ripple: Boolean,
        value: { required: false }
    },
    watch: {
        value (val) {
            this.isActive = !!val
        }
    },
    methods:{
        genHeader () {
            const children=[this.$slots.header];
            if (!this.hideActions) {
                let content='+';
                if(this.isActive) content='- ';
                children.push([
                   this.$createElement('i',{
                       staticClass: 'icon action'
                   },content)
                ]);
            }
            return this.$createElement('div', {
                staticClass: 'card-header',
                directives: [{
                    name: 'ripple',
                    value: this.ripple
                }],
                on: {
                    click: () => this.panelClick(this._uid)
                }
            }, children)
        },
        genBody () {
            return this.$createElement('div', {
                ref: 'body',
                class: 'collapse-container',
                directives: [
                    {
                        name: 'show',
                        value: this.isActive
                    }
                ]
            }, this.$slots.default)
        },
        toggle (uid) {
            const isActive = this._uid === uid && !this.isActive;

            // We treat bootable differently
            // Needs time to calc height
            this.$nextTick(() => (this.isActive = isActive))
        }
    },
    render(h){
        const children = [];

        this.$slots.header && children.push(this.genHeader());
        children.push(h(eExpandTransition, [this.genBody()]));
        //children.push(this.genBody());
        return h('div', {
            staticClass: 'card',
            'class': {
                'active': this.isActive
            },
            attrs: { tabindex: 0 },
            on: {
                keydown: e => {
                    // Ensure element is focusable and the activeElement
                    if (this.focusable &&
                        this.$el === document.activeElement &&
                        e.keyCode === 13
                    ) this.panelClick(this._uid)
                }
            }
        }, children)
    }
}