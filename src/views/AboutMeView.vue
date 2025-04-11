<template>
  <main class="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-blue-100">
    <div class="w-full max-w-3xl text-center animate-fade-in">
      <!-- Titre Principal -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        {{ $t('aboutMe') }}
        <span class="text-indigo-600">.</span>
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">
        {{ $t('about.me') }}
      </p>

      <!-- Section Expériences -->
      <section class="mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{{ $t('experiences') }}</h2>
        <div class="space-y-8">
          <!-- Expérience 1 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="text-left">
              <h3 class="font-semibold text-indigo-600">{{ $t('about.exp1.title') }}</h3>
              <p class="text-gray-600">{{ $t('about.exp1.description') }}</p>
              <p class="text-gray-400">{{ $t('about.exp1.date') }}</p>
            </div>
          </div>
          <!-- Expérience 2 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="text-left">
              <h3 class="font-semibold text-indigo-600">{{ $t('about.exp2.title') }}</h3>
              <p class="text-gray-600">{{ $t('about.exp2.description') }}</p>
              <p class="text-gray-400">{{ $t('about.exp2.date') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Diplômes -->
      <section class="mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{{ $t('about.degree') }}</h2>
        <div class="space-y-8">
          <!-- Diplôme 1 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="text-left">
              <h3 class="font-semibold text-indigo-600">{{ $t('about.deg1.title') }}</h3>
              <p class="text-gray-600">{{ $t('about.deg1.place') }}</p>
              <p class="text-gray-400">{{ $t('about.deg1.date') }}</p>
            </div>
          </div>
          <!-- Diplôme 2 -->
          <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div class="text-left">
              <h3 class="font-semibold text-indigo-600">{{ $t('about.deg2.title') }}</h3>
              <p class="text-gray-600">{{ $t('about.deg2.place') }}</p>
              <p class="text-gray-400">{{ $t('about.deg2.date') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section class="mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{{ $t('contactMe') }}</h2>
        <p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8">{{ $t('about.contact') }}</p>

        <!-- Liens de Contact -->
        <div class="flex justify-center space-x-6 sm:space-x-8 mb-6">
          <a href="https://www.linkedin.com/in/florian-dussud" target="_blank" class="flex items-center text-indigo-600 hover:text-indigo-700">
            <i class="fab fa-linkedin h-6 w-6 mr-2"></i>
            <span class="font-semibold">{{ $t('LinkedIn') }}</span>
          </a>
          <a href="https://github.com/papyquirush" target="_blank" class="flex items-center text-indigo-600 hover:text-indigo-700">
            <i class="fab fa-github h-6 w-6 mr-2"></i>
            <span class="font-semibold">{{ $t('GitHub') }}</span>
          </a>

        </div>
        <a href="mailto:floriandussud@gmail.com" class="text-center items-center text-indigo-600 hover:text-indigo-700">
          <i class="fas fa-envelope h-6 w-6 mr-2"></i>
          <span class="font-semibold">floriandussud@gmail.com</span>
        </a>
      </section>

      <div class="flex gap-6 sm:gap-8 justify-center flex-wrap">
        <RouterLink
            to="/projects"
            class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
        >
          {{ $t('See my projects') }}
        </RouterLink>
        <RouterLink
            to="/skills"
            class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
        >
          {{ $t('about.skills') }}
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
</script>
