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
            class="col-span-2 my-auto text-2xl sm:text-4xl font-black text-vgreen"
          >
            Hi,&nbsp;I'm Reo 👋
            <br>
            I love Web Development,&nbsp;Machine learning,&nbsp;and Vim!
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
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 text-xl font-medium">
              I am a full-stack developer / machine learning engineer based in Leeds, UK. I can do remote work for any where in the world.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fab', 'vuejs']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 text-xl font-medium">
              I am a big fan of working with Vue.js (and Nuxt.js). That is my go-to for frontend work.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fab', 'python']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 text-xl font-medium">
              For backend, I like to use Python because of my background with the language.
            </div>
          </div>
          <div class="mt-20 grid grid-cols-1 md:grid-cols-6">
            <FontAwesomeIcon
              class="mx-auto my-auto md:col-start-1"
              :icon="['fas', 'robot']"
              :style="{ 'font-size': '50px', 'color': 'white' }"
            />
            <div class="px-10 md:px-0 mt-5 md:mt-0 md:cols-start-2 md:col-span-5 my-auto text-gray-400 text-xl font-medium">
              For Deep Learning projects, I am a huge advocate for PyTorch.
            </div>
          </div>
        </div>
        <!--   Projects     -->
        <div class="mt-20">
          <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
            Projects 🏋🏼‍️
          </div>
          <div class="col-start-1">
            <a
              href="https://www.seeai.co.uk/"
            >
              <project-card
                class="mt-10"
                img-url="https://uploads-ssl.webflow.com/61375c04a4c6d46a8a7fbf1e/6137776ec2e0c03f09c63b7f_Asset%208.svg"
                description="Co-founder of Seeai, a med-tech startup working to solve the radiologist crisis in the UK. We are developing an AI that can detect bone fractures as well as radiologists in collaboration with the NHS."
              />
            </a>
            <a
              href="https://lemaradiology.com/"
            >
              <project-card
                class="mt-10"
                img-url="https://lemaradiology.com/static/assets/Lema%E2%80%94assets%E2%80%94SVG%E2%80%9415.svg"
                description="An online training environment for radiology trainees. Developed during the COVID-19 pandemic to help medical students affected by the social distancing measures to practice image interpretation skills without having to be present at hospitals."
              />
            </a>
            <project-card
              class="mt-10"
              img-url="https://crypto-joe.herokuapp.com/_nuxt/img/logo.5641968.png"
              description="[Coming Soon] An e-commerce website to purchase crypto inspired coffee. It will allow payment with crypto, including BAT."
            />
            <!--            <project-card-->
            <!--              class="mt-10"-->
            <!--              img-url="https://www.upwork.com/att/download/portfolio/persons/uid/1451464343107919872/profile/projects/files/95d88e03-dd99-4516-8fd1-cfdb5fb1b0df"-->
            <!--              description="Usually though, you’ll want every prop to be a specific type of value. In these cases, you can list props as an object, where the properties’ names and values contain the prop names and types, respectively"-->
            <!--            />-->
            <!--          </div>-->
          </div>
          <div class="mt-20">
            <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Publications 🎓
            </div>
            <ul>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                <a href="https://arxiv.org/abs/1903.05761">
                  🎓&nbsp; LPM: Learnable Pooling Module for Efficient Full-Face Gaze Estimation
                </a>
                <p class="text-sm ml-10">
                  - 13/03/2019 @ FG2019
                </p>
              </li>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                🎓&nbsp; Estimating 2D Gaze Coordinates from Efficiently Compressed Face Images
                <p class="text-sm ml-10">
                  - 03/08/2018 @ PRMU
                </p>
              </li>
            </ul>
          </div>
          <div class="mt-20">
            <div class="text-4xl pl-4 md:pl-4 text-vgreen font-black">
              Awards 🏆
            </div>
            <ul>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                ✨ Santander's Emerging Entrepreneurs Entrepreneurship Awards - Nominee
                <p class="text-sm ml-10">
                  - 05/01/2020
                </p>
              </li>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                ✨ Tech Nation Rising Star Regional Winner
                <p class="text-sm ml-10">
                  - 01/03/2019
                </p>
              </li>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                ✨ The Univesity of Leeds Business Plan Competition - First place
                <p class="text-sm ml-10">
                  - 01/03/2019
                </p>
              </li>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                ✨ The Univesity of Sophia Summer Hackathon - First place
                <p class="text-sm ml-10">
                  - 01/08/2017
                </p>
              </li>
              <li class="mt-5 text-l text-gray-400 ml-4 md:ml-0">
                ✨ Next Entrepreneur Summit - First place $10,000 Prize
                <p class="text-sm ml-10">
                  - 01/03/2013
                </p>
              </li>
            </ul>
          </div>
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
