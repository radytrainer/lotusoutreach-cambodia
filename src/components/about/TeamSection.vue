<template>
  <section id="team" class="bg-gray-50 py-30">
    <div class="container mx-auto px-4 p-9">
      <h2
        class="text-4xl text-blue-700 md:text-6xl font-extrabold text-center mb-20"
      >
        Our Inspired Team
      </h2>
      <div class="flex flex-wrap justify-center gap-12 max-w-8xl mx-auto">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          @click="toggleFlip(index)"
          class="relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 perspective"
        >
          <div class="w-72 relative">
            <div
              class="w-full transition-transform duration-700 transform-style preserve-3d"
              :class="{ 'rotate-y-180': flippedStates[index] }"
            >
              <!-- Front -->
              <div
                class="relative bg-white rounded-xl shadow-lg p-6 w-72 h-120 flex flex-col items-center justify-start backface-hidden"
              >
                <!-- Profile image with circle background -->
                <div class="relative w-40 h-40 mb-16">
                  <div
                    class="absolute inset-0 bg-orange-100 rounded-full"
                  ></div>
                  <img
                    :src="member.image"
                    :alt="member.name"
                    class="relative w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                  />
                </div>

                <!-- Ribbons -->
                <div class="absolute top-[165px] left-0 right-0 z-20">
                  <div class="relative">
                    <div
                      class="bg-blue-400 text-white px-1 py-1 transform -skew-y-12 shadow-lg text-center w-60 mx-auto"
                    >
                      <h3 class="font-bold text-lg uppercase">
                        {{ member.name }}
                      </h3>
                    </div>
                    <div
                      class="bg-blue-500 text-white px-0 py-1 transform -skew-y-12 shadow-lg text-center w-60 ml-auto -mt-3"
                    >
                      <p class="text-sm font-medium">{{ member.position }}</p>
                    </div>
                  </div>
                </div>

                
                <!-- Testimonial Text -->
                <div
                  class="px-4 text-gray-800 text-sm leading-relaxed text-center"
                >
                  <div class="flex justify-center mb-2">
                    <svg
                      class="w-5 h-5 text-orange-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M7.17 6.17A4.98 4.98 0 004 11v2h4v-2H6.09a2.978 2.978 0 013.08-4.24zM17.17 6.17A4.98 4.98 0 0014 11v2h4v-2h-1.91a2.978 2.978 0 013.08-4.24z"
                      />
                    </svg>
                  </div>

                  <p>
                    <span v-if="!expandedStates[index]">
                      {{ member.details.slice(0, 100)
                      }}<span v-if="member.details.length > 100">.. </span>
                    </span>
                    <span v-else>{{ member.details }}</span>

                    <span
                      v-if="member.details.length > 100"
                      class="text-blue-600 font-medium cursor-pointer ml-1"
                      @click.stop="toggleExpand(index)"
                    >
                      {{ expandedStates[index] ? "Show less" : "Read more" }}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({ teamMembers: Array });
const flippedStates = ref([]);
const expandedStates = ref([])

// const toggleFlip = (index) => {
//   flippedStates.value[index] = !flippedStates.value[index]
// }
 const toggleExpand = (index) => {
  expandedStates.value[index] = !expandedStates.value[index]
}
onMounted(() => {
  flippedStates.value = props.teamMembers.map(() => false);
});
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}
.transform-style {
  transform-style: preserve-3d;
}
.backface-hidden {
  backface-visibility: hidden;
}
.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>
