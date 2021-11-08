<template>
  <div class="flex flex-row justify-center pt-5 pb-5 bg-footer">
    <div class="flex flex-col text-sm justify-center text-black">
      <span class="text-center"> reo [@] seeai.co.uk </span>
      <span> Made with ❤️ &nbsp; by Reo Ogusu @ 2021</span>
      <span class="text-center">
        <a
          href="https://www.linkedin.com/in/ogureo/"
        >
          <FontAwesomeIcon
            class="mx-auto my-auto md:col-start-1"
            :icon="['fab', 'linkedin']"
            :style="{ 'font-size': '25px', 'color': 'black' }"
          />
        </a>
        &nbsp;
        <a
          href="https://twitter.com/ricelord13"
        >
          <FontAwesomeIcon
            class="mx-auto my-auto md:col-start-1"
            :icon="['fab', 'twitter']"
            :style="{ 'font-size': '25px', 'color': 'black' }"
          />
        </a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

</style>
