<template>
  <footer>
    <div class="bg-gray-800 p-4 w-full wrapper">
      <div class="flex justify-center mt-2">
        <a href="/about" class="text-gray-300 mx-2 hover:underline">{{ $t('aboutMe') }}</a>
        <a href="/contact" class="text-gray-300 mx-2 hover:underline">{{ $t('contactMe') }}</a>
        <a href="https://www.linkedin.com/in/florian-dussud" target="_blank" class="text-gray-300 mx-2 flex items-center">
          <i class="fab fa-linkedin h-4 w-4 mr-1"></i>
          <span class="hover:underline">
            LinkedIn
          </span>
        </a>
        <a href="https://github.com/papyquirush" target="_blank" class="text-gray-300 mx-2  flex items-center">
          <i class="fab fa-github h-4 w-4 mr-1"></i>
          <span class="hover:underline">
            GitHub
          </span>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>