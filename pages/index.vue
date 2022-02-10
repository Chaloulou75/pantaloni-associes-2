<template>
  <div class="relative min-h-screen bg-gray-100 scroll-smooth font-cormorant">
    <HeroComponent />
    <CabinetComponent />
    <EquipeComponent />
    <ExpertiseComponent />
    <ContactComponent />
    <FooterComponent />
  </div>
</template>

<script>
import ContactComponent from "~/components/ContactComponent.vue";
import FooterComponent from "~/components/FooterComponent.vue";
import HeroComponent from "~/components/HeroComponent.vue";
import ExpertiseComponent from "~/components/ExpertiseComponent.vue";
import CabinetComponent from "~/components/CabinetComponent.vue";
import EquipeComponent from "~/components/EquipeComponent.vue";
export default {
  components: {
    ContactComponent,
    FooterComponent,
    HeroComponent,
    ExpertiseComponent,
    CabinetComponent,
    EquipeComponent,
  },
};
</script>
