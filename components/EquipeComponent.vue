<template>
  <div class="min-h-full" id="equipe">
    <h2
      class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-300/50 backdrop-blur-xs"
    >
      L'équipe
    </h2>
    <!-- <div class="items-center justify-between my-8 lg:flex">
      <div class="w-full">
        <nuxt-img
          sizes="sm:95vw md:80vw lg:800px"
          src="/img/GROUPE.JPG"
          alt="equipe"
          class="mx-auto rounded-md shadow-lg shadow-sky-800/60 md:rounded-xl"
        />
      </div>
    </div> -->
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
