<template>
  <nav class="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
    <div
      class="max-w-[86rem] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 md:h-20"
    >
      <!-- Logo and Title -->
      <div class="flex items-center space-x-3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgLeIH5PtQCty0ZtaLV8aYaUzaTVQpVQHp0A&s"
          alt="Lotus Outreach Logo"
          class="w-10 h-10 md:w-12 md:h-12 object-contain"
        />
        <h1 class="text-lg md:text-2xl font-bold text-blue-600 tracking-wide">
          Lotus Outreach Cambodia
        </h1>
      </div>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex space-x-6 text-gray-800 font-medium items-center">
        <li>
          <RouterLink
            to="/"
            :class="{ 'text-pink-600': isActive('/') }"
            class="hover:text-pink-600 transition-colors"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/about"
            :class="{ 'text-pink-600': isActive('/about') }"
            class="hover:text-pink-600 transition-colors"
            >About Us</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/program"
            :class="{ 'text-pink-600': isActive('/program') }"
            class="hover:text-pink-600 transition-colors"
            >Program</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/newstory"
            :class="{ 'text-pink-600': isActive('/newstory') }"
            class="hover:text-pink-600 transition-colors"
            >News & Stories</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/gallery"
            :class="{ 'text-pink-600': isActive('/gallery') }"
            class="hover:text-pink-600 transition-colors"
            >Galleries</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/contact"
            :class="{ 'text-pink-600': isActive('/contact') }"
            class="hover:text-pink-600 transition-colors"
            >Contact</RouterLink
          >
        </li>
        <li>
          <RouterLink
              to="/donate"
              class="flex items-center gap-2 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              Donate
              <!-- Animated Heart Icon -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-white-800"
              >
                <path
                  d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 
                    8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 
                    4.13 2.44h1.75C14.09 5.01 15.76 4 17.5 
                    4 20 4 22 6 22 8.5c0 3.78-3.4 
                    6.86-8.55 11.54l-1.35 1.31z"
                />
              </svg>
            </RouterLink>
        </li>
      </ul>

      <!-- Mobile/Tablet Icon Only Toggle -->
      <div class="lg:hidden">
        <button
          @click="toggleMobileMenu"
          class="text-gray-700 hover:text-pink-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile/Tablet Navigation Menu -->
    <transition name="slide-fade">
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden bg-white border-t border-gray-100 w-full shadow-lg"
      >
        <ul
          class="flex flex-col items-center py-4 space-y-4 text-gray-800 font-medium"
        >
          <li>
            <RouterLink
              to="/"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/') }"
              class="block w-full text-center hover:text-pink-600 transition-colors"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/about') }"
              class="block w-full text-center hover:text-pink-600 transition-colors"
              >About Us</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/program"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/program') }"
              class="block w-full text-center hover:text-pink-600 transition-colors"
              >Program</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/newstory"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/newstory') }"
              class="block w-full text-center hover:text-pink-600 transition-colors"
              >News & Stories</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/contact') }"
              class="block w-full text-center hover:text-pink-600 transition-colors"
              >Contact</RouterLink
            >
          </li>
          <!-- Donate AFTER Contact on mobile/tablet -->
          <li>
            <RouterLink
              to="/donate"
              @click="toggleMobileMenu"
              :class="{ 'text-pink-600': isActive('/donate') }"
              class="block w-full text-center bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition-colors"
              >Donate</RouterLink
            >
          </li>
        </ul>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const mobileMenuOpen = ref(false);
const route = useRoute();

const isActive = (path) => route.path === path;

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
