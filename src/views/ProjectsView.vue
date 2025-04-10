<template>
  <div class="p-4 md:p-8">
    <h1 class="text-3xl font-bold mb-8 text-indigo-800 dark:text-indigo-200">{{ $t('projects.title') }}</h1>

    <!-- Filtres -->
    <div class="mb-8">
      <div class="flex flex-wrap gap-3 mb-4">
        <button
            @click="toggleSkill('')"
            :class="[
            'px-4 py-2 rounded-full cursor-pointer transition-all duration-200',
            selectedSkills.length === 0
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-gray-700 dark:text-indigo-300 dark:hover:bg-gray-600'
          ]"
        >
          {{ $t('projects.allFilter') }}
        </button>

        <button
            v-for="skill in allSkills"
            :key="skill"
            @click="toggleSkill(skill)"
            :class="[
            'px-4 py-2 rounded-full cursor-pointer transition-all duration-200',
            selectedSkills.includes(skill)
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 dark:bg-gray-700 dark:text-indigo-300 dark:hover:bg-gray-600'
          ]"
        >
          {{ $t(skill) }}
        </button>
      </div>
    </div>

    <!-- Liste des projets -->
    <div v-if="filteredProjects.length > 0" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-indigo-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-500"
      >
        <div class="h-48 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-gray-700 dark:to-indigo-900 flex items-center justify-center overflow-hidden">
          <template v-if="project.logo">
            <img
                :src="project.logo"
                :alt="project.title"
                class="h-full object-cover"
            >
          </template>
          <template v-else>
    <span class="text-indigo-400 dark:text-indigo-300 text-lg font-medium">
      {{ project.title }}
    </span>
          </template>
        </div>

        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300">{{ project.title }}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-5">{{ project.description }}</p>

          <div class="mb-5">
            <h4 class="text-sm font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{{ $t('projects.skillsUsed') }}:</h4>
            <div class="flex flex-wrap gap-2">
              <span
                  v-for="skill in project.skills"
                  :key="skill.name"
                  class="bg-indigo-50 dark:bg-indigo-400/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-sm inline-flex items-center border border-indigo-100 dark:border-indigo-800"
              >
                <img :src="skill.logo" :alt="skill.name" class="h-4 w-4 mr-2">
                {{ $t(skill.name) }}
              </span>
            </div>
          </div>

          <button class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center group transition-colors">
            {{ $t('projects.viewProject') }}
            <span class="ml-1 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Aucun projet -->
    <div v-else class="text-center py-16">
      <div class="text-indigo-400 dark:text-indigo-500 mb-4">
        <i class="fas fa-folder-open text-4xl"></i>
      </div>
      <p class="text-gray-500 dark:text-gray-400">
        {{ $t('projects.noProjects') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';
import {projects} from '@/interface/projects';
import {useI18n} from 'vue-i18n';

import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  const skillFromQuery = route.query.skill;
  if (skillFromQuery) {
    selectedSkills.value = [skillFromQuery];
  }
});





const {t} = useI18n();

const selectedSkills = ref([]);

const allSkills = computed(() => {
  const skillsSet = new Set();
  projects.projets.forEach(project => {
    project.skills.forEach(skill => {
      skillsSet.add(skill.name);
    });
  });
  return Array.from(skillsSet);
});

const toggleSkill = (skill) => {
  if (skill === '') {
    selectedSkills.value = [];
  } else {
    const index = selectedSkills.value.indexOf(skill);
    if (index > -1) {
      selectedSkills.value.splice(index, 1);
    } else {
      selectedSkills.value.push(skill);
    }
  }
};

const filteredProjects = computed(() => {
  if (selectedSkills.value.length === 0) {
    return projects.projets;
  }
  return projects.projets.filter(project =>
      selectedSkills.value.every(skill =>
          project.skills.some(projectSkill => projectSkill.name === skill)
      )
  );
});
</script>

<style scoped>
/* Animation personnalisée pour les cartes */
.project-card-enter-active,
.project-card-leave-active {
  transition: all 0.4s ease;
}

.project-card-enter-from,
.project-card-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>