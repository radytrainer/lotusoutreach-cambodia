<script setup>
import DonateForm from "@/components/donation/DonateForm.vue";
import DonateHeader from "@/components/donation/DonateHeader.vue";
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-50 to-white flex flex-col overflow-hidden"
  >
    <DonateHeader />
    <section class="container mx-auto px-4 py-10 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <DonateForm />
      </div>
    </section>
  </div>
</template>
