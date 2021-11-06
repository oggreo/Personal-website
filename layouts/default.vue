<template>
  <div class="bg-vbg">
    <NavigationBar />
    <Nuxt />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
export default {
  name: 'DefaultLayout',
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
</style>
