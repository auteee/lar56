import EIcon from '../Eicon'
import Ripple from '../../directives/ripple'

export default {
    name:'e-step-nav',
    components:{ EIcon },
    directives: { Ripple },
    inject: ['stepClick'],

    data () {
        return {
            isActive: false,
            isInactive: true
        }
    },
    props:{
        cs:String,
        stepcs:{
          type:String,
          default:'bg-primary'
        },
        complete: Boolean,
        completeIcon: {
            type: String,
            default: 'fa-check'
        },
        editIcon: {
            type: String,
            default: 'fa-pencil'
        },
        errorIcon: {
            type: String,
            default: 'fa-warning'
        },
        editable: Boolean,
        rules: {
            type: Array,
            default: () => []
        },
        step: [Number, String]
    },
    computed:{
        classes () {
            let classes = {
                'step-nav': true,
                'active': this.isActive,
                'editable': this.editable,
                'inactive': this.isInactive,
                'error': this.hasError,
                'complete': this.complete,
                'error--text': this.hasError
            };
            if (this.cs) {
                classes[this.cs] = true;
            }
            return classes;
        },
        stepCss(){
              if(!this.hasError && (this.complete || this.isActive)) {
                  return this.stepcs;
              }
              return '';
        },
        hasError () {
            return this.rules.some(i => (i() !== true))
        }
    },
    methods:{
        click (e) {
            e.stopPropagation();

            if (this.editable) {
                this.stepClick(this.step)
            }
        },
        toggle (step) {
            this.isActive = step.toString() === this.step.toString();
            this.isInactive = Number(step) < Number(this.step)
        }
    },
    render(h){
        const data = {
            'class': this.classes,
            directives: [{
                name: 'ripple',
                value: this.editable
            }],
            on: { click: this.click }
        };
        let stepContent;

        if (this.hasError) {
            stepContent = [h('e-icon', {}, this.errorIcon)]
        } else if (this.complete) {
            if (this.editable) {
                stepContent = [h('e-icon', {}, this.editIcon)]
            } else {
                stepContent = [h('e-icon', {}, this.completeIcon)]
            }
        } else {
            stepContent = this.step
        }

        const step = h('span', {
            staticClass: 'step-nav-step',
            class:this.stepCss
        }, stepContent);

        const label = h('div', {
            staticClass: 'step-nav-label',
        }, this.$slots.default);

        return h('div', data, [step, label])
    }
}