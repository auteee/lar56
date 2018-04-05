export default {
    name:'e-app-header',
    data(){
        return {
            heights: {
                mobileLandscape: 48,
                mobile: 56,
                desktop: 64,
                dense: 48
            },
        }
    },
    props:{
        height:[Boolean,String],
        dense:Boolean,

    },
    computed:{
        classes(){
          const classes={
              'app-header':true
          };
          return classes
        },
        styles () {
            const {
                right, left
            } = this.$ezs.application;

            return {
                paddingLeft: left+'px',
                paddingRight:right+'px'
            }
        },
        computedHeight () {
            if (this.height) return parseInt(this.height);
            if (this.dense) return this.heights.dense;
            if (this.prominent ||
                this.$ezs.breakpoint.mdAndUp
            ) return this.heights.desktop;
            if (this.$ezs.breakpoint.width >
                this.$ezs.breakpoint.height
            ) return this.mobileLandscape;

            return this.heights.mobile
        },
    },
    methods:{
      updateApplication(){
          this.$ezs.application.top = this.computedHeight
      }
    },
    render(h){
        this.updateApplication();
        const children=[];
        const data = {
            'class': this.classes,
            style: this.styles,
        };

        children.push(h('nav', {
            staticClass: 'app-header-content',
            style: { height: `${this.computedHeight}px` },
            ref: 'content'
        }, this.$slots.default));

        return h('header', data, children)
    }
}