<script setup>
import MarcComponent from "./MarcComponent.vue";
import MagaliComponent from "./MagaliComponent.vue";
import GhinwaComponent from "./GhinwaComponent.vue";
// import SandrineComponent from "./SandrineComponent.vue";
</script>
<template>
  <div class="min-h-full" id="associes">
    <h2
      class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-50/50 backdrop-blur-xs"
    >
      Les associés
    </h2>
    <MarcComponent />
    <MagaliComponent />
    <GhinwaComponent />
    <!-- <SandrineComponent /> -->
  </div>
</template>
