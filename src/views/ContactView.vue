<template>
    <Header/>
    <section class="py-20 bg-gray-50">
      <!-- Use full width container with controlled padding -->
      <div class="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <FormContact/>
      </div>
    </section>
    <Location/>
    <MissionContact/>
</template>
<script setup>
import FormContact from '@/components/contact/FormContact.vue';
import Header from '../components/contact/Header.vue';
import Location from '@/components/contact/Location.vue';
import MissionContact from '@/components/contact/MissionContact.vue';
</script>