<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <div class="mb-4 flex flex-wrap gap-2">
      <div
          @click="toggleSkill('')"
          :class="['p-2 border rounded-full cursor-pointer transition-colors duration-300', { 'bg-blue-500 text-white': selectedSkills.length === 0, 'bg-gray-200 hover:bg-gray-300': selectedSkills.length > 0 }]"
      >
        All
      </div>
      <div
          v-for="skill in allSkills"
          :key="skill"
          @click="toggleSkill(skill)"
          :class="['p-2 border rounded-full cursor-pointer transition-colors duration-300', { 'bg-blue-500 text-white': selectedSkills.includes(skill), 'bg-gray-200 hover:bg-gray-300': !selectedSkills.includes(skill) }]"
      >
        {{ skill }}
      </div>
    </div>
    <div v-for="project in filteredProjects" :key="project.id" class="project-preview p-4 border rounded mb-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mt-2">
        <span
            v-for="skill in project.skills"
            :key="skill.name"
            class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-flex items-center"
        >
          <img :src="skill.logo" alt="" class="h-5 w-5 mr-2">
          {{ skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { projects } from '@/interface/projects';

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
.project-preview {
  @apply p-4 border rounded mb-4;
}
</style>