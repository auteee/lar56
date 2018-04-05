
export default function applicationable (value, events = []) {
  return {
    name: 'applicationable',

    props: {
      app: Boolean
    },

    computed: {
      applicationProperty () {
        return value
      }
    },

    watch: {
      // If previous value was app
      // reset the provided prop
      app (x, prev) {
        prev
          ? this.removeApplication()
          : this.callUpdate()
      }
    },

    created () {
      for (let i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate)
      }
    },

    mounted () {
      this.callUpdate()
    },

    destroyed () {
      this.app && this.removeApplication()
    },

    methods: {
      callUpdate () {
        if (!this.app) return;

        this.$ezs.application[this.applicationProperty] = this.updateApplication()
      },
      removeApplication () {
        this.$ezs.application[this.applicationProperty] = 0
      },
      updateApplication: () => {}
    }
  }
}
