import Touch from '../../directives/touch'

export default {
    name:'e-tabs-body',
    directives:{ Touch },
    inject:['next','prev'],
    props:{
        cs:String,
        cycle: Boolean,
        touchless: Boolean
    },
    methods: {
        classes(){
            return {
                [this.cs]:this.cs
            }
        },
        swipeLeft () {
            this.next(this.cycle)
        },
        swipeRight () {
            this.prev(this.cycle)
        }
    },

    render (h) {
        const data = {
            staticClass: 'tabs-body',
            'class':this.classes,
            directives: []
        };

        !this.touchless && data.directives.push({
            name: 'touch',
            value: {
                left: this.swipeLeft,
                right: this.swipeRight
            }
        });

        return h('div', data, this.$slots.default)
    }
}