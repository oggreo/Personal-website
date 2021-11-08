<template>
  <nav class="w-full bg-vbg shadow">
    <div
      class="container px-6 h-16 flex justify-between items-center lg:items-stretch mx-auto"
    >
      <div class="flex items-center">
        <div class="mr-10 flex items-center">
          <nuxt-img
            src="https://res.cloudinary.com/dk5s8ulry/image/upload/v1636376260/me_fby0rl.png"
            width="60"
            quality="100"
            :class="spin ? 'animate-spin': ''"
          />
          <!--          <svg-->
          <!--            id="logo"-->
          <!--            aria-label="Home"-->
          <!--            enable-background="new 0 0 300 300"-->
          <!--            height="44"-->
          <!--            viewBox="0 0 300 300"-->
          <!--            width="43"-->
          <!--            xmlns="http://www.w3.org/2000/svg"-->
          <!--            xmlns:xlink="http://www.w3.org/1999/xlink"-->
          <!--          >-->
          <!--            <g>-->
          <!--              <path-->
          <!--                fill="#4c51bf"-->
          <!--                d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"-->
          <!--              />-->
          <!--            </g>-->
          <!--          </svg>-->
          <h3
            class="text-base font-bold tracking-normal leading-tight ml-3 lg:block"
            :class="hover ? 'text-vgreen' : 'text-white'"
            @mouseover="hover = true"
            @mouseleave="hover = false"
            @click="spin = !spin"
          >
            <a
              href="#"
            >
              Reo Ogusu
            </a>
          </h3>
        </div>
        <ul class="hidden md:flex items-center h-full">
          <nuxt-link
            to="/"
          >
            <li
              class="cursor-pointer h-full flex items-center font-black text-sm tracking-normal transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-11"
              :class="isMainClicked ? 'text-vgreen' : 'text-white'"
              @click="isMainClicked = true; isTechClicked = false; isAboutClicked = false"
            >
              <span class="mr-2">
                <FontAwesomeIcon
                  class="icon icon-tabler icon-tabler-grid mx-auto my-auto md:col-start-1"
                  :icon="['fas', 'home']"
                  :style="isMainClicked ? { 'font-size': '20px', 'color': '#85f589' } : { 'font-size': '20px', 'color': 'white' }"
                />
                <!--                <svg-->
                <!--                  xmlns="http://www.w3.org/2000/svg"-->
                <!--                  class="icon icon-tabler icon-tabler-grid"-->
                <!--                  width="20"-->
                <!--                  height="20"-->
                <!--                  viewBox="0 0 24 24"-->
                <!--                  stroke-width="1.5"-->
                <!--                  stroke="currentColor"-->
                <!--                  fill="none"-->
                <!--                  stroke-linecap="round"-->
                <!--                  stroke-linejoin="round"-->
                <!--                >-->
                <!--                  <path stroke="none" d="M0 0h24v24H0z" />-->
                <!--                  <rect x="4" y="4" width="6" height="6" rx="1" />-->
                <!--                  <rect x="14" y="4" width="6" height="6" rx="1" />-->
                <!--                  <rect x="4" y="14" width="6" height="6" rx="1" />-->
                <!--                  <rect x="14" y="14" width="6" height="6" rx="1" />-->
                <!--                </svg>-->
              </span>
              Main
            </li>
          </nuxt-link>
          <nuxt-link
            to="/about"
          >
            <li
              :class="isAboutClicked ? 'text-vgreen' : 'text-white'"
              class="cursor-pointer h-full flex items-center font-black text-sm text-white mx-10 tracking-normal transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-11"
              @click="isAboutClicked = true; isTechClicked = false; isMainClicked = false"
            >
              <FontAwesomeIcon
                class="icon icon-tabler icon-tabler-grid mx-auto my-auto md:col-start-1"
                :icon="['fas', 'child']"
                :style="isAboutClicked ? { 'font-size': '20px', 'color': '#85f589' } : { 'font-size': '20px', 'color': 'white' }"
              />
              &nbsp;
              <!--              <span class="mr-2">-->
              <!--                <svg-->
              <!--                  xmlns="http://www.w3.org/2000/svg"-->
              <!--                  class="icon icon-tabler icon-tabler-puzzle"-->
              <!--                  width="20"-->
              <!--                  height="20"-->
              <!--                  viewBox="0 0 24 24"-->
              <!--                  stroke-width="1.5"-->
              <!--                  stroke="currentColor"-->
              <!--                  fill="none"-->
              <!--                  stroke-linecap="round"-->
              <!--                  stroke-linejoin="round"-->
              <!--                >-->
              <!--                  <path stroke="none" d="M0 0h24v24H0z" />-->
              <!--                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />-->
              <!--                </svg>-->
              <!--              </span>-->
              About
            </li>
          </nuxt-link>
          <!--          <li class="cursor-pointer h-full flex items-center text-sm hover:text-vgreen text-white mr-10 tracking-normal transition duration-150 ease-in-out">-->
          <!--            <span class="mr-2">-->
          <!--              <svg-->
          <!--                xmlns="http://www.w3.org/2000/svg"-->
          <!--                class="icon icon-tabler icon-tabler-compass"-->
          <!--                width="20"-->
          <!--                height="20"-->
          <!--                viewBox="0 0 24 24"-->
          <!--                stroke-width="1.5"-->
          <!--                stroke="currentColor"-->
          <!--                fill="none"-->
          <!--                stroke-linecap="round"-->
          <!--                stroke-linejoin="round"-->
          <!--              >-->
          <!--                <path stroke="none" d="M0 0h24v24H0z" />-->
          <!--                <polyline points="8 16 10 10 16 8 14 14 8 16" />-->
          <!--                <circle cx="12" cy="12" r="9" />-->
          <!--              </svg>-->
          <!--            </span>-->
          <!--            Performance-->
          <!--          </li>-->

          <nuxt-link
            to="/uses"
          >
            <li
              :class="isTechClicked ? 'text-vgreen' : 'text-white'"
              class="cursor-pointer h-full flex items-center font-black text-sm text-white tracking-normal transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-11"
              @click="isTechClicked = true; isAboutClicked = false; isMainClicked = false"
            >
              <span class="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-code"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
              </span>
              Uses
            </li>
          </nuxt-link>
        </ul>
      </div>
      <div class="h-full hidden md:flex items-center justify-end" />
      <div
        class="flex items-center md:hidden"
      >
        <ul class="p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16 hidden">
          <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-vgreen focus:text-vgreen focus:outline-none">
            <nuxt-link
              to="/"
            >
              <div class="flex items-center">
                <FontAwesomeIcon
                  class="icon icon-tabler icon-tabler-grid mx-auto my-auto md:col-start-1"
                  :icon="['fas', 'home']"
                />
                <!--                  :style="isHome ? { 'font-size': '20px', 'color': '#85f589' } : { 'font-size': '20px', 'color': 'white' }"-->
                &nbsp;
                <!--                <svg-->
                <!--                  xmlns="http://www.w3.org/2000/svg"-->
                <!--                  class="icon icon-tabler icon-tabler-grid"-->
                <!--                  width="20"-->
                <!--                  height="20"-->
                <!--                  viewBox="0 0 24 24"-->
                <!--                  stroke-width="1.5"-->
                <!--                  stroke="currentColor"-->
                <!--                  fill="none"-->
                <!--                  stroke-linecap="round"-->
                <!--                  stroke-linejoin="round"-->
                <!--                >-->
                <!--                  <path stroke="none" d="M0 0h24v24H0z" />-->
                <!--                  <rect x="4" y="4" width="6" height="6" rx="1" />-->
                <!--                  <rect x="14" y="4" width="6" height="6" rx="1" />-->
                <!--                  <rect x="4" y="14" width="6" height="6" rx="1" />-->
                <!--                  <rect x="14" y="14" width="6" height="6" rx="1" />-->
                <!--                </svg>-->
                <span class="ml-2 font-bold">Main</span>
              </div>
            </nuxt-link>
          </li>

          <!--          <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-vgreen focus:text-vgreen focus:outline-none">-->
          <li class="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-vgreen focus:text-vgreen focus:outline-none">
            <nuxt-link
              to="/about"
            >
              <div class="flex items-center">
                <FontAwesomeIcon
                  class="icon icon-tabler icon-tabler-grid mx-auto my-auto md:col-start-1 mr-2"
                  :icon="['fas', 'child']"
                />
                <!--                <svg-->
                <!--                  xmlns="http://www.w3.org/2000/svg"-->
                <!--                  class="icon icon-tabler icon-tabler-puzzle"-->
                <!--                  width="20"-->
                <!--                  height="20"-->
                <!--                  viewBox="0 0 24 24"-->
                <!--                  stroke-width="1.5"-->
                <!--                  stroke="currentColor"-->
                <!--                  fill="none"-->
                <!--                  stroke-linecap="round"-->
                <!--                  stroke-linejoin="round"-->
                <!--                >-->
                <!--                  <path stroke="none" d="M0 0h24v24H0z" />-->
                <!--                  <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />-->
                <!--                </svg>-->
                <span class="ml-2 font-bold">About</span>
              </div>
            </nuxt-link>
            <!--            <ul class="ml-6 mt-1 hidden">-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Landing Pages-->
            <!--              </li>-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Templates-->
            <!--              </li>-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal pt-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Components-->
            <!--              </li>-->
            <!--            </ul>-->
          </li>
          <!--          <li class="md:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-vgreen flex items-center focus:text-vgreen focus:outline-none">-->
          <!--            <svg-->
          <!--              xmlns="http://www.w3.org/2000/svg"-->
          <!--              class="icon icon-tabler icon-tabler-compass"-->
          <!--              width="20"-->
          <!--              height="20"-->
          <!--              viewBox="0 0 24 24"-->
          <!--              stroke-width="1.5"-->
          <!--              stroke="currentColor"-->
          <!--              fill="none"-->
          <!--              stroke-linecap="round"-->
          <!--              stroke-linejoin="round"-->
          <!--            >-->
          <!--              <path stroke="none" d="M0 0h24v24H0z" />-->
          <!--              <polyline points="8 16 10 10 16 8 14 14 8 16" />-->
          <!--              <circle cx="12" cy="12" r="9" />-->
          <!--            </svg>-->
          <!--            <span class="ml-2 font-bold">Performance</span>-->
          <!--          </li>-->
          <li class="flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-vgreen focus:text-vgreen focus:outline-none flex justify-center">
            <nuxt-link
              to="/uses"
            >
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-code"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <polyline points="7 8 3 12 7 16" />
                  <polyline points="17 8 21 12 17 16" />
                  <line x1="14" y1="4" x2="10" y2="20" />
                </svg>
                <span class="ml-2 font-bold">Uses</span>
              </div>
            </nuxt-link>
            <!--            <ul class="ml-6 mt-1 hidden">-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Landing Pages-->
            <!--              </li>-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal py-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Templates-->
            <!--              </li>-->
            <!--              <li class="cursor-pointer text-gray-600 text-xs leading-3 tracking-normal pt-2 hover:bg-vgreen hover:text-white px-3 font-normal">-->
            <!--                Components-->
            <!--              </li>-->
            <!--            </ul>-->
          </li>
        </ul>
        <svg
          aria-haspopup="true"
          aria-label="Main Menu"
          xmlns="http://www.w3.org/2000/svg"
          class="visible xl:hidden icon icon-tabler icon-tabler-menu show-m-menu cursor-pointer"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          @click="MenuHandler($event, true)"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
        <div
          class="hidden close-m-menu p-1"
          @click="MenuHandler($event, false)"
        >
          <svg
            class="cursor-pointer"
            aria-label="Close"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'BlackLeftAlignedWithIcons',
  data () {
    return {
      spin: false,
      profilePhoto: 'https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_1.png',
      hover: false,
      isMainClicked: true,
      isAboutClicked: false,
      isTechClicked: false
    }
  },
  methods: {
    dropdownHandler (event) {
      const single = event.currentTarget.getElementsByTagName('ul')[0]
      single.classList.toggle('hidden')
    },
    MenuHandler (el, val) {
      const MainList = el.currentTarget.parentElement.getElementsByTagName('ul')[0]
      const closeIcon = el.currentTarget.parentElement.getElementsByClassName('close-m-menu')[0]
      const showIcon = el.currentTarget.parentElement.getElementsByClassName('show-m-menu')[0]
      if (val) {
        MainList.classList.remove('hidden')
        el.currentTarget.classList.add('hidden')
        closeIcon.classList.remove('hidden')
      } else {
        showIcon.classList.remove('hidden')
        MainList.classList.add('hidden')
        el.currentTarget.classList.add('hidden')
      }
    },
    searchHandler (event) {
      const Input = event.currentTarget.parentElement.getElementsByTagName('input')[0]
      Input.classList.toggle('w-0')
      Input.classList.toggle('w-24')
    }
  }
}
</script>
