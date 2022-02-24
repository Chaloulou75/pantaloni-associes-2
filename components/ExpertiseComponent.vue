<template>
  <div class="min-h-full pb-28" id="expertise">
    <h2
      class="sticky top-0 z-30 bg-gray-300/50 py-4 text-center text-xl font-medium uppercase tracking-wider backdrop-blur-xs"
    >
      Expertise
    </h2>
    <div class="my-8 items-center justify-between lg:flex lg:flex-row lg:px-6">
      <div class="w-full lg:w-1/2">
        <nuxt-img
          sizes="sm:95vw md:50vw lg:95vw"
          src="/img/GROUPE.JPG"
          alt="groupe"
          class="mx-auto rounded-md shadow-lg shadow-sky-800/60 md:rounded-xl"
        />
      </div>
      <div class="w-full px-4 py-4 lg:w-1/2 lg:px-8">
        <div class="mx-auto my-8 w-1/4 border-t border-pink-cabinet"></div>
        <!-- <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3> -->
        <p class="mx-auto py-2 text-left indent-8 text-xl tracking-wide">
          Depuis sa constitution, le Cabinet
          <span class="font-bold text-gray-cabinet">
            PANTALONI &amp; ASSOCIES
          </span>
          propose à ses clients un accompagnement
          <span
            class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"
            >sur mesure</span
          >
          dans ses domaines d’interventions.
        </p>
        <p class="mx-auto py-2 text-left indent-8 text-xl tracking-wide">
          Le Cabinet dispose d’une compétence reconnue en
          <span
            class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"
            >matière pénale</span
          >, en
          <span
            class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"
            >Droit de la construction</span
          >, en
          <span
            class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"
            >Droit de la responsabilité</span
          >
          et en
          <span
            class="font-semibold underline decoration-pink-cabinet decoration-2 underline-offset-2"
            >Droit des assurances</span
          >.
        </p>
        <div class="mx-auto py-6">
          <ul class="list-inside list-disc space-y-4 text-xl tracking-wide">
            <li class="font-medium">Droit pénal</li>
            <li class="font-medium">Droit de la construction</li>
            <li class="font-medium">Droit de la responsabilité</li>
            <li class="font-medium">Droit des assurances</li>
          </ul>
        </div>
        <div class="mx-auto my-8 w-1/4 border-t border-pink-cabinet"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
