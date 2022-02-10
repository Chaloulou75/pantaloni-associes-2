<template>
  <div class="min-h-full my-8" id="equipe">
    <h2
      class="sticky top-0 z-30 py-4 mb-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75"
    >
      L'équipe
    </h2>
    <div class="items-center justify-between my-8 overflow-hidden lg:flex">
      <div class="w-full">
        <nuxt-img
          sizes="sm:100vw md:50vw lg:400px"
          src="/img/livres.jpg"
          alt="equipe"
          class="mx-auto rounded-xl"
        />
      </div>
    </div>
    <MarcComponent />
  </div>
</template>
<script>
import MarcComponent from "./MarcComponent.vue";
export default { components: { MarcComponent } };
</script>
