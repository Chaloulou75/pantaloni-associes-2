<template>
  <div class="relative min-h-screen scroll-smooth bg-gray-100 font-cormorant">
    <HeroComponent />
    <CabinetComponent />
    <EquipeComponent />
    <ExpertiseComponent />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#1f2937"
        fill-opacity="1"
        d="M0,288L120,266.7C240,245,480,203,720,192C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
    <ContactComponent />
    <FooterComponent />
    <VisibleComponent when-hidden="#herotop">
      <div class="fixed bottom-0 right-0 z-20 mb-16 mr-6">
        <div
          class="rounded-full border border-white bg-gray-400 p-2 opacity-75 hover:opacity-100"
        >
          <ScrollLinkComponent href="#herotop" class="text-gray-800">
            <svg
              class="h-6 w-6"
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
    <div
      class="hidden backdrop-brightness-0 backdrop-contrast-0 backdrop-grayscale-0 backdrop-hue-rotate-0 backdrop-invert-0 backdrop-opacity-0 backdrop-saturate-0 backdrop-sepia-0"
    ></div>
  </div>
</template>

<script>
import ContactComponent from "~/components/ContactComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeroComponent from "~/components/HeroComponent.vue";
import ExpertiseComponent from "~/components/ExpertiseComponent.vue";
import CabinetComponent from "~/components/CabinetComponent.vue";
import EquipeComponent from "~/components/EquipeComponent.vue";
import VisibleComponent from "~/components/VisibleComponent.vue";
import ScrollLinkComponent from "~/components/ScrollLinkComponent.vue";

export default {
  components: {
    ContactComponent,
    FooterComponent,
    HeroComponent,
    ExpertiseComponent,
    CabinetComponent,
    EquipeComponent,
    VisibleComponent,
    ScrollLinkComponent,
  },
};
</script>
