<template>
  <footer
    class="bg-gradient-to-r from-blue-50 to-sky-100 text-gray-800 py-12 mt-20"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Logo and Description -->
        <div class="space-y-4">
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <img
              src="../assets/Logo.png"
              alt="Lotus Outreach Logo"
              class="w-16 h-16 object-contain"
            />
            <h4 class="text-xl font-bold text-blue-600">
              Lotus Outreach Cambodia
            </h4>
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
          <ul class="space-y-3">
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

        <!-- Our Programs -->
        <div>
          <h4 class="text-lg font-semibold mb-3 text-blue-600">Our Programs</h4>
          <ul class="space-y-3">
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
            <!-- Facebook Icon -->
            <a
              href="https://www.facebook.com/LotusOutreachCambodia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Facebook page"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M279.14 288l14.22-92.66h-88.91V138.19c0-25.35 
          12.42-50.06 52.24-50.06h40.42V6.26S293.4 
          0 262.09 0c-73.41 0-121.17 44.38-121.17 
          124.72v70.62H89.09V288h51.83v224h100.2V288z"
                />
              </svg>
            </a>

            <!-- YouTube Icon -->
            <a
              href="http://www.youtube.com/@LOCambodia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our YouTube channel"
              class="w-10 h-10 rounded-full bg-gray-700 hover:bg-red-600 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            >
              <svg
                class="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 576 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M549.65 124.08c-6.28-23.65-24.8-42.16-48.45-48.45C456.53 
          64 288 64 288 64s-168.53 0-213.2 
          11.63c-23.65 6.28-42.16 24.8-48.45 
          48.45C16.73 168.75 16.73 256 16.73 
          256s0 87.25 10.62 131.92c6.28 23.65 
          24.8 42.16 48.45 48.45C119.47 448 288 
          448 288 448s168.53 0 213.2-11.63c23.65-6.28 
          42.16-24.8 48.45-48.45C559.27 343.25 
          559.27 256 559.27 256s0-87.25-9.62-131.92zM232.05 
          338.1V173.9L361.18 256l-129.13 82.1z"
                />
              </svg>
            </a>
          </div>

          <p class="text-sm text-gray-600 mb-4">
            Follow us for updates on our community impact and stories from
            Cambodia.
          </p>

          <!-- Newsletter -->
          <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h5 class="font-semibold text-gray-800 mb-2">Stay Updated</h5>
            <div class="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                class="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                class="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-md sm:rounded-r-md sm:rounded-l-none hover:bg-pink-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
