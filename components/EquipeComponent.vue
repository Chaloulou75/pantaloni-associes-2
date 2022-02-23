<template>
  <div class="min-h-full" id="equipe">
    <h2
      class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-300/50 backdrop-blur-xs"
    >
      L'équipe
    </h2>
    <MarcComponent />
    <MagaliComponent />
    <GhinwaComponent />
    <SandrineComponent />
  </div>
</template>
<script>
import MarcComponent from "./MarcComponent.vue";
import MagaliComponent from "./MagaliComponent.vue";
import GhinwaComponent from "./GhinwaComponent.vue";
import SandrineComponent from "./SandrineComponent.vue";
export default {
  components: {
    MarcComponent,
    MagaliComponent,
    GhinwaComponent,
    SandrineComponent,
  },
};
</script>
