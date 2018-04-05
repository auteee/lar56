export default {
    name:'e-collapse',
    provide () {
        return {
            panelClick: this.panelClick,
            focusable: this.focusable
        }
    },
    props: {
        expand: Boolean,
        focusable: Boolean,
        inset: Boolean,
        popout: Boolean
    },
    methods: {
        getChildren () {
            return this.$children.filter(c => {
                if (!c.$options) return;
                //console.info(c.$options);
                return c.$options.name === 'e-collapse-content'
            })
        },
        panelClick (uid) {
            if (!this.expand) {
                return this.getChildren()
                    .forEach(e => e.toggle(uid))
            }

            const panel = this.$children.find(e => e._uid === uid);

            panel && panel.toggle(uid)
        }
    },

    render (h) {
        return h('div', {
            staticClass: 'card collapse',
            'class': {
                'focusable': this.focusable,
                'popout': this.popout,
                'inset': this.inset,
            }
        }, this.$slots.default)
    }
}