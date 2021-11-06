<template>
  <div>
    <FontAwesomeIcon
      class="mx-auto my-auto md:col-start-1 follow-icon"
      :icon="['fas', 'pizza-slice']"
      :style="iconStyle"
    />
  </div>
</template>

<script>
export default {
  name: 'FollowCursor',
  data () {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      xp: 0,
      yp: 0,
      left: 0,
      top: 0
    }
  },
  computed: {
    iconStyle () {
      return { 'font-size': '30px', color: this.rgb, position: 'absolute', left: this.xp + 'px', top: this.yp + 'px' }
    },
    rgb () {
      const red = Math.round((this.x.value / this.width.value) * 255)
      const green = Math.round((this.y.value / this.width.value) * 255)
      const blue = Math.round((red + green) / 2)
      return `rgb(${red}, ${green}, ${blue})`
      // return `rgb(${this.red}, ${this.green}, ${this.blue})`
    }
  },
  watch: {
    rgb () {
      this.xp += (((this.x.value - this.xp) / 6) + 5)
      this.yp += (((this.y.value - this.yp) / 6) + 5)
    }
  },
  mounted () {
    const { x, y } = this.$VueUse.useMouse()
    const { width, height } = this.$VueUse.useWindowSize()
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

}
</script>

<style scoped>

</style>
