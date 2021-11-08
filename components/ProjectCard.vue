<template>
  <div class="w-100 grid grid-cols-6 px-4">
    <nuxt-img
      :src="imgUrl"
      width="200"
      class="col-start-1 col-end-3 sm:col-end-2 my-auto"
    />
    <div
      class="text-gray-400 col-start-3 sm:col-start-2 col-end-6 my-auto pl-10"
    >
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    imgUrl: String,
    description: String
  }
}
</script>

<style scoped>

</style>
