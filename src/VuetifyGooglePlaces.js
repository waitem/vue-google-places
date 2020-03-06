import mixin from './mixin'
import { VTextField } from 'vuetify/lib'

export default {
  mixins: [mixin],
  props: {
    clearIcon: {
      type: String,
      default: () => 'close'
    },
    prependIcon: {
      type: String,
      default: () => ''
    },
    searchIcon: {
      type: String,
      default: () => 'search'
    }
  },
  computed: {
    getAppendIcon () {
      return this.place ? this.clearIcon : this.searchIcon
    }
  },
  methods: {
    renderInput () {
      return this.$createElement(VTextField, {
        attrs: this.$attrs,
        on: {
          'click:append': () => {
            this.$refs.gp.changePlace(null)
          }
        },
        props: {
          appendIcon: this.getAppendIcon,
          prependIcon: this.prependIcon,
          value: this.val
        }
      })
    }
  }
}
