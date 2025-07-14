<!-- src/components/Navbar.vue -->
<template>
  <nav class="bg-pink-600 text-white p-4 shadow-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo and Title -->
      <div class="flex items-center space-x-3">
        <img src="@/assets/logo.jpg" alt="Lotus Outreach Logo" class="w-10 h-10 object-cover" />
        <span class="text-2xl font-semibold">Lotus Outreach Cambodia</span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex space-x-8">
        <router-link to="/" class="text-lg hover:text-pink-200 transition">Home</router-link>
        <router-link to="/about" class="text-lg hover:text-pink-200 transition">About</router-link>
        <router-link to="/contact" class="text-lg hover:text-pink-200 transition">Contact</router-link>
      </div>

      <!-- Donate Button -->
      <router-link to="/donate">
        <button class="bg-pink-800 text-white py-2 px-6 rounded-md text-lg hover:bg-pink-900 transition">
          Donate
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
// You can add any logic for the navbar if needed
</script>

<style scoped>
/* Add any custom styles for the navbar */
</style>
