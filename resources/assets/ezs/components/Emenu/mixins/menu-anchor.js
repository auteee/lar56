/**
 * Menu activator
 *
 * @mixin
 *
 * Handles the click and hover activation
 * Supports slotted and detached activators
 */
export default {
  methods: {
    activatorClickHandler (e) {
      if (this.disabled) return;
      if (this.openOnClick && !this.isActive) {
        this.getAnchor().focus();
        this.isActive = true;
        this.absoluteX = e.clientX;
        this.absoluteY = e.clientY
      } else if (this.closeOnClick && this.isActive) {
        this.getAnchor().blur();
        this.isActive = false
      }
    },
    mouseEnterHandler (e) {
      this.runDelay('open', () => {
        this.isActive = true
      })
    },
    mouseLeaveHandler (e) {
      // Prevent accidental re-activation
      this.runDelay('close', () => {
        if (this.$refs.content.contains(e.relatedTarget)) return;

        requestAnimationFrame(() => {
          this.isActive = false;
        })
      })
    },
    addActivatorEvents (activator = null) {
      if (!activator) return;
      activator.addEventListener('click', this.activatorClickHandler)
    },
    removeActivatorEvents (activator = null) {
      if (!activator) return;
      activator.removeEventListener('click', this.activatorClickHandler)
    }
  }
}
