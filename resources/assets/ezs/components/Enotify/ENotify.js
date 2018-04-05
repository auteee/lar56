export default {
    name:'e-notify',
    data () {
        return {
            activeTimeout: {},
            isActive:!!this.value
        }
    },
    props:{
        cs:String,
        positions:String,         //位置
        absolute: Boolean,
        bottom: Boolean,
        left: Boolean,
        right: Boolean,
        top: Boolean,
        center:Boolean,
        closed:Boolean,
        multiLine: Boolean,
        vertical: Boolean,
        timeout: {
            type: Number,
            default: 6000
        },
        value:{required:false}
    },
    computed:{
        isBottom(){
            return this.bottom ||
                (!this.top && !this.center && !this.positions) ||
                (this.positions && this.positions.indexOf('top')===-1 && this.positions.indexOf('center')===-1);
        },
        classes(){
            let classes={
                'active': this.isActive,
                'absolute': this.absolute,
                'left': this.left,
                'right': this.right,
                'top': this.top,
                'center':this.center,
                'bottom': this.isBottom,
                'multi-line': this.multiLine && !this.vertical,
                'vertical': this.vertical,
                [this.positions]:this.positions
            };
            return classes;
        }
    },
    watch: {
        value(val){
          this.isActive=!!val;
        },
        isActive (val) {
            !!val !== this.value && this.$emit('input', val);
            this.setTimeout()
        }
    },
    methods: {
        setTimeout () {
            clearTimeout(this.activeTimeout);

            if (this.isActive && this.timeout) {
                this.activeTimeout = setTimeout(() => {
                    this.isActive = false
                }, this.timeout)
            }
        }
    },

    mounted () {
        //this.setTimeout()
    },
    render (h) {
        const children = [];
        const close=[];
        if(this.closed){
            close.push(h('span', {
                'class': 'closed',
                on: {
                    click: () => {
                        this.$emit('input', false);
                        this.isActive=false
                    }
                }
            }, '×'));
        }
        if (this.isActive) {
            children.push(h('div', {
                staticClass: 'notify-content',
                'class':{[this.cs]:this.cs}
            }, [this.$slots.default,close]))
        }

        let t= this.top ? 'slide-y-transition' : 'slide-y-reverse-transition';
        return h('div', {
            staticClass: 'notify',
            'class': this.classes,
            on: this.$listeners
        }, [h('transition', {
            props: {
                name: t
            }
        }, children)])
    }
}