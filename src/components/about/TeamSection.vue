<template>
  <section id="team" class="bg-gray-50 py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl text-blue-700 md:text-6xl font-extrabold text-center mb-20">Our Inspired Team</h2>
      <div class="flex flex-wrap justify-center gap-12 max-w-8xl mx-auto">
        <div v-for="(member, index) in teamMembers" :key="index" @click="toggleFlip(index)" class="relative group cursor-pointer transition-all duration-500 hover:-translate-y-2 perspective">
          <div class="w-72 h-80 relative">
            <div class="w-full h-full transition-transform duration-700 transform-style preserve-3d" :class="{ 'rotate-y-180': flippedStates[index] }">
              <!-- Front -->
              <div class="absolute inset-0 bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-start backface-hidden">
                <div class="relative w-52 h-52 mb-4">
                  <img :src="member.image" :alt="member.name" class="w-full h-full object-cover rounded-full border-4 border-white shadow-md" />
                </div>
                <div class="absolute bottom-20 left-0 right-0 z-20">
                  <div class="relative">
                    <div class="bg-blue-400 text-white px-1 py-1 transform -skew-y-12 shadow-lg text-center w-60 mx-auto">
                      <h3 class="font-bold text-lg uppercase">{{ member.name }}</h3>
                    </div>
                    <div class="bg-blue-500 text-white px-0 py-1 transform -skew-y-12 shadow-lg text-center w-60 ml-auto -mt-3">
                      <p class="text-sm font-medium">{{ member.position }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Back -->
              <div class="absolute inset-0 bg-white text-blue-800 rounded-xl shadow-lg p-6 backface-hidden rotate-y-180 flex flex-col justify-center items-center text-center">
                <h3 class="text-xl font-bold mb-2">{{ member.name }}</h3>
                <p class="text-sm font-semibold mb-2">{{ member.position }}</p>
                <p class="text-sm px-2">{{ member.details || 'More info about this team member goes here.' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({ teamMembers: Array })
const flippedStates = ref([])

const toggleFlip = (index) => {
  flippedStates.value[index] = !flippedStates.value[index]
}

onMounted(() => {
  flippedStates.value = props.teamMembers.map(() => false)
})
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
