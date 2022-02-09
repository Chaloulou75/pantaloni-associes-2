<template>
  <div class="min-h-full" id="cabinet">
    <h2
      class="sticky top-0 z-30 py-4 text-3xl font-semibold tracking-wider text-center bg-gray-300 opacity-75"
    >
      Le cabinet
    </h2>
    <svg
      class="w-full opacity-75"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#d1d5db"
        fill-opacity="1"
        d="M0,128L40,149.3C80,171,160,213,240,218.7C320,224,400,192,480,176C560,160,640,160,720,176C800,192,880,224,960,229.3C1040,235,1120,213,1200,186.7C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
      ></path>
    </svg>

    <div class="items-center justify-between my-8 mt-4 lg:flex">
      <div class="w-full lg:w-1/2">
        <img
          loading="lazy"
          src="~assets/img/compress/statue.jpg"
          alt="cabinet"
          class="px-3 mx-auto max-h-96"
        />
      </div>
      <div class="w-full px-4 py-4 lg:w-1/2">
        <div class="w-1/4 mx-auto my-8 border-t border-gold-yellow"></div>
        <!-- <h3 class="py-2 text-2xl font-medium text-center">Un sous titre</h3> -->
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          Depuis sa constitution, le Cabinet PANTALONI &amp; ASSOCIES propose à
          ses clients un accompagnement
          <span class="font-semibold">sur mesure</span> dans ses domaines
          d’interventions.
        </p>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          Le Cabinet dispose d’une compétence reconnue en
          <span class="font-semibold">matière pénale</span>, en
          <span class="font-semibold">Droit de la construction</span>, en
          <span class="font-semibold">Droit de la responsabilité</span> et en
          <span class="font-semibold">Droit des assurances</span>.
        </p>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          De taille humaine, croisant les compétences, le Cabinet assure un
          service personnalisé à ses clients qu’il conseille et accompagne en
          demande comme en défense dans le
          <span class="font-semibold">respect des règles professionnelles</span>
          et notamment de <span class="font-semibold">confidentialité</span>.
        </p>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          Sa clientèle est constituée d’Institutionnels, de grandes sociétés,
          moyennes et petites entreprises ainsi que de particuliers.
        </p>
        <div class="w-1/4 mx-auto my-8 border-t border-gold-yellow"></div>
      </div>
    </div>
  </div>
</template>
