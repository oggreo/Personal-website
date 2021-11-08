<template>
  <div>
    <FollowCursor />
    <div class="bg-vbg">
      <div class="px-10 pb-20 md:h-auto shadow grid grid-cols-1 md:grid-cols-5">
        <div class="mt-20 md:col-start-2 md:col-span-5">
          <div>
            <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Editor
            </div>
            <ul>
              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
                <div class="flex flex-row">
                  <div class="flex h-3 w-3 my-auto">
                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                  </div>
                  <div class="ml-4 ">
                    Key bind: Vim (Huge fan!)
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
                    Code editor: JetBrains
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
                    Console app : iTerm2 with ZSH
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div class="mt-20 text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Apps
            </div>
            <ul>
              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
                <div class="flex flex-row">
                  <div class="flex h-3 w-3 my-auto">
                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                  </div>
                  <div class="ml-4 ">
                    Web browser : Brave
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
                    VPN client (for mobile) : Orchid
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
                    To-do : Trello
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
                    Controls : Better Touch Tools
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div class="mt-20 text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Hosting
            </div>
            <ul>
              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
                <div class="flex flex-row">
                  <div class="flex h-3 w-3 my-auto">
                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                  </div>
                  <div class="ml-4 ">
                    Front-end : Netlify
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
                    Back-end : Heroku
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div class="mt-20 text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Tech stack
            </div>
            <ul>
              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
                <div class="flex flex-row">
                  <div class="flex h-3 w-3 my-auto">
                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />
                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />
                  </div>
                  <div class="ml-4 ">
                    Vue.js
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
                    Nuxt.js
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
                    Vanilla JavaScript
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
                    JQuery
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
                    HTML5
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
                    CSS3
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
                    TailwindCSS
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
                    jQuery
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
                    Python
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
                    Flask
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
                    FastAPI
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
                    PyTorch
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
                    MongoDB
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
                    Amazon Web Service (AWS)
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
                    Docker
                  </div>
                </div>
              </li>
              <!--              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">-->
              <!--                <div class="flex flex-row">-->
              <!--                  <div class="flex h-3 w-3 my-auto">-->
              <!--                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />-->
              <!--                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />-->
              <!--                  </div>-->
              <!--                  <div class="ml-4 ">-->
              <!--                    TailwindCSS-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">-->
              <!--                <div class="flex flex-row">-->
              <!--                  <div class="flex h-3 w-3 my-auto">-->
              <!--                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />-->
              <!--                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />-->
              <!--                  </div>-->
              <!--                  <div class="ml-4 ">-->
              <!--                    TailwindCSS-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">-->
              <!--                <div class="flex flex-row">-->
              <!--                  <div class="flex h-3 w-3 my-auto">-->
              <!--                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />-->
              <!--                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />-->
              <!--                  </div>-->
              <!--                  <div class="ml-4 ">-->
              <!--                    TailwindCSS-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
              <!--              <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">-->
              <!--                <div class="flex flex-row">-->
              <!--                  <div class="flex h-3 w-3 my-auto">-->
              <!--                    <span class="h-3 w-3 absolute inline-flex rounded-full bg-vgreen opacity-75" />-->
              <!--                    <span class="animate-ping relative inline-flex rounded-full h-3 w-3 bg-vgreen" />-->
              <!--                  </div>-->
              <!--                  <div class="ml-4 ">-->
              <!--                    TailwindCSS-->
              <!--                  </div>-->
              <!--                </div>-->
              <!--              </li>-->
            </ul>
          </div>
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
