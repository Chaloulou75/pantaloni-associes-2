<script setup>
import { ref } from "vue";
import { useElementVisibility } from "@vueuse/core";
const { whenHidden } = defineProps(["whenHidden"]);
const shouldDisplay = ref(false);

const handleScroll = () => {
  shouldDisplay = useElementVisibility(whenHidden);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>
<template>
  <transition name="fade">
    <div v-show="shouldDisplay">
      <slot></slot>
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
