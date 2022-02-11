<template>
  <div class="my-20 h-auto" id="MarcPantaloni">
    <h2
      class="mb-4 py-2 text-center text-3xl font-semibold text-gray-800 lg:text-5xl"
    >
      Marc Pantaloni
    </h2>
    <div class="mx-auto my-8 w-1/4 border-t border-gold-yellow"></div>
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="w-full lg:w-1/2">
        <nuxt-img
          sizes="sm:90vw md:50vw lg:400px"
          src="/img/statue.jpg"
          alt="Marc Pantaloni"
          class="mx-auto rounded-xl"
        />
      </div>
      <div
        class="mt-4 flex w-full flex-col justify-between px-4 py-4 text-gray-800 lg:mt-0 lg:w-1/2"
      >
        <ul
          class="mb-5 list-inside list-disc space-y-4 px-2 pt-2 text-justify text-xl font-medium italic tracking-wide"
        >
          <li class="not-italic">
            Inscrit au Barreau de Paris depuis janvier 1983
          </li>
          <li>
            Ancien Secrétaire de la Conférence au Barreau de Paris (1986/1987)
          </li>
          <li>Ancien chargé d’enseignement à l’Université Paris XI</li>
          <li>DEA droit des affaires (Université Panthéon-Assas Paris II)</li>
        </ul>
        <div
          class="h-full w-full space-y-4 px-2 text-justify text-xl font-medium tracking-wide text-gray-800"
        >
          <p class="indent-8">
            Associé au sein du Cabinet RONSSERAY TOURNOIS & ASSOCIES, puis
            membre fondateur du Cabinet SELNET PANTALONI FISCHER, Marc PANTALONI
            a constitué une équipe dédiée au service de clients auxquels sont
            apportés tant la formation à raison de séminaires dédiés que le
            conseil, l’assistance pré-contentieuse et contentieuse qui leur est
            nécessaire.
          </p>
          <p class="indent-8">
            En matière pénale, Marc PANTALONI est intervenu et intervient dans
            de nombreux dossiers à forts enjeux tant en droit pénal des affaires
            et financiers qu’en droit pénal général et du travail.
          </p>
          <p class="indent-8">
            Son activité se déploie en outre dans les domaines de la
            construction et de l’immobilier où il intervient aux côtés
            d’entreprises de BTP ou de leurs assureurs.
          </p>
          <p class="indent-8">
            Enfin, il assure dans le cadre de leurs responsabilités civiles
            professionnelles et/ou contractuelles la défense d’agents
            immobiliers et des professionnels du droit, notamment notaires,
            experts judiciaires…
          </p>
        </div>
        <div class="mx-auto my-8 w-1/4 border-t border-gold-yellow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
