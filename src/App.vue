<template>
  <div class="app-container">
    <NavHeader />
    <main class="content">

    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavHeader from "@/components/partials/NavHeader.vue";
import Footer from "@/components/partials/Footer.vue";
</script>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>