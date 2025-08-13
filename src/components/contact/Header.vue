<template>
  <div class="relative w-full text-white">
    <img src="/image/contact/header.jpg" alt="Contact Us - Cambodia"
      class="w-full h-[25rem] md:h-[36rem] lg:h-[40rem] 2xl:h-[44rem] object-cover object-center" loading="eager" />
    <div class="absolute inset-0 bg-black/30 backdrop-brightness-75 flex items-center justify-center"></div>
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
      <h1 class="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-1 sm:mb-6 leading-snug sm:leading-tight">
        Contact Us
      </h1>
      <p class="text-sm sm:text-lg md:text-xl lg:text-2xl max-w-3xl text-gray-200 font-medium drop-shadow-md mb-4">
        Reach out and join our mission to empower Cambodian girls and uplift rural communities through education and
        opportunity.
      </p>
      <router-link to="/donate"
        class="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-semibold shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
        Donate Now
      </router-link>
    </div>
  </div>
</template>
