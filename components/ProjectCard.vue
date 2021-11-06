<template>
  <div class="w-100 grid grid-cols-3 px-4 gap-4">
    <nuxt-img
      :src="imgUrl"
      width="200"
      class="col-start-1 mx-auto"
    />
    <div
      class="text-gray-400 col-start-2 col-span-2 my-auto"
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
