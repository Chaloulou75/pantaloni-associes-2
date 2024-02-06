<script setup>
import ContactComponent from "~/components/ContactComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeroPalaisComponent from "~/components/HeroPalaisComponent.vue";
import ExpertiseComponent from "~/components/ExpertiseComponent.vue";
import CabinetComponent from "~/components/CabinetComponent.vue";
import EquipeComponent from "~/components/EquipeComponent.vue";
import VisibleComponent from "~/components/VisibleComponent.vue";
import ScrollLinkComponent from "~/components/ScrollLinkComponent.vue";
</script>

<template>
  <div class="relative min-h-screen bg-gray-100 scroll-smooth font-cormorant">
    <HeroPalaisComponent />
    <CabinetComponent />
    <EquipeComponent />
    <ExpertiseComponent />
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#4b5563"
        fill-opacity="1"
        d="M0,288L120,266.7C240,245,480,203,720,192C960,181,1200,203,1320,213.3L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      ></path>
    </svg>
    <ContactComponent />
    <FooterComponent />
    <VisibleComponent when-hidden="#herotop">
      <div class="fixed bottom-0 right-0 z-40 mb-16 mr-6">
        <div
          class="p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100"
        >
          <ScrollLinkComponent href="#herotop" class="text-gray-800">
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
  </div>
</template>
