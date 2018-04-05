export default {
  data () {
    return {
      errorBucket: [],
      valid: false,
      hasError:false
    }
  },

  props: {
    rules: {
      type: Array,
      default: () => []
    },
  },

  methods: {
    reset () {
      // TODO: Do this another way!
      // This is so that we can reset all types of inputs
      this.$emit('input', this.isMultiple ? [] : null);
      this.$emit('change', null);

      this.$nextTick(() => {
        this.validate()
      })
    },
    validate (force = false, value = this.inputValue) {

      this.errorBucket = [];

      this.rules.forEach(rule => {
        const valid = typeof rule === 'function' ? rule(value) : rule;

        if (valid !== true && !['string', 'boolean'].includes(typeof valid)) {
          throw new TypeError(`Rules should return a string or boolean, received '${typeof valid}' instead`)
        }

        if (valid !== true) {
          this.errorBucket.push(valid)
        }
      });
      this.valid = this.errorBucket.length === 0;
      this.hasError = !this.valid;
      return this.valid
    }
  }
}
