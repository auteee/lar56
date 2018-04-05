
export default {
    name:'e-system-bar',
    props: {
        cs:String,
        app: Boolean,
        absolute: Boolean,
        fixed: Boolean,
        status: Boolean,
        window: Boolean
    },
    computed: {
        classes () {
            let classes={
                'absolute': this.absolute,
                'fixed': this.fixed,
                'status': this.status,
                'window': this.window
            };
            if(this.cs){
                classes[this.cs]=true;
            }
            return classes;
        },
        computedHeight () {
            return this.window ? 32 : 24
        }
    },
    watch: {
        app () {
            this.updateApplication()
        },
        window () {
            this.updateApplication()
        },
        fixed () {
            this.updateApplication()
        },
        absolute () {
            this.updateApplication()
        }
    },
    mounted () {
        this.updateApplication()
    },
    methods: {
        updateApplication () {
            if (this.app && this.$ezs) {
                this.$ezs.application.bar = (this.fixed || this.absolute) ? this.computedHeight : 0
            }
        }
    },

    destroyed () {
        if (this.app && this.$ezs) this.$ezs.application.bar = 0
    },
    render (h) {
        const data = {
            staticClass: 'system-bar',
            'class': this.classes,
            style: {
                height: `${this.computedHeight}px`
            }
        };

        return h('div', data, this.$slots.default)
    }
}