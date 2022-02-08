<template>
  <div class="relative min-h-screen bg-gray-100 scroll-smooth font-cormorant">
    <HeroComponent />
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
export default {
  components: {
    ContactComponent,
    FooterComponent,
    HeroComponent,
    ExpertiseComponent,
  },
};
</script>
