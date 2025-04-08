<template>
  <main class="min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-br from-indigo-50 to-blue-100">
    <div class="max-w-2xl text-center animate-fade-in">
      <h1 class="text-5xl font-bold text-gray-800 mb-6">
        {{ $t('portfolio') }}
        <span class="text-indigo-600">.</span>
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        {{ $t('Not finished') }}
      </p>
      <div class="flex gap-4 justify-center">
        <RouterLink
            to="/projects"
            class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
        >

          {{ $t('See my projects') }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
</script>