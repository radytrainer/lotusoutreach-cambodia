<template>
  <div class="relative text-white">
    <!-- Background Image -->
    <img
      src="/public/image/Contact/contactHeader.png"
      alt="Cambodia program 1"
      class="w-full h-[28rem] object-cover md:h-[36rem] lg:h-[36rem] xl:h-[36rem] 2xl:h-[40rem]"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content on Top -->
    <div class="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Contact with Us</h1>
      <p class="text-lg md:text-xl mb-6 max-w-2xl">
        Reach out to join our mission of empowering Cambodian girls and transforming rural communities.
      </p>
      <router-link
        to="donate"
        class="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg text-lg transition-colors duration-200"
      >
        Donation
      </router-link>
    </div>
  </div>
</template>
