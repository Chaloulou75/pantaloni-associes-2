<script setup>
const { href } = defineProps(["href"]);

const scroll = () => {
  document.querySelector(href).scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
  <a :href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>
