<template>
  <footer
    class="bg-gradient-to-r from-blue-50 to-sky-100 text-gray-800 py-12 mt-20"
  >
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo and Description -->
        <div class="space-y-3">
          <div class="flex items-center space-x-3">
            <div class="flex items-center space-x-3">
              <img
                src="../assets/Logo.png"
                alt="Lotus Outreach Logo"
                class="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h4 class="text-2xl font-bold text-blue-600">
                Lotus Outreach Cambodia
              </h4>
            </div>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">
            Transforming lives in rural Cambodia through education, healthcare,
            and community development programs that respect local culture and
            traditions.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-blue-600">Quick Links</h4>
          <ul class="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 text-sm">
            <li>
              <router-link
                to="/"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Home
              </router-link>
            </li>

            <li>
              <router-link
                to="/about"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/program"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Program
              </router-link>
            </li>

            <li>
              <router-link
                to="/newstory"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                News & Stories
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Contact Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/donate"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                Support Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Programs -->

        <div>
          <h4 class="text-lg font-semibold mb-3 text-blue-600">Our Programs</h4>
          <ul class="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-3 text-sm">
            <li>
              <router-link
                to="/program"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"
                  />
                </svg>
                Education
              </router-link>
            </li>
            <li>
              <router-link
                to="/program"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
                  />
                </svg>
                Care
              </router-link>
            </li>
            <li>
              <router-link
                to="/program"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  />
                </svg>
                Training
              </router-link>
            </li>
            <li>
              <router-link
                to="/donate"
                class="text-gray-600 hover:text-pink-600 transition-colors duration-300 flex items-center group"
              >
                <svg
                  class="w-4 h-4 mr-2 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                      2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
                      4.5 2.09C13.09 3.81 14.76 3 
                      16.5 3 19.58 3 22 5.42 22 
                      8.5c0 3.78-3.4 6.86-8.55 
                      11.54L12 21.35z"
                  />
                </svg>
                Giving Back
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect With Us -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-blue-600">
            Connect With Us
          </h4>
          <div class="flex flex-wrap gap-3 mb-4">
            <a
              href="https://www.facebook.com/LotusOutreachCambodia/"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            >
              <svg
                class="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="http://www.youtube.com/@LOCambodia"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
            >
              <svg
                class="w-5 h-5 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                />
              </svg>
            </a>
          </div>
          <p class="text-sm text-gray-600 mb-4">
            Follow us for updates on our community impact and stories from
            Cambodia.
          </p>
        </div>
      </div>
    </div>

    <!-- Improved Animated HR -->
    <hr
      class="my-4  from-pink-500 via-red-500 to-yellow-500
             relative overflow-hidden shadow-lg"
      style="background-size: 200% 100%; animation: gradient-slide 4s linear infinite;"
    />

  
  <div class="text-center text-sm text-gray-600 mb-2">
  <h4 class="text-gray-400 m-0 inline-block">
    @Develop by students PNC generation 2025
  </h4>
  
  </div>

  </footer>
</template>

<style scoped>
@keyframes gradient-slide {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
