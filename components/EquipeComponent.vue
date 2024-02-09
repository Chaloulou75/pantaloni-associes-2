<script setup>
import MarcComponent from "./MarcComponent.vue";
import MagaliComponent from "./MagaliComponent.vue";
import GhinwaComponent from "./GhinwaComponent.vue";
import SandrineComponent from "./SandrineComponent.vue";
</script>
<template>
  <div class="min-h-full" id="equipe">
    <h2
      class="sticky top-0 z-30 bg-white/50 py-4 text-center text-xl font-medium uppercase tracking-wider backdrop-blur-xs"
    >
      L'équipe
    </h2>
    <MarcComponent />
    <MagaliComponent />
    <GhinwaComponent />
    <SandrineComponent />
  </div>
</template>
