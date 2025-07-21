<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800">
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />

    
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>

footer {
  width: 100%;
}
</style>