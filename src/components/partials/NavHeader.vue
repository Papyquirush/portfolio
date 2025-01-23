<template>
  <header>
    <nav class="bg-gray-800 p-4 w-full">
      <div class="container mx-auto flex flex-wrap justify-between items-center">
        <div class="flex items-center">
          <img src="/logos/logo.png" alt="Logo" class="h-12 w-21 mr-2">
          <div class="text-white text-lg font-bold">{{ $t('portfolio') }}</div>
        </div>
        <div class="block lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow flex flex-col lg:flex-row ml-20">
            <a
                v-for="link in links"
                :key="link.name"
                :href="link.l"
                class="w-full text-gray-300 mr-4 flex items-center"
            >
              <i :class="`fas fa-${link.icon} mr-2`"></i>
              <span
                  @mouseover="link.isHovered = true"
                  @mouseleave="link.isHovered = false"
                  :class="{ navLink: link.isHovered }"
              >
                {{ $t(link.name) }}
              </span>
            </a>
          </div>
          <div
              class="relative w-16 h-8 bg-gray-600 rounded-full flex items-center justify-between p-1 cursor-pointer"
              @click="changeLanguage"
              :class="{'ml-20 mt-4': isMenuOpen, '': !isMenuOpen}"
          >
            <div
                class="w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ease-in-out"
                :class="locale === 'fr' ? 'translate-x-8' : 'translate-x-0'"
            ></div>
            <span class="absolute left-2 text-xs font-bold text-gray-800">EN</span>
            <span class="absolute right-2 text-xs font-bold text-gray-800">FR</span>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import {reactive, ref} from "vue";
import {useI18n} from 'vue-i18n';

const {locale} = useI18n();

const links = reactive([
  {name: "home", isHovered: false, l: "/", icon: "home"},
  {name: "myProjects", isHovered: false, l: "/projects", icon: "project-diagram"},
  {name: "skills", isHovered: false, l: "/skills", icon: "tools"},
  {name: "experiences", isHovered: false, l: "/experiences", icon: "briefcase"},
  {name: "aboutMe", isHovered: false, l: "/about", icon: "user"},
  {name: "contactMe", isHovered: false, l: "/contact", icon: "envelope"},
]);

function changeLanguage() {
  locale.value = locale.value === 'en' ? 'fr' : 'en';
  console.log(locale.value);
}

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.navLink {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  font-weight: bold;
  transition: ease-in-out 0.3s;
}




</style>