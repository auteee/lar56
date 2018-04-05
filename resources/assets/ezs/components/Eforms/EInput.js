import Maskable from '../../mixins/maskable'

import InputGroup from '../../mixins/inputGroup'

export default {
    name:'e-input',
    mixins: [Maskable,InputGroup],
    data(){
        return {
            yOverflow:false,
            isFocused: false,
            badInput: false,
            inputHeight : null,
            internalChange: false,
        }
    },
    props:{
        type: {
            type: String,
            default: 'text'
        },
        /////textarea
        textarea: Boolean,
        multiLine: Boolean,
        autoGrow: Boolean,
        maxHeight:{
          type:[String,Number],
          default:200
        },
        rows: {
            default: 3
        },
        id:String,
        //html5
        autofocus: Boolean,
        placeholder: String,
        maxlength: [Number, String],
        required: Boolean,
        readonly: Boolean,
    },
    computed:{
        inputValue: {
            get () {
                return this.lazyValue
            },
            set (val) {
                if (this.mask) {
                    this.lazyValue = this.unmaskText(this.maskText(this.unmaskText(val)));
                    this.setSelectionRange()
                } else {
                    this.lazyValue = val;
                    this.$emit('input', this.lazyValue)
                }
            }
        },

        count () {
            if(!this.maxlength) return;
            let inputLength=0,maxLength;
            maxLength=parseInt(this.maxlength, 10);
            if (this.inputValue) inputLength = this.inputValue.toString().length;

            return `${inputLength} / ${maxLength}`
        },
        shouldAutoGrow () {
            return (this.multiLine || this.textarea) && this.autoGrow
        }
    },
    watch:{
        value(val){
            if (this.mask && !this.internalChange) {
                const masked = this.maskText(this.unmaskText(val));
                this.lazyValue = this.unmaskText(masked);

                // Emit when the externally set value was modified internally
                String(val) !== this.lazyValue && this.$nextTick(() => {
                    this.$refs.input.value = masked;
                    this.$emit('input', this.lazyValue)
                })
            } else this.lazyValue = val;

            !this.validateOnBlur && this.validate();
            this.shouldAutoGrow && this.calculateInputHeight()
        }
    },
    mounted () {
        this.shouldAutoGrow && this.calculateInputHeight();
    },
    methods:{
        calculateInputHeight () {
            this.inputHeight = null;

            this.$nextTick(() => {
                const height = this.$refs.input
                    ? this.$refs.input.scrollHeight
                    : 0;
                const minHeight = this.rows * 24;
                //const inputHeight = height < minHeight ? minHeight : height;
                this.inputHeight = height < minHeight ? minHeight : (height<this.maxHeight?height:this.maxHeight);
                this.yOverflow = this.inputHeight>this.maxHeight;
                //this.inputHeight+=1;
            })

        },
        focus (e) {
            if (!this.$refs.input) return;
            this.isFocused = true;
            if (document.activeElement !== this.$refs.input) {
                this.$refs.input.focus()
            }
            this.$emit('focus', e)
        },
        onInput (e) {
            //this.resetSelections(e.target)
            if(this.mask){
                this.inputValue = this.unmaskText(e.target.value);
            }else {
                this.inputValue = e.target.value;
            }
            //this.$emit('input', this.inputValue);
            this.badInput = e.target.validity && e.target.validity.badInput;
            this.shouldAutoGrow && this.calculateInputHeight()
        },
        blur (e) {
            this.internalChange = false;
            this.isFocused = false;
            this.$nextTick(() => {
                this.validate();
            });
            this.$emit('blur', e)
        },
        keyDown (e) {
            if ((this.multiLine || this.textarea) && this.isFocused && e.keyCode === 13) {
                //this.shouldAutoGrow && this.calculateInputHeight()
                e.stopPropagation()
            }

            this.internalChange = true
        },


        genInput: function () {

            const tag = this.multiLine || this.textarea ? 'textarea' : 'input';
            const listeners = Object.assign({}, this.$listeners);
            delete listeners['change']; // Change should not be bound externally
            const attrs = {
                ...this.$attrs,
                'aria-label': (!this.$attrs || !this.$attrs.id) && this.label // Label `for` will be set if we have an id
            };
            if(this.tabindex) attrs.tabindex=this.tabindex;
            if(this.placeholder) attrs.placeholder=this.placeholder;
            if(this.maxlength) attrs.maxlength = parseInt(this.maxlength, 10);

            const data = {
                staticClass:'',
                style:{},
                domProps: {
                    autofocus: this.autofocus,
                    disabled: this.disabled,
                    required: this.required,
                    readOnly: this.readonly,
                    value: this.maskText(this.lazyValue || '')
                },
                attrs: attrs,
                on: Object.assign(listeners, {
                    blur: this.blur,
                    input: this.onInput,
                    focus: this.focus,
                    keydown: this.keyDown
                }),
                ref: 'input'
            };
            if(this.id){
                data.domProps.id=this.id
            }
            if (!this.textarea && !this.multiLine) {
                data.domProps.type = this.type
            } else {
                data.domProps.rows = this.rows
            }
            if (this.shouldAutoGrow) {
                data.style.height = this.inputHeight && `${this.inputHeight}px`;
                data.style.overflowY= this.yOverflow?'auto':'';
            }
            return [this.$createElement(tag, data)];
            //return this.$createElement(tag, data);
        },
    },
    render(){
        const data={
            attrs: { tabindex: false },
        };
        if(this.textarea) data.staticClass='textarea';
        return this.genInputGroup(this.genInput(), data)
    }
}