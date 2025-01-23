<template>
  <header>
    <nav class="bg-gray-800 p-4 w-full">
      <div class="container mx-auto flex flex-wrap justify-center items-center">
        <div class="flex items-center">
          <img src="/logos/logo.png" alt="Logo" class="h-12 w-21 mr-2">
          <div class="text-white text-lg font-bold">{{ $t('portfolio') }}</div>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow flex ml-20">
            <a
                v-for="link in links"
                :key="link.name"
                :href="link.l"
                class="w-full text-gray-300 mr-4"
                :class="{ navLink: link.isHovered }"
                @mouseover="link.isHovered = true"
                @mouseleave="link.isHovered = false"
            >
              {{ $t(link.name) }}
            </a>
          </div>
        </div>
        <div
            class="relative w-16 h-8 bg-gray-600 rounded-full flex items-center justify-between p-1 cursor-pointer"
            @click="changeLanguage"
        >

          <div
              class="w-6 h-6 bg-white rounded-full transform transition-transform duration-300 ease-in-out"
              v-bind:class="locale === 'fr' ? 'translate-x-8' : 'translate-x-0'"
          >

          </div>
          <span class="absolute left-2 text-xs font-bold text-gray-800">EN</span>
          <span class="absolute right-2 text-xs font-bold text-gray-800">FR</span>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();

const links = reactive([
  {name: "home", isHovered: false, l: "/"},
  {name: "myProjects", isHovered: false, l: "/projects"},
  {name: "skills", isHovered: false, l: "/skills"},
  {name: "experiences", isHovered: false, l: "/experiences"},
  {name: "aboutMe", isHovered: false, l: "/about"},
  {name: "contactMe", isHovered: false, l: "/contact"},
]);

function changeLanguage() {
  locale.value = locale.value === 'en' ? 'fr' : 'en';
  console.log(locale.value);
}
</script>

<style scoped>
.navLink {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  font-weight: bold;
  transition: ease-in-out 0.5s;
}

</style>