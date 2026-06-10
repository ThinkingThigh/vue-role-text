<script>
export default {
  name: 'RoleText',
  props: {
    msgKey: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'span',
    },
  },
  render(h) {
    return h(this.tag, this.$rt(this.msgKey))
  },
}
</script>
