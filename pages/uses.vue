<template>
  <div>
    <div class="px-10 pb-20 w-full h-screen md:h-auto bg-vbg shadow grid grid-cols-1 md:grid-cols-5">
      <div class="mt-20 col-start-2 col-span-5">
        <div>
          <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Editor + Terminal
          </div>
          <ul>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="mt-20 text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Desktop Apps
          </div>
          <ul>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div class="mt-20 text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Hardware
          </div>
          <ul>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              <div class="flex flex-row">
                <div class="flex h-3 w-3 my-auto">
                  <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                  <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                </div>
                <div class="ml-4 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Uses',
  transition: 'home'
}
</script>

<style scoped>
  .home-enter-active, .home-leave-active { transition: opacity .2s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
