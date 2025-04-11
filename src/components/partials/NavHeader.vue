<template>
  <header>
    <nav class="bg-gray-800 p-4 w-full">
      <div class="container mx-auto flex flex-wrap justify-between items-center">
        <RouterLink to="/" class="flex items-center">
          <img src="/logos/logo.png" alt="Logo" class="h-12 w-21 mr-2">
          <div class="text-white text-lg font-bold">{{ $t('portfolio') }}</div>
        </RouterLink>

        <div class="block lg:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div :class="{'block': isMenuOpen, 'hidden': !isMenuOpen}" class="w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out">
          <div class="text-sm lg:flex-grow flex flex-col lg:flex-row ml-20">
            <RouterLink
                v-for="link in links"
                :key="link.name"
                :to="link.l"
                class="w-full text-gray-300 mr-4 flex items-center hover:text-white transition-colors duration-300"
            >

            <i :class="['fas', `fa-${link.icon}`, 'mr-2', { 'text-white': link.isHovered }]"></i>
              <span
                  @mouseover="link.isHovered = true"
                  @mouseleave="link.isHovered = false"
                  class="nav-link relative"
                  :class="{'text-white': link.isHovered}"
              >
                {{ $t(link.name) }}
              </span>
            </RouterLink>
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
import { reactive, ref } from "vue";
import { i18n, locale } from '@/i18n';
import { RouterLink } from "vue-router";

const links = reactive([
  {name: "home", isHovered: false, l: "/", icon: "home"},
  {name: "myProjects", isHovered: false, l: "/projects", icon: "project-diagram"},
  {name: "skills", isHovered: false, l: "/skills", icon: "tools"},
  {name: "aboutMe", isHovered: false, l: "/aboutMe", icon: "user"},
]);

function changeLanguage() {
  const newLocale = locale.value === 'en' ? 'fr' : 'en';
  locale.value = newLocale;
  i18n.global.locale = newLocale;
}

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
.nav-link {
  @apply relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-white after:w-0 after:transition-all hover:after:w-full;
}

@media (max-width: 1024px) {
  .nav-link {
    padding: 10px 0;
  }
}
</style>