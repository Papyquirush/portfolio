<template>
  <div class="p-6 md:p-12">
    <router-link to="/projects" class="text-indigo-600 dark:text-indigo-400 hover:underline mb-4 inline-block">
      ← {{ $t('projects.backToList') }}
    </router-link>

    <div v-if="project" class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div class="w-full">
        <img
            :src="project.logo || '/default-project.png'"
            :alt="project.title"
            class="  object-cover object-center"
        />
      </div>


      <h1 class="text-3xl font-bold text-center text-indigo-800 dark:text-indigo-200 mb-4">{{ project.title }}</h1>


      <!-- Contexte -->
      <div v-if="project.context" class="mb-6">
        <h2 class="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{{ $t('projects.context') }}</h2>
        <p class="text-gray-600 dark:text-gray-300">{{ project.context }}</p>
      </div>

      <!-- Contributions -->
      <div v-if="project.contributions?.length" class="mb-6">
        <h2 class="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{{ $t('projects.myWork') }}</h2>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li v-for="(task, index) in project.contributions" :key="index">{{ task }}</li>
        </ul>
      </div>

      <!-- Skills et autres infos -->
      <div v-if="project.skills?.length" class="mb-6">
        <h2 class="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">{{ $t('projects.technologies') }}</h2>
        <ul class="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li v-for="(skill, index) in project.skills" :key="index">{{ skill.name }}</li>
        </ul>

    </div>



    </div>

    <div v-else class="text-center text-gray-500 dark:text-gray-400">
      {{ $t('projects.notFound') }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { projects } from '@/interface/projects';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const route = useRoute();
const project = ref(null);

onMounted(() => {
  const id = route.params.id;
  project.value = projects.projets.find((p) => p.id === id);
});
</script>
