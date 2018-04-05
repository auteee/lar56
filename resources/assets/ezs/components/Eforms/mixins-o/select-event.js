export default {
    methods:{
        blur () {
            this.isFocused=false;
            this.showing=false;
        },
        focus () {
            this.isFocused=true;
            this.isActive=true;
            this.$emit('focus')
        },
        genListeners () {
            return {
                click: () => {
                    if (this.disabled || this.readonly) return;
                    if(!this.showing){
                        this.updatePosition();
                        this.showing=true;

                        clearTimeout(this.timer);
                        this.timer = setTimeout(() => {
                            document.body.addEventListener('click', this.__bodyHide, true);
                            //document.body.addEventListener('touchstart', this.__bodyHide, true);
                            //this.showPromise && this.showPromiseResolve()
                        }, 0)
                    }
                    this.focus();
                }
                //keydown: this.onKeyDown // Located in mixins/select-autocomplete.js
            }
        },
        __bodyHide (e) {
            if (
                !!this.$refs.options && !this.$refs.options.contains(e.target) &&
                !!this.$el && !this.$el.contains(e.target)
            ) {
                clearTimeout(this.timer);
                document.body.removeEventListener('click', this.__bodyHide, true);
                this.blur();
            }
        },
    }
}