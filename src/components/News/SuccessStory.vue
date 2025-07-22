<template>
  <section class="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 font-poppins">
    <div class="container mx-auto px-4 max-w-7xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Success <span class="text-blue-600">Stories </span>
        </h2>
        <div class="w-24 h-1.5 bg-blue-500 rounded-full mx-auto mb-6"></div>
        <p class="text-gray-700 text-lg md:text-ms max-w-1xl mx-auto leading-relaxed">
          Hear from the women whose lives have been
          <span class="font-semibold text-blue-700">transformed</span>
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(success, index) in stories"
          :key="index"
          class="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform  flex flex-col"
        >
          <div class="flex items-center mb-6">
            <img
              :src="success.avatar"
              :alt="success.name"
              class="w-16 h-16 rounded-full object-cover mr-5 border-2 border-blue-400 shadow-md"
            />
            <div>
              <h4 class="font-bold text-xl text-gray-900 leading-tight">
                {{ success.name }}
              </h4>
              <p class="text-blue-600 text-xs font-semibold mt-1">
                {{ success.program }}
              </p>
            </div>
          </div>
          <p class="text-gray-700 text-base leading-relaxed italic flex-grow">
            "<span class="font-medium text-sm"> {{ success.quote }} </span>"
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const stories = ref([
  {
    name: 'Raksmey Var',
    program: 'Country Representative, Cambodia',
    avatar: 'https://lotusoutreachaustralia.org.au/wp-content/uploads/2015/07/Raksmey-for-web-site-.jpg',
    quote: 'The CATALYST program gave me the confidence and skills to become a leader in my community. Now I help other young women pursue their dreams.',
  },
  {
    name: 'Pisey Chea',
    program: 'LOCAM Project Officer',
    avatar: 'https://lotusoutreachaustralia.org.au/wp-content/uploads/2018/06/Untitled-design-2.jpg',
    quote: 'Having a bicycle changed everything for me. I could attend school regularly and now I am studying to become a teacher.',
  },
  {
    name: 'Borika',
    program: 'Accountant, Cambodia',
    avatar: 'https://lotusoutreach.org/wp-content/uploads/2022/08/borika.jpeg',
    quote: 'The scholarship and rice support meant my family could afford to keep me in school. Education opened doors I never imagined possible.',
  },
]);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

.font-poppins {
  font-family: 'Poppins', sans-serif;
}
</style>