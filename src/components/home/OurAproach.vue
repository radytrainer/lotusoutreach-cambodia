<template>
  <!-- Our Approach -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold text-gray-900 mb-4">
              Our Cambodia-Focused Approach
            </h2>
            <p class="text-xl text-gray-600">
              Understanding Khmer culture and community needs
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Image -->
            <div class="order-2 lg:order-1">
              <img
                src="https://images.globalgiving.org/pfil/3885/pict_original.jpg?w=460&h=306&auto=compress,enhance&fit=crop&crop=faces,center&format=auto&dpr=2"
                alt="Cambodian women and children"
                class="w-full h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>

            <!-- Content -->
            <div class="order-1 lg:order-2">
              <!-- Tab Buttons -->
              <div class="grid grid-cols-2 gap-3 mb-8">
                <button
                  v-for="approach in approaches"
                  :key="approach.key"
                  @click="setActiveApproach(approach.key)"
                  :class="[
                    'px-4 py-3 rounded-lg font-semibold transition-all duration-300 text-sm',
                    activeApproach === approach.key
                      ? 'bg-pink-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  {{ approach.title }}
                </button>
              </div>

              <!-- Tab Content -->
              <div
                class="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div
                  v-for="approach in approaches"
                  :key="approach.key"
                  v-show="activeApproach === approach.key"
                  class="space-y-4"
                >
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    {{ approach.title }}
                  </h3>
                  <div class="prose prose-gray max-w-none">
                    <p
                      v-for="paragraph in approach.content"
                      :key="paragraph"
                      class="text-gray-700 leading-relaxed"
                    >
                      {{ paragraph }}
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
const props = defineProps(["approaches", "activeApproach"])
const emit = defineEmits(["update:activeApproach"])

function setActiveApproach(key) {
  emit('update:activeApproach', key)
}
</script>

<style scoped>
.prose p {
  margin-bottom: 1rem;
}
</style>