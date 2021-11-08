<template>
  <div class="bg-vbg">
    <NavigationBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer'
export default {
  name: 'DefaultLayout',
  components: {
    Footer,
    NavigationBar
  }
}
</script>

<style scoped>
</style>
