<script setup></script>
<template>
  <div class="min-h-full" id="cabinet">
    <h2
      class="sticky top-0 z-30 py-4 text-xl font-medium tracking-wider text-center uppercase bg-gray-50/50 backdrop-blur-xs"
    >
      Le cabinet
    </h2>

    <div class="items-center justify-between py-8 mt-4 lg:flex lg:px-6">
      <div class="relative w-full mx-auto lg:w-1/2">
        <NuxtImg
          :placeholder="[50, 25, 75, 5]"
          sizes="sm:95vw md:50vw lg:95vw"
          src="/sallereunion.jpg"
          alt="Cabinet PANTALONI GREINER RACHWAN"
          class="mx-auto rounded-sm shadow shadow-gray-500 md:rounded"
        />
      </div>
      <div class="w-full px-4 py-4 lg:w-1/2 lg:px-8">
        <div class="w-1/4 mx-auto my-8 border-t border-red-500"></div>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          Situé en plein cœur du 17ème arrondissement de Paris, entre le Nouveau
          Palais de Justice et l’Arc de Triomphe, le Cabinet
          <span class="font-bold text-red-500"> PANTALONI GREINER RACHWAN</span>
          conseille et assure la défense d’une clientèle constituée
          d’Institutionnels, de grandes sociétés, moyennes et petites
          entreprises ainsi que de particuliers.
        </p>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          De taille humaine, croisant les compétences, le Cabinet assure un
          service personnalisé à ses clients qu’il conseille et accompagne en
          demande comme en défense dans le
          <span
            class="font-semibold underline decoration-red-500 decoration-2 underline-offset-2"
            >respect des règles professionnelles
          </span>
          et notamment de
          <span
            class="font-semibold underline decoration-red-500 decoration-2 underline-offset-2"
            >confidentialité</span
          >.
        </p>
        <p class="py-2 mx-auto text-xl tracking-wide text-justify indent-8">
          Le Cabinet favorise
          <span
            class="font-semibold underline decoration-red-500 decoration-2 underline-offset-2"
            >la réactivité</span
          >,
          <span
            class="font-semibold underline decoration-red-500 decoration-2 underline-offset-2"
            >l’écoute
          </span>
          et la disponibilité afin de répondre à l’ensemble des souhaits et des
          préoccupations de ses clients.
        </p>

        <div class="w-1/4 mx-auto my-8 border-t border-red-500"></div>
      </div>
    </div>
  </div>
</template>
