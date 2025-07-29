<template>
  <section class="py-24 bg-gradient-to-br from-blue-50 via-white to-pink-50">
    <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title and Description -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4">
          Our Location
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Come visit us in Phnom Penh, Cambodia, where our dedicated team supports rural communities with impactful programs.
        </p>
      </div>

      <!-- Map and Card -->
      <div class="max-w-7xl mx-auto px-4">
        <div class="relative rounded-3xl overflow-hidden shadow-ml border border-blue-100">
          <!-- Google Maps Embed -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31217.32961776853!2d104.9069159!3d11.5362522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095108d46a13af%3A0xcac8cfe6b53b3d5c!2sLotus%20Outreach%20Cambodia%20(LOCAM)!5e0!3m2!1sen!2skh!4v1753693300000!5m2!1sen!2skh"
            class="w-full h-[500px] border-0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Lotus Outreach Cambodia Map"
          ></iframe>

          <!-- Floating Glass Card -->
          <div class="absolute top-6 left-6 bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-[90%] sm:max-w-sm border border-blue-200">
            <h3 class="text-2xl font-bold text-blue-700 mb-1">
              Lotus Outreach Cambodia
            </h3>
            <p class="text-sm text-gray-700">
              26a St 492, Phnom Penh, Cambodia
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11.5321275,104.9162729"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.752 11.168l-3.197-2.132a.75.75 0 00-1.194.624v4.72a.75.75 0 001.194.624l3.197-2.132a.75.75 0 000-1.204z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75S17.385 21.75 12 21.75 2.25 17.385 2.25 12 6.615 2.25 12 2.25z" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
