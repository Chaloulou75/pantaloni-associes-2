<template>
  <div class="min-h-full" id="cabinet">
    <h2
      class="sticky top-0 z-30 bg-gray-300 py-4 text-center text-3xl font-semibold tracking-wider opacity-75"
    >
      Le cabinet
    </h2>

    <div class="m-8 mt-4 items-center justify-between lg:flex">
      <div class="w-full lg:w-1/2">
        <nuxt-img
          sizes="sm:90vw md:50vw lg:800px"
          src="/img/cabinet.jpg"
          alt="cabinet"
          class="mx-auto rounded-xl"
        />
      </div>
      <div class="w-full px-4 py-4 lg:w-1/2">
        <div class="mx-auto my-8 w-1/4 border-t border-gold-yellow"></div>
        <!-- <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3> -->
        <p class="mx-auto py-2 text-justify indent-8 text-xl tracking-wide">
          Depuis sa constitution, le Cabinet
          <span class="font-bold text-sky-800"> PANTALONI &amp; ASSOCIES </span>
          propose à ses clients un accompagnement
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >sur mesure</span
          >
          dans ses domaines d’interventions.
        </p>
        <p class="mx-auto py-2 text-justify indent-8 text-xl tracking-wide">
          Le Cabinet dispose d’une compétence reconnue en
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >matière pénale</span
          >, en
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >Droit de la construction</span
          >, en
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >Droit de la responsabilité</span
          >
          et en
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >Droit des assurances</span
          >.
        </p>
        <p class="mx-auto py-2 text-justify indent-8 text-xl tracking-wide">
          De taille humaine, croisant les compétences, le Cabinet assure un
          service personnalisé à ses clients qu’il conseille et accompagne en
          demande comme en défense dans le
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >respect des règles professionnelles</span
          >
          et notamment de
          <span
            class="font-semibold underline decoration-sky-500 decoration-2 underline-offset-2"
            >confidentialité</span
          >.
        </p>
        <p class="mx-auto py-2 text-justify indent-8 text-xl tracking-wide">
          Sa clientèle est constituée d’Institutionnels, de grandes sociétés,
          moyennes et petites entreprises ainsi que de particuliers.
        </p>
        <div class="mx-auto my-8 w-1/4 border-t border-gold-yellow"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
