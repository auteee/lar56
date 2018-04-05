import EIcon from "../components/Eicon/EIcon";
import Validatable from './validatable'
export default {
    components: { EIcon },
    mixins:[Validatable],
    data () {
        return {
            tabFocused: false,
            internalTabIndex: null,
            lazyValue: this.value,
        }
    },
    props: {
        cs:String,
        hint: String,       //提示
        prefix:String,      //前置
        suffix: String,     //后置
        isHint:Boolean,             //提示一直是否存在 否的话，当焦距时会出来
        label: String,
        prependIcon: String,        //前置icon
        prependIconCb:Function,     //前置icon 事件
        appendIcon:String,
        appendIconCb:Function,
        hideDetail:Boolean,

        tabindex: {default: 0},
        disabled: Boolean,
        value: {required: false}
    },
    computed: {
        inputGroupClasses () {
            const classes={
                'form-group':true,
                'prepend-icon':this.prependIcon,
                'error': this.hasError,
                'has-text': this.hasText,
                'focused': this.isFocused,
                'disabled':this.disabled,
                'multi-line': this.multiLine,
                [this.cs]:this.cs
            };
            return classes;
        },
        hasText () {
            return this.lazyValue != null &&
                this.lazyValue.toString().length > 0 ||
                this.badInput ||
                ['time', 'date', 'datetime-local', 'week', 'month'].includes(this.type)
        },
    },
    methods:{

        genLabel () {
            return this.$createElement('label', {
                attrs: {
                    for: this.$attrs.id
                }
            }, this.$slots.label || this.label)
        },
        genIcon (type,defaultCallback = null) {

            let pre=false,app=false,iconCb=false;
            if(type==='prependIcon')
                pre=true;
            else if(type==='appendIcon')
                app=true;
            else
                return;

            const icon=this[`${type}`];
            const callback= this.disabled?null:defaultCallback;
            if(callback!==null) iconCb=true;
            return this.$createElement('e-icon', {
                'class': {
                    'pre-icon': pre,
                    'end-icon': app,
                    'icon-cb':iconCb
                },
                attrs: {
                    'aria-hidden': true
                },
                on: {
                    click: e => {
                        if (!callback) return;
                        e.stopPropagation();
                        callback()
                    }
                }
            }, icon)
        },
        genCounter () {
            return this.$createElement('span', {
                staticClass: 'counter'
            }, this.count)
        },
        genHint () {        //提示
            return this.$createElement('div', {
                'class': 'hint',
                key: this.hint,
                domProps: { innerHTML: this.hint }
            })
        },
        genError (error) {
            return this.$createElement(
                'div',
                {
                    'class': 'error',
                    key: error
                },
                error
            )
        },
        genMessages () {
            let messages = [];
            if (this.validations.length) {
                messages = this.validations.map(v => this.genError(v))
            }else if (this.isHint && this.hint || this.hint && this.isFocused) {
                messages = [this.genHint()]
            } else{
                return
            }

            return this.$createElement('transition-group', {
                'class': 'messages',
                props: {
                    tag: 'div',
                    name: 'custom-classes-transition',
                    'enter-active-class':"animated fadeInDown",
                    'leave-active-class':"animated fadeOutUp"
                }
            }, messages)
        },
        genFix (type) {
            return this.$createElement('span', {
                'class': `${type}`
            }, this[type])
        },
        genInputGroup (input, data = {}) {
            const children = [];
            const formGroupInput = [];
            const detailsChildren = [];

            data = Object.assign({}, {
                'class': this.inputGroupClasses,
                attrs: {
                    tabindex: this.disabled
                        ? -1
                        : this.internalTabIndex || this.tabindex
                }
            }, data);

            if (this.$slots.label || this.label) {
                children.push(this.genLabel())
            }

            formGroupInput.push(input);

            this.prefix && formGroupInput.unshift(this.genFix('prefix'));
            this.prependIcon && formGroupInput.unshift(this.genIcon('prependIcon',this.prependIconCb));
            this.suffix && formGroupInput.push(this.genFix('suffix'));
            this.appendIcon && formGroupInput.push(this.genIcon('appendIcon',this.appendIconCb));

            //const progress = this.genProgress();
            //progress && detailsChildren.push(progress);

            children.push(
                this.$createElement('div', {
                    staticClass:'form-group-input',
                    'class': this.textarea?'textarea':''
                }, formGroupInput)
            );

            this.genMessages() && detailsChildren.push(this.genMessages());
            this.maxlength && detailsChildren.push(this.genCounter());

            !this.hideDetail && children.push(
                this.$createElement('div', {
                    'class': 'details',
                    ref:'detail'
                }, detailsChildren)
            );

            return this.$createElement('div', data, children)
        }
    },
}