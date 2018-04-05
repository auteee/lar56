//_alerts.sytl
import EIcon from "../Eicon"
export default {
    name:'e-alert',
    components:{ EIcon },
    data () {
        return {
            isActive: !!this.value
        }
    },
    props:{
        cs:String,
        animate:Array,
        closed: Boolean,
        icon: String,
        value: { required: false },
        type: {
            type: String,
            validator (val) {
                return [
                    'info',
                    'error',
                    'success',
                    'warning'
                ].includes(val)
            }
        }
    },
    computed: {
        classes () {
            let css;
            if(this.type){
                let s='bgw-'+this.type;
                if(this.type && (!this.cs || this.cs.indexOf(s)===-1)){
                    css= s;
                }
            }
            return {
                [css]:css,
                [this.cs]:this.cs
            };
        },
        computedIcon () {
            if (this.icon || !this.type) return this.icon;

            switch (this.type) {
                case 'info': return 'ion-information-circled';
                case 'error': return 'ion-alert-circled';
                case 'success': return 'ion-checkmark-circled';
                case 'warning': return 'ion-android-alert'
            }
        }
    },
    watch: {
        value (val) {
            this.isActive = !!val
        },
    },
    render(h){
        const children = [h('div',{class:'content'}, this.$slots.default)];
        if(this.closed){
            const close = h('span', {
                'class': 'closed',
                on: {
                    click: () => {
                        this.$emit('input', false);
                        this.isActive=false
                    }
                }
            }, '×');
            children.push(close)
        }
        if (this.computedIcon) {
            children.unshift(h('e-icon', {
                'class': 'alert-icon'
            }, this.computedIcon))
        }
        const alert = h('div', {
            staticClass: 'alert',
            'class': this.classes,
            directives: [{
                name: 'show',
                value: this.isActive
            }],
            on: this.$listeners
        }, children);
        if(this.animate){
            return h('e-animate',{props:{
                    in:this.animate[0],
                    out:this.animate[1],
                }},[alert])
        }
        return alert
    }
}