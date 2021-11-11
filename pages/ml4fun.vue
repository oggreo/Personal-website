<template>
  <div>
    <div v-for="camera of cameras" :key="camera.id">
      {{ camera }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ml4fun',
  computed: {
    cameras () {
      const {
        videoInputs: cameras,
        audioInputs: microphones,
        audioOutputs: speakers
      } = this.$VueUse.useDevicesList({
        requestPermissions: true
      })
      return { cameras, microphones, speakers }
    }
  }
}
</script>

<style scoped>

</style>
