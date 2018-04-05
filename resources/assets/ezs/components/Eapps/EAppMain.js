//require('../../stylus/components/_content.styl')

export default {
  name: 'e-app-main',
  props:{
    id:{
        type:String,
        default:'e-main'
    }
  },
  computed: {
    styles () {
      const {
        bar, top, right, bottom, left
      } = this.$ezs.application;

      return {
        top: `${top + bar}px`,
        right: `${right}px`,
        bottom: `${bottom}px`,
        left: `${left}px`
      }
    }
  },

  render (h) {
    const data = {
        staticClass: 'app-main',
        style: this.styles,
        domProps:{
            id:this.id
        }
    };

    return h('main', data, this.$slots.default)
  }
}
