<template>
  <div class="min-h-screen bg-white">
    <section id="programs" class="mt-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </div>
          <h2 class="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Four Pillars of
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Empowerment</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive programs designed to transform lives and build
            stronger communities across Cambodia
          </p>
        </div>

        <div class="mb-32">
          <div class="bg-white rounded-3xl shadow-md overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="relative">
                <div class="relative h-96 lg:h-full">
                  <img src="/image/Program/train1.jpg" alt="Students studying in a classroom"
                    class="w-full h-full object-cover" loading="lazy" />
                  <div class="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
                </div>
              </div>
              <div class="p-12 lg:p-16">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-bold text-xl">01</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">Education</h3>
                    <div class="text-blue-600 font-semibold">CATALYST Program</div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  At Lotus Outreach Cambodia, we empower young women through our CATALYST program—a university
                  scholarship and leadership initiative that supports graduates in pursuing higher education. Beyond
                  financial support, CATALYST nurtures leadership skills, civic engagement, and career readiness,
                  preparing scholars to become change makers in their communities and beyond.
                </p>
                <router-link to="/program" class="w-fit group bg-blue-600 text-white px-6 py-4 rounded-full font-semibold
         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  aria-label="Learn more about the CATALYST scholarship program">
                  Learn More About Education
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-32">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1">
              <div class="flex items-center mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <span class="text-blue-600 font-bold text-xl">02</span>
                </div>
                <div>
                  <h3 class="text-4xl font-bold text-gray-800">Training</h3>
                  <div class="text-blue-600 font-semibold">Life Skills & Personal Development</div>
                </div>
              </div>
              <p class="text-gray-600 text-lg leading-relaxed mb-8">
                We provide essential life skills and personal development
                training to equip our scholars for success in their academic and
                professional journeys. Through workshops and mentorship,
                participants gain soft skills, digital literacy, leadership
                abilities, and job readiness.
              </p>
              <div class="space-y-4 mb-8">
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Digital Literacy & Technology Skills</span>
                </div>
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Leadership & Communication</span>
                </div>
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Professional Development</span>
                </div>
                <div class="flex items-center">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </div>
                  <span class="text-gray-700 font-medium">Job Readiness & Career Planning</span>
                </div>
              </div>
              <router-link to="/program" class="w-fit group bg-blue-600 text-white px-6 py-4 rounded-full font-semibold
         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                aria-label="Learn more about the CATALYST scholarship program">
                Explore Training Programs
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                  stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </router-link>
            </div>
            <div class="order-1 lg:order-2">
              <div class="relative">
                <div class="bg-gradient-to-br from-blue-200 to-blue-100 rounded-3xl p-12 shadow-md">
                  <div class="grid grid-cols-2 gap-6">
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                          </path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Digital Skills</h5>
                      <p class="text-gray-600 text-sm">Technology & Innovation</p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                          </path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Leadership</h5>
                      <p class="text-gray-600 text-sm">Communication & Management</p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6">
                          </path>
                        </svg>
                      </div>
                      <h5 class="font-bold text-gray-800 mb-2">Career Prep</h5>
                      <p class="text-gray-600 text-sm">Professional Development</p>
                    </div>
                    <div
                      class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                          </path>
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

        <div class="mb-32">
          <div class="bg-white rounded-3xl shadow-md overflow-hidden">
            <div class="grid lg:grid-cols-2">
              <div class="p-12 lg:p-16">
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-bold text-xl">03</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">Care Program</h3>
                    <div class="text-blue-600 font-semibold">Girl Support & Community Care</div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  Our Rice for Education program offers vital food support to the families of scholarship recipients,
                  helping to alleviate economic pressures that can lead to school dropouts. Additionally, our Lotus
                  Pedals initiative provides bicycles to girls who live far from school, ensuring safe and reliable
                  transportation to help them attend classes consistently.
                </p>
                <router-link to="/program" class="w-fit group bg-blue-600 text-white px-6 py-4 rounded-full font-semibold
         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                  aria-label="Learn more about the CATALYST scholarship program">
                  Learn More About care
                  <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </router-link>
              </div>
              <div class="relative">
                <div class="relative h-96 lg:h-full">
                  <img src="/image/Home/care01.png" alt="Students studying in a classroom"
                    class="w-full h-full object-cover" loading="lazy" />
                  <div class="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
                  <div class="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-32">
          <div class="bg-gradient-to-br from-blue-50 to-blue-50 rounded-3xl p-12 lg:p-16">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
              <div class="relative">
                <img src="/image/Program/r4e.jpg" alt="Students studying in a classroom"
                  class="w-full h-full object-cover" loading="lazy" />
              </div>
              <div>
                <div class="flex items-center mb-6">
                  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <span class="text-blue-600 font-bold text-xl">04</span>
                  </div>
                  <div>
                    <h3 class="text-4xl font-bold text-gray-800">Giving Back</h3>
                    <div class="text-blue-600 font-semibold">Paying Forward Initiative</div>
                  </div>
                </div>
                <p class="text-gray-600 text-lg leading-relaxed mb-8">
                  Since 2018, we have fostered a culture of social
                  responsibility through our Paying Forward initiative. Our
                  beneficiaries actively engage in community service and
                  charitable activities.
                </p>
                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">Food Drives</h5>
                      <p class="text-gray-600 text-sm">Organizing community food distribution programs</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">Tutoring Programs</h5>
                      <p class="text-gray-600 text-sm">Providing educational support to younger students</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 class="font-bold text-gray-800 mb-1">Environmental Clean-ups</h5>
                      <p class="text-gray-600 text-sm">Leading sustainability initiatives in local communities</p>
                    </div>
                  </div>
                </div>
                <div class="mt-8">
                  <router-link to="/program" class="w-fit group bg-blue-600 text-white px-6 py-4 rounded-full font-semibold
         hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center"
                    aria-label="Learn more about the CATALYST scholarship program">
                    Explore Giving Back
                    <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none"
                      stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </router-link>
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

</script>

<style scoped>
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

.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>