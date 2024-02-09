<script setup>
import ContactComponent from "~/components/ContactComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeroPalaisComponent from "~/components/HeroPalaisComponent.vue";
import ExpertiseComponent from "~/components/ExpertiseComponent.vue";
import CabinetComponent from "~/components/CabinetComponent.vue";
import EquipeComponent from "~/components/EquipeComponent.vue";
import ScrollLinkComponent from "~/components/ScrollLinkComponent.vue";
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
</script>

<template>
  <div
    class="relative min-h-screen text-black bg-white scroll-smooth font-cormorant"
  >
    <HeroPalaisComponent ref="target" />
    <CabinetComponent />
    <EquipeComponent />
    <ExpertiseComponent />
    <ContactComponent />
    <FooterComponent />
    <div v-show="!targetIsVisible">
      <div class="fixed bottom-0 right-0 z-40 mb-16 mr-6">
        <div
          class="p-2 bg-gray-400 border border-white rounded-full opacity-75 hover:opacity-100"
        >
          <ScrollLinkComponent href="#herotop" class="text-black">
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
    </div>
  </div>
</template>
