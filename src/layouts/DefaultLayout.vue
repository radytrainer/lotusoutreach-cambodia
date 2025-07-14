<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800">
 
    <!-- Navigation -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow p-6">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-pink-50 text-center p-4 text-sm text-gray-600">
      &copy; 2025 Lotus Outreach Cambodia
    </footer>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>
