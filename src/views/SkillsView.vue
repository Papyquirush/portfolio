<template>
  <div class="p-10">
    <!-- Liste des catégories -->
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-10">
      <div
          v-for="(category, index) in categories.category"
          :key="index"
          class="card"
          @click="scrollToCategory(category.id)"
      >
        <h2 class="text-xl font-bold">{{ $t(category.title) }}</h2>
        <p class="text-gray-600">{{ category.description }}</p>
      </div>
    </div>

    <!-- Sections des compétences -->
    <div v-for="(category, index) in categories.category" :key="index">
      <div
          v-if="activeCategory === category.id"
          :id="category.id"
          class="section transition-opacity duration-500"
      >
        <h2 class="text-2xl font-bold mb-6">{{ $t(category.title) }}</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="(skill, i) in category.skills" :key="i" class="skill-block">
            <img :src="getSkillLogo(skill.logo)" :alt="skill.name" class="skill-logo" />

            <h3 class="text-lg font-bold mt-2">{{ $t(skill.name) }}</h3>

            <div class="progress-bar-container">
              <div class="progress-bar" :style="{ width: skill.level + '%' }"></div>
            </div>

            <p class="text-sm font-semibold text-gray-700 mt-1">
              Niveau : {{ skill.level }}%
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { categories } from '@/interface/categories.ts';

const activeCategory = ref("backend");

const getSkillLogo = (path) => {
  return new URL(path, import.meta.url).href;
};

// Fonction pour scroller vers la section sélectionnée (uniquement en mobile)
const scrollToCategory = async (id) => {
  activeCategory.value = id;

  // Vérifier si on est en mode mobile (moins de 1024px de large)
  if (window.innerWidth < 1024) {
    await nextTick(); // Attendre la mise à jour du DOM

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};
</script>


<style scoped>
.card {
  @apply bg-white shadow-lg p-6 rounded-2xl cursor-pointer hover:scale-105 transition-transform duration-300;
}

.section {
  @apply mt-6 p-6 bg-gray-100 rounded-lg shadow-md;
}

.skill-block {
  @apply bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-all duration-300;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skill-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.progress-bar-container {
  @apply w-full bg-gray-200 rounded-full mt-2;
  height: 8px;
}

.progress-bar {
  @apply bg-blue-500 h-full rounded-full transition-all;
}

.skill-block:hover {
  @apply bg-blue-100 scale-105;
}

@media (min-width: 640px) {
  .grid-cols-1 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .grid-cols-1 {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-cols-1 {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
