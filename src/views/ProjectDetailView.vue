<template>
  <div class="p-6 md:p-12 max-w-5xl mx-auto">
    <router-link
        to="/projects"
        class="text-indigo-600 dark:text-indigo-400 hover:underline mb-6 inline-block text-sm"
    >
      ← {{ $t('projects.backToList') }}
    </router-link>

    <div v-if="project" class="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl space-y-8">
      <!-- Carousel -->
      <div class="relative w-full overflow-hidden rounded-xl shadow-lg">
        <img
            :src="project.images[currentImage] || '/default-project.png'"
            :alt="project.title"
            class="w-full h-80 object-cover transition-all duration-300"
        />
        <button
            @click="prevImage"
            class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"
        >
          ‹
        </button>
        <button
            @click="nextImage"
            class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full shadow hover:bg-indigo-700"
        >
          ›
        </button>
      </div>

      <!-- Titre -->
      <h1 class="text-4xl font-extrabold text-center text-indigo-800 dark:text-indigo-200">
        {{ project.title }}
      </h1>

      <!-- Contexte -->
      <div v-if="project.context">
        <h2 class="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
          {{ $t('projects.context') }}
        </h2>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
          {{ project.context }}
        </p>
      </div>

      <!-- Contributions -->
      <div v-if="project.contributions?.length">
        <h2 class="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
          {{ $t('projects.myWork') }}
        </h2>
        <ul class="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          <li v-for="(task, index) in project.contributions" :key="index">{{ task }}</li>
        </ul>
      </div>

      <!-- Skills -->
      <div v-if="project.skills?.length">
        <h2 class="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
          {{ $t('projects.technologies') }}
        </h2>
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

      <!-- Liens -->
      <div v-if="project.links?.length">
        <h2 class="text-2xl font-semibold text-indigo-700 dark:text-indigo-400 mb-4">
          {{ $t('projects.links') }}
        </h2>
        <ul class="space-y-2">

            <a
                :href="project.links[0]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-indigo-600 dark:text-indigo-300 hover:underline break-all flex items-center gap-2"
            >
              <i class="fab fa-gitlab"></i>
              {{ $t('projects.sourceCode') }}
            </a>

          <li v-if="project.links.length > 1">
            <a
                :href="project.links[1]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-indigo-600 dark:text-indigo-300 hover:underline break-all flex items-center gap-2"
            >
              <i class="fas fa-globe"></i>
              {{ $t('projects.website') }}
            </a>
          </li>

        </ul>
      </div>

      <div v-else class="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
        {{ $t('projects.noLinks') }}
      </div>




    </div>




    <div v-else class="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
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
const currentImage = ref(0);

onMounted(() => {
  const id = route.params.id;
  project.value = projects.projets.find((p) => p.id === id);
});

const nextImage = () => {
  if (project.value?.images) {
    currentImage.value = (currentImage.value + 1) % project.value.images.length;
  }
};

const prevImage = () => {
  if (project.value?.images) {
    currentImage.value =
        (currentImage.value - 1 + project.value.images.length) % project.value.images.length;
  }
};
</script>
