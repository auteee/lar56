export default {
    name:'e-tabs-slider',
    props:{
      cs:String
    },
    render (h) {
        return h('li', {
            staticClass: 'tabs-slider',
            class: {[this.cs]:this.cs}
        })
    }
}