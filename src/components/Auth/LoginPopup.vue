<!-- src/components/Auth/LoginPopup.vue -->
<template>
  <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto transform transition-all">
      <!-- Header with back button -->
      <div class="flex items-center justify-between p-6 border-b border-gray-100">
        <button 
          @click="goBack" 
          class="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back
        </button>
        <h2 class="text-xl font-semibold text-gray-800">Login</h2>
        <div class="w-12"></div> 
      </div>

      <!-- Form section -->
      <div class="p-6">
        <div class="mb-6">
          <div class="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
            <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          <p class="text-center text-gray-600 text-sm">Enter your username to continue</p>
        </div>

        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700 mb-2">Username</label>
          <input 
            id="username"
            v-model="username" 
            type="text"
            placeholder="Enter your username" 
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none"
            @keyup.enter="verifyUsername"
          />
        </div>

        <div v-if="errorMessage" class="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p class="text-red-600 text-sm flex items-center">
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
            </svg>
            {{ errorMessage }}
          </p>
        </div>

        <button 
          @click="verifyUsername" 
          :disabled="!username.trim()"
          class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          Continue
        </button>
        <button v-if="isLoggedIn.value" @click="logout" class="w-full bg-red-600 text-white py-3 px-4 rounded-lg mt-2">Logout</button>
      </div>
    </div>
  </div>
  <router-view v-else></router-view>
</template>

<script setup>
import { ref, watch, inject } from 'vue';
import { useRouter } from 'vue-router';

const showPopup = ref(true);
const username = ref('');
const errorMessage = ref('');
const isLoggedIn = inject('isLoggedIn');
const router = useRouter();

if (localStorage.getItem('isLoggedIn') === 'true') {
  isLoggedIn.value = true;
  showPopup.value = false;
  if (router.currentRoute.value.path === '/login') {
    router.push('/admin');
  }
}

watch(() => router.currentRoute.value.path, () => {
  const storedLogin = localStorage.getItem('isLoggedIn') === 'true';
  if (storedLogin && router.currentRoute.value.path === '/login') {
    showPopup.value = false;
    router.push('/admin');
  } else if (!storedLogin && router.currentRoute.value.path === '/admin') {
    showPopup.value = true;
    router.push('/login');
  }
});

const goBack = () => {
  showPopup.value = false;
  router.push('/');
};

const verifyUsername = () => {
  if (!username.value.trim()) {
    errorMessage.value = 'Please enter a username';
    return;
  }

  if (username.value === 'admin') {
    showPopup.value = false;
    isLoggedIn.value = true;
    localStorage.setItem('isLoggedIn', 'true');
    errorMessage.value = '';
    router.push('/admin');
  } else {
    errorMessage.value = 'Incorrect username. Please try again.';
  }
};

const logout = () => {
  isLoggedIn.value = false;
  localStorage.setItem('isLoggedIn', 'false');
  router.push('/login');
};
</script>