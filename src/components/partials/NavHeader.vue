<template>
  <header>
    <nav class="bg-gray-800 p-4 w-full">
      <div class="container mx-auto flex flex-wrap justify-center items-center">
        <div class="flex items-center">
          <img src="/logos/logo.png" alt="Logo" class="h-12 w-21 mr-2">
          <div class="text-white text-lg font-bold">Mon Portfolio</div>
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
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { reactive } from "vue";

// Liste des liens avec leur état de survol
const links = reactive([
  { name: "Home", isHovered: false,l:"/" },
  { name: "My Projects", isHovered: false,l:"/projects" },
  { name: "Skills", isHovered: false,l:"/skills"},
  { name: "Experiences", isHovered: false,l:"/experiences" },
  { name: "About Me", isHovered: false,l:"/about" },
  { name: "Contact Me", isHovered: false,l:"/contact" },
]);
</script>

<style scoped>
.navLink {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
  color: aliceblue;
  font-weight: bold;
}
</style>
