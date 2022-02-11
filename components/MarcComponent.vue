<template>
  <div class="h-auto my-24" id="MarcPantaloni">
    <h2
      class="py-2 mb-4 text-5xl font-semibold text-center text-gray-800 lg:hidden"
    >
      Marc Pantaloni
    </h2>
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
        class="flex flex-col justify-between w-full px-2 py-4 text-gray-800 lg:w-1/2"
      >
        <h2
          class="hidden py-2 mb-2 text-5xl font-semibold text-center lg:block"
        >
          Marc Pantaloni
        </h2>
        <div class="w-1/4 mx-auto my-8 border-t border-gold-yellow"></div>

        <ul
          class="px-2 pt-2 mb-5 space-y-4 text-xl italic font-medium tracking-wide text-justify list-disc list-inside"
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
          class="w-full h-full px-2 space-y-4 text-xl font-medium tracking-wide text-justify text-gray-800"
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
        <div class="w-1/4 mx-auto my-8 border-t border-gold-yellow"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
