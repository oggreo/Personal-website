<template>
  <div>
    <FollowCursor />
    <div class="pb-20 w-full h-full md:h-auto bg-vbg shadow grid grid-cols-1 md:grid-cols-5">
      <div class="md:col-start-2 md:col-end-5">
        <!--   Banner     -->
        <div class="px-10 grid md:grid-cols-3 gap-10 mt-10">
          <nuxt-img
            v-show="equipWeapon"
            class="row-start-2 md:row-start-1"
            src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/4_vrpwgl.png"
            height="600"
          />
          <nuxt-img
            v-show="!equipWeapon"
            class="row-start-2 md:row-start-1"
            src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/3_p2vhbk.png"
            height="600"
          />
          <div
            class="col-span-2 my-auto text-4xl font-black text-vgreen"
          >
            Hi, I'm Reo 👋
            <br>
            I love Web Development and Machine learning !
            <br>
            <br>
            💻  🤖  🥷
          </div>
        </div>
        <!--   Description     -->
        <div class="mt-20">
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fas', 'laptop-code']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 font-black">
              I am a full-stack developer / machine learning engineer based in Leeds, the UK!
              I can do remote work for any place in the world.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fab', 'vuejs']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 font-black">
              I am a full-stack developer / machine learning engineer based in Leeds, the UK!
              I can do remote work for any place in the world.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fab', 'python']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 font-black">
              I am a full-stack developer / machine learning engineer based in Leeds, the UK!
              I can do remote work for any place in the world.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fas', 'robot']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 font-black">
              I am a full-stack developer / machine learning engineer based in Leeds, the UK!
              I can do remote work for any place in the world.
            </div>
          </div>
        </div>
        <!--   Projects     -->
        <div class="mt-20">
          <div class="mt-20">
            <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Projects 🏋🏼‍️
            </div>
            <project-card
              class="mt-10"
              img-url="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/wearable_wjfnwy.png"
              description="Usually though, you’ll want every prop to be a specific type of value. In these cases, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively"
            />
            <project-card
              class="mt-10"
              img-url="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/wearable_wjfnwy.png"
              description="Usually though, you’ll want every prop to be a specific type of value. In these cases, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively"
            />
            <project-card
              class="mt-10"
              img-url="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/wearable_wjfnwy.png"
              description="Usually though, you’ll want every prop to be a specific type of value. In these cases, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively"
            />
            <project-card
              class="mt-10"
              img-url="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636220110/wearable_wjfnwy.png"
              description="Usually though, you’ll want every prop to be a specific type of value. In these cases, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively"
            />
          </div>
        </div>
        <div class="mt-20">
          <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Publications 🏆
          </div>
          <ul>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              ✨ Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <p class="text-sm ml-10">
                - 01/01/2021
              </p>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              ✨ Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <p class="text-sm ml-10">
                - 01/01/2021
              </p>
            </li>
          </ul>
        </div>
        <div class="mt-20">
          <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Awards 🏆
          </div>
          <ul>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              ✨ Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <p class="text-sm ml-10">
                - 01/01/2021
              </p>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              ✨ Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <p class="text-sm ml-10">
                - 01/01/2021
              </p>
            </li>
            <li class="mt-5 text-xl text-gray-400 ml-4 md:ml-0">
              ✨ Lorem ipsum dolor sit amet, consectetur adipisicing elit
              <p class="text-sm ml-10">
                - 01/01/2021
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard'
import FollowCursor from '../components/FollowCursor'

export default {
  components: {
    ProjectCard,
    FollowCursor
  },
  transition: 'home',
  data () {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }
  },
  computed: {
    equipWeapon () {
      return this.y.value > (this.height.value / 2)
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

<style>
  .home-enter-active, .home-leave-active { transition: opacity .2s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
