<template>
  <div>
    <FollowCursor />
    <div class="px-10 pb-20 w-full h-screen md:h-auto bg-vbg shadow grid grid-cols-1 md:grid-cols-5">
      <div class="md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <nuxt-img
          class="col-start-1 mx-auto"
          src="/me.png"
          width="250"
        />
        <div class="col-start-1 md:col-start-2 md:col-span-2 grid grid-rows-2">
          <div class="row-start-1 my-auto font-black text-4xl text-vgreen">
            Hello !
          </div>
          <div class="row-start-2 my-auto text-gray-400">
            The transform property applies a 2D or 3D transformation to an element. This property allows you to rotate, scale, move, skew, etc., elements.
          </div>
        </div>
      </div>
      <!--  Work experience   -->
      <div class="md:mt-20 md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <div class="my-auto md:col-start-1 md:col-span-2 text-2xl md:text-4xl font-black text-vgreen">
          Work experience
          <FontAwesomeIcon
            class="mx-auto my-auto md:col-start-1"
            :icon="['fab', 'vuejs']"
            :style="{ 'font-size': '40px', 'color': 'white' }"
          />
        </div>
        <div class="md:mt-10 col-start-1 col-span-3 grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Education   -->
      <div class="md:mt-20 md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <div class="my-auto md:col-start-1 md:col-span-2 text-2xl md:text-4xl font-black text-vgreen">
          Education
          <FontAwesomeIcon
            class="mx-auto my-auto md:col-start-1"
            :icon="['fab', 'vuejs']"
            :style="{ 'font-size': '40px', 'color': 'white' }"
          />
        </div>
        <div class="md:mt-10 col-start-1 col-span-3 grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'briefcase']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
              <div class="text-2xl text-white font-black">
                full-stack developer / machine learning engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                I am a full-stack developer / machine learning engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FollowCursor from '../components/FollowCursor'

export default {
  name: 'about.vue',
  components: {
    FollowCursor
  },
  transition: {
    name: 'home'
  }
}
</script>

<style>
  .home-enter-active, .home-leave-active { transition: opacity .2s; }
  .home-enter, .home-leave-active { opacity: 0; }
</style>
