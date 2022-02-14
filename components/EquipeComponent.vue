<template>
  <div class="my-8 min-h-full" id="equipe">
    <h2
      class="sticky top-0 z-30 mb-4 bg-gray-300 py-4 text-center text-3xl font-semibold tracking-wider opacity-75"
    >
      L'équipe
    </h2>
    <div class="my-8 items-center justify-between lg:flex">
      <div class="w-full">
        <nuxt-img
          sizes="sm:100vw md:50vw lg:800px"
          src="/img/GROUPE.JPG"
          alt="equipe"
          class="mx-auto rounded-md shadow-lg shadow-sky-800 md:rounded-xl"
        />
      </div>
    </div>
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
