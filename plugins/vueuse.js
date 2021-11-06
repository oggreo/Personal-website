import * as VueUse from '@vueuse/core'

export default (ctx, inject) => {
  inject('VueUse', VueUse)
  // if (process.client) {
  // }
}
