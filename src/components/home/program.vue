<template>
  <div class="min-h-screen bg-white">
    <!-- Programs Section -->
    <section id="programs" class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-20">
          <div
            class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            Our Programs
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Four Pillars of
            <span
              class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >Empowerment</span
            >
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities across Cambodia
          </p>
        </div>
        <!-- Education Program - Card Style -->
        <div class="mb-32">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="relative">
                <div class="relative h-96 lg:h-full">
                  <img
                    src="/image/Program/train1.jpg"
                    alt="Students studying in a classroom"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <!-- Floating Elements -->
                  <div
                    class="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"
                  ></div>
                </div>
              </div>
              <div class="p-12 lg:p-16">
                <div class="flex items-center mb-6">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <span class="text-blue-600 font-bold text-xl">01</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">Education</h3>
                    <div class="text-blue-600 font-semibold">
                      CATALYST Program
                    </div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  Our flagship university scholarship and leadership initiative
                  supports graduates in pursuing higher education. Beyond
                  financial support, CATALYST nurtures leadership skills, civic
                  engagement, and career readiness, preparing scholars to become
                  change makers in their communities and beyond.
                </p>
                <button
                  class="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  aria-label="Learn more about the CATALYST scholarship program"
                >
                  Learn More About CATALYST
                  <svg
                    class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Training Program - Split Screen Style -->
        <div class="mb-32">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="flex items-center mb-6">
                <div
                  class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                >
                  <span class="text-blue-600 font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 class="text-4xl font-bold text-gray-800">Training</h3>
                  <div class="text-blue-600 font-semibold">
                    Life Skills & Personal Development
                  </div>
                </div>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                We provide essential life skills and personal development
                training to equip our scholars for success in their academic and
                professional journeys. Through workshops and mentorship,
                participants gain soft skills, digital literacy, leadership
                abilities, and job readiness.
              </p>

              <!-- Skills List -->
              <div class="space-y-4 mb-8">
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium"
                    >Digital Literacy & Technology Skills</span
                  >
                </div>
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium"
                    >Leadership & Communication</span
                  >
                </div>
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium"
                    >Professional Development</span
                  >
                </div>
                <div class="flex items-center">
                  <div
                    class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  >
                    <svg
                      class="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium"
                    >Job Readiness & Career Planning</span
                  >
                </div>
              </div>

              <button
                class="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                aria-label="Explore our life skills and personal development training programs"
              >
                Explore Training Programs
                <svg
                  class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="order-1 lg:order-2">
              <div class="relative">
                <div
                  class="bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl p-12 shadow-2xl"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          ></path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">
                        Digital Skills
                      </h5>
                      <p class="text-gray-600 text-sm">
                        Technology & Innovation
                      </p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Leadership</h5>
                      <p class="text-gray-600 text-sm">
                        Communication & Management
                      </p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                          ></path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Career Prep</h5>
                      <p class="text-gray-600 text-sm">
                        Professional Development
                      </p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div
                        class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <svg
                          class="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          ></path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Mentorship</h5>
                      <p class="text-gray-600 text-sm">Guidance & Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Care Program - Card Style -->
        <div class="mb-32">
          <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="p-12 lg:p-16">
                <div class="flex items-center mb-6">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <span class="text-blue-600 font-bold text-xl">03</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">Education</h3>
                    <div class="text-blue-600 font-semibold">
                      CATALYST Program
                    </div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  Our flagship university scholarship and leadership initiative
                  supports graduates in pursuing higher education. Beyond
                  financial support, CATALYST nurtures leadership skills, civic
                  engagement, and career readiness, preparing scholars to become
                  change makers in their communities and beyond.
                </p>
                <button
                  class="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  aria-label="Learn more about the CATALYST scholarship program"
                >
                  Learn More About CATALYST
                  <svg
                    class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    ></path>
                  </svg>
                </button>
              </div>
              <div class="relative">
                <div class="relative h-96 lg:h-full">
                  <img
                    src="/image/Program/train1.jpg"
                    alt="Students studying in a classroom"
                    class="w-full h-full object-cover"
                    loading="lazy"
                  />

                  <!-- Floating Elements -->
                  <div
                    class="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"
                  ></div>
                  <div
                    class="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Giving Back Program - Timeline Style -->
        <div class="mb-32">
          <div
            class="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-12 lg:p-16"
          >
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="relative">
                <img
                  src="/image/Program/r4e.jpg"
                  alt="Students studying in a classroom"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div class="flex items-center mb-6">
                  <div
                    class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4"
                  >
                    <span class="text-blue-600 font-bold text-xl">04</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">
                      Giving Back
                    </h3>
                    <div class="text-blue-600 font-semibold">
                      Paying Forward Initiative
                    </div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  Since 2018, we have fostered a culture of social
                  responsibility through our Paying Forward initiative. Our
                  beneficiaries actively engage in community service and
                  charitable activities.
                </p>

                <!-- Timeline -->
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">Food Drives</h5>
                      <p class="text-gray-600 text-sm">
                        Organizing community food distribution programs
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">
                        Tutoring Programs
                      </h5>
                      <p class="text-gray-600 text-sm">
                        Providing educational support to younger students
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div
                      class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1"
                    >
                      <svg
                        class="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">
                        Environmental Clean-ups
                      </h5>
                      <p class="text-gray-600 text-sm">
                        Leading sustainability initiatives in local communities
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-8">
                  <button
                    class="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                    aria-label="Join our community service initiatives"
                  >
                    Join Our Community
                    <svg
                      class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const riceImage = ref(
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='riceGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%233b82f6;stop-opacity:1' /><stop offset='50%' style='stop-color:%2360a5fa;stop-opacity:1' /><stop offset='100%' style='stop-color:%231d4ed8;stop-opacity:1' /></linearGradient></defs><rect width='100%' height='100%' fill='url(#riceGrad)' /><circle cx='60' cy='50' r='20' fill='white' opacity='0.3'/><circle cx='240' cy='150' r='25' fill='white' opacity='0.2'/><circle cx='200' cy='60' r='15' fill='white' opacity='0.25'/><rect x='80' y='70' width='140' height='60' rx='10' fill='white' opacity='0.4'/><text x='150' y='90' font-family='Arial' font-size='12' fill='%231d4ed8' text-anchor='middle' font-weight='bold'>Rice for Education</text><text x='150' y='105' font-family='Arial' font-size='10' fill='%231d4ed8' text-anchor='middle'>Family Support</text><text x='150' y='120' font-family='Arial' font-size='10' fill='%231d4ed8' text-anchor='middle'>Nutrition Program</text></svg>`
  )}`
);

const bicycleImage = ref(
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'><defs><linearGradient id='bikeGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2314b8a6;stop-opacity:1' /><stop offset='50%' style='stop-color:%235eead4;stop-opacity:1' /><stop offset='100%' style='stop-color:%230d9488;stop-opacity:1' /></linearGradient></defs><rect width='100%' height='100%' fill='url(#bikeGrad)' /><circle cx='70' cy='140' r='25' fill='white' opacity='0.4'/><circle cx='230' cy='140' r='25' fill='white' opacity='0.4'/><line x1='70' y1='140' x2='230' y2='140' stroke='white' stroke-width='3' opacity='0.5'/><rect x='120' y='70' width='60' height='40' rx='8' fill='white' opacity='0.5'/><text x='150' y='85' font-family='Arial' font-size='10' fill='%230d9488' text-anchor='middle' font-weight='bold'>Lotus Pedals</text><text x='150' y='95' font-family='Arial' font-size='8' fill='%230d9488' text-anchor='middle'>Safe Transportation</text><text x='150' y='105' font-family='Arial' font-size='8' fill='%230d9488' text-anchor='middle'>School Access</text></svg>`
  )}`
);

const communityImage = ref(
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 400'><defs><linearGradient id='commGrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%2310b981;stop-opacity:1' /><stop offset='50%' style='stop-color:%2334d399;stop-opacity:1' /><stop offset='100%' style='stop-color:%23059669;stop-opacity:1' /></linearGradient></defs><rect width='100%' height='100%' fill='url(#commGrad)' /><circle cx='150' cy='120' r='30' fill='white' opacity='0.3'/><circle cx='300' cy='80' r='25' fill='white' opacity='0.4'/><circle cx='450' cy='180' r='35' fill='white' opacity='0.2'/><circle cx='200' cy='280' r='20' fill='white' opacity='0.25'/><rect x='200' y='180' width='200' height='100' rx='15' fill='white' opacity='0.4'/><text x='300' y='210' font-family='Arial' font-size='16' fill='%23059669' text-anchor='middle' font-weight='bold'>Community Service</text><text x='300' y='230' font-family='Arial' font-size='12' fill='%23059669' text-anchor='middle'>Paying Forward Initiative</text><text x='300' y='250' font-family='Arial' font-size='12' fill='%23059669' text-anchor='middle'>Environmental Projects</text><text x='300' y='270' font-family='Arial' font-size='12' fill='%23059669' text-anchor='middle'>Social Responsibility</text></svg>`
  )}`
);

// Intersection Observer for animations
let observer = null;

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up");
      }
    });
  }, observerOptions);

  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style scoped>
/* Enhanced animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes float-delayed {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(-3deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
  animation-delay: 2s;
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out;
}

/* Enhanced hover effects */
.hover-lift:hover {
  transform: translateY(-8px);
}

/* Custom shadow effects */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Navigation underline animation */
.nav-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: #ec4899;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Button hover effects */
.btn-gradient {
  background: linear-gradient(45deg, #ec4899, #8b5cf6);
  background-size: 200% 200%;
  transition: background-position 0.3s ease;
}

.btn-gradient:hover {
  background-position: right center;
}

/* Card hover animations */
.card-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-hover:hover {
  transform: translateY(-8px) scale(1.02);
}

/* Text gradient effects */
.text-gradient {
  background: linear-gradient(135deg, #ec4899, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Loading animations */
@keyframes pulse-glow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
}

.animate-pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}
</style>
