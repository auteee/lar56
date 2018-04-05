import inputGroup from '../../mixins/inputGroup'
export default {
    name:'e-radio-group',
    model: {
        prop: 'inputValue',
        event: 'change'
    },
    mixins:[inputGroup],
    provide () {
        return {
            isMandatory: () => this.mandatory,
            name: () => this.name,
            radio:{
                register: this.register,
                unregister: this.unregister
            }
        }
    },
    data: () => ({
        internalTabIndex: -1,
        radios: []
    }),
    props:{
        cs:String,
        disabled: Boolean,
        column: {
            type: Boolean,
            default: true
        },
        inputValue: null,
        mandatory: {
            type: Boolean,
            default: true
        },
        name: String,
        row: Boolean
    },
    computed:{
        classes () {
            return {
                'radio-group': true,
                'column': this.column && !this.row,
                'row': this.row,
            }
        }
    },
    watch: {
        inputValue (val) {
            this.radios.forEach(radio => {
                radio.isActive = val === radio.value
            })
        }
    },
    methods:{
        toggleRadio (value) {
            if (this.disabled) return;

            //this.shouldValidate = true;
            this.$emit('change', value);
            //this.$nextTick(() => this.validate());

            this.radios
                .filter(r => r.value !== value)
                .forEach(r => r.isActive = false)
        },
        radioBlur (e) {
            if (!e.relatedTarget || !e.relatedTarget.classList.contains('radio')) {
                //this.shouldValidate = true
                this.$emit('blur', this.inputValue)
            }
        },
        register (radio) {
            radio.isActive = this.inputValue === radio.value;
            radio.$el.tabIndex = radio.$el.tabIndex > 0 ? radio.$el.tabIndex : 0;
            radio.$on('change', this.toggleRadio);
            radio.$on('blur', this.radioBlur);
            //radio.$on('focus', this.radioFocus);
            this.radios.push(radio)
        },
        unregister (radio) {
            radio.$off('change', this.toggleRadio);
            radio.$off('blur', this.radioBlur);
            //radio.$off('focus', this.radioFocus);

            const index = this.radios.findIndex(r => r === radio);

            if (index > -1) this.radios.splice(index, 1)
        }
    },
    render(h){
        return h('div',{class:this.classes},this.$slots.default);
        // const data = {
        //     attrs: {
        //         role: 'radiogroup'
        //     }
        // };
        //return this.genInputGroup(this.$slots.default, data);
    }
}