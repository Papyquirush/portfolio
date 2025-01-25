<template>
  <div id="app">
    <NavHeader />
    <main class="content">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import NavHeader from "@/components/partials/NavHeader.vue";
import Footer from "@/components/partials/Footer.vue";
</script>

<style scoped>



#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}


</style>

