<template>
  <div id="app">
    <NavHeader />
    <main class="content">
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />
        </Suspense>
      </RouterView>
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
  background: radial-gradient(circle at 10% 20%, #f5f7fa 0%, #e4e8f0 90%);
}

.content {
  flex: 1;
}


</style>

