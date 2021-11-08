<template>
  <div>
    <FollowCursor />
    <div class="px-10 pb-20 w-full h-full md:h-auto bg-vbg shadow grid grid-cols-1 md:grid-cols-5">
      <div class="md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <nuxt-img
          class="col-start-1 mx-auto my-auto"
          src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636376260/me_fby0rl.png"
          width="250"
          height="200"
        />
        <div class="col-start-1 md:col-start-2 md:col-span-2 grid grid-rows-2">
          <div class="row-start-1 my-auto font-black text-4xl text-vgreen">
            Hello!
          </div>
          <div class="row-start-2 my-auto text-gray-400">
            I'm Reo, a ramen-loving full-stack developer/researcher with a strong academic background in Computer Science.
            I was born in Tokyo, Japan 🇯🇵 &nbsp; but I spent my childhood in New York, US 🇺🇸 &nbsp; and now I am based in Leeds, UK 🇬🇧.
            As a multi-cultural in-betweener, I find joy in working with international clients from different backgrounds.
          </div>
        </div>
      </div>
      <!--  Work experience   -->
      <div class="mt-10 md:mt-20 md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <div class="my-auto md:col-start-1 md:col-span-2 text-2xl md:text-4xl font-black text-vgreen">
          Work experience
          <!--          <FontAwesomeIcon-->
          <!--            class="mx-auto my-auto md:col-start-1"-->
          <!--            :icon="['fab', 'vuejs']"-->
          <!--            :style="{ 'font-size': '40px', 'color': 'white' }"-->
          <!--          />-->
        </div>
        <div class="mt-10 col-start-1 col-span-3 grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="[ 'fas', 'briefcase' ]"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                Jul 2019 - Current. Leeds, UK 🇬🇧
              </div>
              <div class="text-2xl text-white font-black">
                Co-founder
              </div>
              <div class="text-sm text-gray-400 font-black">
                Seeai LTD.
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
                Jul 2019 - Current. Leeds, UK 🇬🇧
              </div>
              <div class="text-2xl text-white font-black">
                Visiting Researcher / Graduate Entrepreneur
              </div>
              <div class="text-sm text-gray-400 font-black">
                University of Leeds
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
                Jun 2019 - Jul 2019. Tokyo, UK 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Collaborative Researcher
              </div>
              <div class="text-sm text-gray-400 font-black">
                University of Leeds
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
                Apr 2018 - Sep 2018. Tokyo, Japan 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Machine Learning Engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                Global Walkers
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
                Apr 2018 - Sep 2018. Tokyo, Japan 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Software Engineer
              </div>
              <div class="text-sm text-gray-400 font-black">
                Gocco.
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
                Apr 2016 - Sep 2018. Tokyo, Japan 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Product Manager (PM)
              </div>
              <div class="text-sm text-gray-400 font-black">
                Castalia
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
                Apr 2014 - Sep 2015. Tokyo, Japan 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Product Manager (PM)
              </div>
              <div class="text-sm text-gray-400 font-black">
                Retty Inc.
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Education   -->
      <div class="mt-10 md:mt-20 md:col-start-2 md:col-end-5 grid grid-cols-1 md:grid-cols-3">
        <div class="my-auto md:col-start-1 md:col-span-2 text-2xl md:text-4xl font-black text-vgreen">
          Education
          <!--          <FontAwesomeIcon-->
          <!--            class="mx-auto my-auto md:col-start-1"-->
          <!--            :icon="['fab', 'vuejs']"-->
          <!--            :style="{ 'font-size': '40px', 'color': 'white' }"-->
          <!--          />-->
        </div>
        <div class="mt-10 col-start-1 col-span-3 grid grid-cols-1 md:grid-cols-6">
          <div class="col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'graduation-cap']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                2018 - 2019. Leeds, UK 🇬🇧
              </div>
              <div class="text-2xl text-white font-black">
                Master of Science - Computer Science (Graduated as the top student in the school)
              </div>
              <div class="text-sm text-gray-400 font-black">
                University of Leeds
              </div>
            </div>
          </div>
          <div class="mt-10 col-span-6 flex justify-start">
            <FontAwesomeIcon
              class="my-auto md:col-start-1"
              :icon="['fas', 'graduation-cap']"
              :style="{ 'font-size': '30px', 'color': 'white' }"
            />
            <div class="ml-10 my-auto md:px-0 md:mt-0 md:col-start-1 md:col-span-5">
              <div class="text-sm text-gray-400 font-black">
                2013 - 2018. Tokyo, Japan 🇯🇵
              </div>
              <div class="text-2xl text-white font-black">
                Bachelor of Science - Information and Communication Sciences
              </div>
              <div class="text-sm text-gray-400 font-black">
                Sophia University
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
