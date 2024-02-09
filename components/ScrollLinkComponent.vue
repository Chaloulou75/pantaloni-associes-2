<script setup>
const { href } = defineProps(["href"]);

const scroll = () => {
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <NuxtLink :to="href" @click.prevent="scroll">
    <slot></slot>
  </NuxtLink>
</template>
