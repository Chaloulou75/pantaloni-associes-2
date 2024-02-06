<script setup>
import FooterComponent from "~/components/FooterComponent.vue";
import VisibleComponent from "~/components/VisibleComponent.vue";
import ScrollLinkComponent from "~/components/ScrollLinkComponent.vue";
</script>
<template>
  <div class="bg-gray-100 font-cormorant">
    <nav
      class="relative flex justify-between w-full px-6 py-4"
      id="nav_Mention"
    >
      <NuxtLink
        to="/"
        class="text-sm font-medium text-gray-900 transition duration-500 ease-in-out transform border-b border-gray-800 cursor-pointer hover:border-gray-900 hover:font-semibold hover:text-black lg:text-base"
      >
        Revenir à l'Accueil
      </NuxtLink>
    </nav>

    <div class="h-auto max-w-5xl px-6 pb-8 mx-auto text-sm text-gray-900">
      <h1 class="py-4 mb-4 text-3xl font-semibold tracking-wider text-center">
        -Mentions légales-
      </h1>
      <div class="w-1/4 mx-auto my-8 border-t border-pink-400"></div>
      <div class="mb-6 text-lg text-justify">
        <p>
          Raison sociale : Pantaloni &amp; Associés<br />
          Forme juridique : Association d’Avocats à Responsabilité
          Professionnelle Individuelle<br />
          SIRET: 37876204100036<br />
          Responsable de la publication : Marc Pantaloni <br />
          Adresse : 15 Rue Saussier Leroy 75017, Paris. France<br />
          Developpeur Web : Charles Jeandey
        </p>
        <p>
          Conformément à la loi n°2004-575 du 21 juin 2004 pour la confiance
          dans l’économie numérique, nous vous informons que le site internet
          www.pantaloni-associes.com est la propriété de l’AARPI Pantaloni &amp;
          Associés. Le site internet www.pantaloni-associes.com est hébergé sur
          les matériels informatiques de la société Netlify, 2325 3rd Street,
          Suite 215; San Francisco, Californie 94107, États-Unis d’Amérique.<br />
          Le site www.pantaloni-associes.com est régi par le droit français ;
          les visiteurs ayant accès au site de l’étranger, doivent s’assurer du
          respect des lois localement applicables. Les mentions légales pouvant
          être modifiées à tout moment et sans préavis, nous vous engageons à
          les consulter régulièrement.
        </p>
      </div>
      <div class="mb-6 text-base">
        <h3 class="mb-6 text-xl font-semibold">Propriété intellectuelle</h3>
        <div class="mb-6 text-lg text-justify">
          <p class="indent-8">
            Pantaloni &amp; Associés détient, se réserve et conserve tous les
            droits de propriété, notamment intellectuelle, y compris les droits
            de reproduction sur le présent site et les éléments qu’il contient.
            En conséquence et notamment toute reproduction partielle ou totale
            du présent site et des éléments qu’il contient est strictement
            interdite sans autorisation écrite de Pantaloni &amp; Associés. Les
            logos et tous autres signes distinctifs contenus sur ce site sont la
            propriété de Pantaloni &amp; Associés ou font l’objet d’une
            autorisation d’utilisation. Aucun droit ou licence ne saurait être
            attribué sur l’un quelconque de ces éléments sans l’autorisation
            écrite de Pantaloni &amp; Associés ou du tiers détenteur des droits.
          </p>
        </div>

        <h3 class="mb-6 text-xl font-semibold">Contenu</h3>
        <div class="mb-6 text-lg text-justify">
          <p class="indent-8">
            Les informations fournies sur ce site par Pantaloni &amp; Associés
            ne sont données qu’à titre indicatif et n’ont pas de valeur
            contractuelle.<br />
            Pantaloni &amp; Associés s’efforce de mettre à jour le site mais ne
            garantit ni l’exactitude ni le caractère exhaustif des informations
            présentées sur ce site, quelles qu’elles soient. En cas de
            différence entre les informations concernant les produits, c’est
            l’emballage qui fait foi.<br />
            La reproduction ou présentation, intégrale ou partielle des pages,
            des données et de tout autre élément constitutif du site par quelque
            procédé ou support que ce soit, est interdite et constitue, sauf
            autorisation de l’éditeur, une contrefaçon.
          </p>
        </div>

        <h3 class="mb-6 text-xl font-semibold">
          Exclusion de garantie et de responsabilité
        </h3>
        <div class="mb-6 text-lg text-justify">
          <p class="indent-8">
            L’utilisateur du site web www.pantaloni-associes.com reconnaît avoir
            pris connaissance des présentes conditions d’utilisation du site et
            s’engage à les respecter.<br />
            Pantaloni &amp; Associés ne saurait être tenue pour responsable des
            dommages directs ou indirects qui pourraient résulter de l’accès au
            site ou de l’utilisation du site et/ou de ces informations, y
            compris l’inaccessibilité, les pertes de données, détériorations,
            destructions ou virus qui pourraient affecter l’équipement
            informatique de l’utilisateur et/ou de la présence de virus sur son
            site.<br />
            Bien que Pantaloni &amp; Associés s’efforce de fournir un contenu
            fiable sur son site, il ne garantit pas que son contenu soit exempt
            d’inexactitudes ou d’omissions et ne saurait être tenu pour
            responsable des erreurs ou omissions, d’une absence de disponibilité
            des informations et des services. Pantaloni &amp; Associés se
            réserve à tout moment et sans préavis le droit d’apporter des
            améliorations et/ou des modifications au contenu de son site. En
            conséquence, l’utilisateur reconnaît se servir de ses informations
            sous sa responsabilité exclusive.
          </p>
        </div>

        <h3 class="mb-6 text-xl font-semibold">Lien vers d’autres sites</h3>
        <div class="mb-6 text-lg text-justify">
          <p class="indent-8">
            Le site peut inclure des liens vers d’autres sites ou d’autres
            sources Internet. Dans la mesure où Pantaloni &amp; Associés ne peut
            contrôler ces sites et ces sources externes, Pantaloni &amp;
            Associés ne peut être tenu pour responsable de la mise à disposition
            de ces sites et sources externes, et décline ainsi toute
            responsabilité quant aux contenus, publicités, produits, services ou
            tout autre matériel disponible sur ou à partir de ces sites ou
            sources externes. Ces liens sont proposés aux utilisateurs du site
            www.pantaloni-associes.com en tant que service. La décision
            d’activer les liens vous appartient exclusivement. Nous vous
            rappelons que les sites non-affiliés sont soumis à leurs propres
            conditions d’utilisation.
          </p>
        </div>

        <h3 id="cookies" class="mb-6 text-xl font-semibold">Cookies</h3>
        <div class="mb-6 text-lg text-justify">
          <p class="indent-8">
            Lors de vos visites, vous êtes informé qu’un témoin de connexion
            peut s’installer automatiquement sur votre logiciel de navigation.
            Il s’agit d’un bloc de données qui n’est pas utilisé à des fins
            d’identification mais qui sert à enregistrer des informations
            relatives à votre navigation sur le site. Il permet des analyses de
            fréquentation, mesures d’audience… afin d’améliorer la qualité du
            site. Vous pouvez désactiver les cookies en suivant les instructions
            comme suit :
          </p>

          <ol>
            <li class="indent-8">
              Si vous utilisez le navigateur Internet Explorer Dans Internet
              Explorer, cliquez sur le bouton « Outils », puis sur « Options
              Internet ». Sous l’onglet Général, sous « Historique de navigation
              », cliquez sur « Paramètres ». Cliquez sur le bouton « Afficher
              les fichiers ». Cliquez sur l’en-tête de colonne « Nom pour trier
              tous les fichiers dans l’ordre alphabétique », puis parcourez la
              liste jusqu’à ce que vous voyez des fichiers commençant par le
              préfixe « Cookie » (tous les cookies possèdent ce préfixe et
              contiennent habituellement le nom du site Web qui a créé le
              cookie). Sélectionnez le ou les cookie(s) que vous refusez et
              supprimez-les. Fermez la fenêtre qui contient la liste des
              fichiers, puis cliquez deux fois sur « OK » pour retourner dans
              Internet Explorer.
            </li>
            <li class="indent-8">
              Si vous utilisez le navigateur Firefox Allez dans l’onglet «
              Outils » du navigateur puis sélectionnez le menu « Options ». Dans
              la fenêtre qui s’affiche, choisissez « Vie privée » et cliquez sur
              « Affichez les cookies ». Repérez les fichiers que vous refusez.
              Sélectionnez-les et supprimez-les.
            </li>
            <li class="indent-8">
              Si vous utilisez le navigateur Safari Dans votre navigateur,
              choisissez le menu « Édition Préférences ». Cliquez sur « Sécurité
              ». Cliquez sur « Afficher les cookies ». Sélectionnez les cookies
              que vous refusez et cliquez sur « Effacer » ou sur « Tout effacer
              ». Après avoir supprimé les cookies, cliquez sur « Terminé ».
            </li>
            <li class="indent-8">
              Si vous utilisez le navigateur Google Chrome Cliquez sur l’icône
              du menu « Outils ». Sélectionnez « Options ». Cliquez sur l’onglet
              « Options avancées » et accédez à la section « Confidentialité ».
              Cliquez sur le bouton « Afficher les cookies ». Repérez les
              fichiers que vous souhaitez refuser. Sélectionnez-les et
              supprimez-les. Cliquez sur « Fermer » pour revenir à votre
              navigateur.<br />
              En cas de refus des témoins de connexions, certains services
              peuvent ne plus être accessibles.
            </li>
          </ol>
        </div>
      </div>
    </div>

    <VisibleComponent when-hidden="#nav_Mention">
      <div class="fixed bottom-0 right-0 z-20 mb-16 mr-6">
        <div
          class="p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100"
        >
          <ScrollLinkComponent href="#nav_Mention" class="text-gray-800">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
              ></path>
            </svg>
          </ScrollLinkComponent>
        </div>
      </div>
    </VisibleComponent>

    <FooterComponent />
  </div>
</template>
