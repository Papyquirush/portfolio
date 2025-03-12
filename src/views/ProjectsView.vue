<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Projects</h1>
    <div class="mb-4 flex flex-wrap gap-2">
      <div
          v-for="skill in allSkills"
          :key="skill"
          @click="selectedSkill = skill"
          :class="['p-2 border rounded cursor-pointer', { 'bg-blue-500 text-white': selectedSkill === skill, 'bg-gray-200': selectedSkill !== skill }]"
      >
        {{ skill }}
      </div>
      <div
          @click="selectedSkill = ''"
          :class="['p-2 border rounded cursor-pointer', { 'bg-blue-500 text-white': selectedSkill === '' }]"
      >
        All
      </div>
    </div>
    <div v-for="project in filteredProjects" :key="project.id" class="project-preview p-4 border rounded mb-4">
      <h3 class="text-xl font-semibold">{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <p>Skills: {{ project.skills.map(skill => skill.name).join(', ') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { projects } from '@/interface/projects';

const selectedSkill = ref('');

const allSkills = computed(() => {
  const skillsSet = new Set();
  projects.projets.forEach(project => {
    project.skills.forEach(skill => {
      skillsSet.add(skill.name);
    });
  });
  return Array.from(skillsSet);
});

const filteredProjects = computed(() => {
  if (!selectedSkill.value) {
    return projects.projets;
  }
  return projects.projets.filter(project =>
      project.skills.some(skill => skill.name === selectedSkill.value)
  );
});
</script>

<style scoped>
.project-preview {
  @apply p-4 border rounded mb-4;
}
</style>