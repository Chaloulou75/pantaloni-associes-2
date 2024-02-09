<script setup></script>
<template>
  <div class="pt-4 bg-gray-600">
    <div
      class="flex flex-col items-center justify-between w-full px-3 py-5 m-auto space-y-2 text-sm text-gray-200 md:flex-row lg:text-base"
    >
      <div>
        &copy; Pantaloni Greiner Rachwan {{ new Date().getFullYear() }}. Tous
        droits réservés.
      </div>

      <div class="flex justify-between">
        <NuxtLink to="/mentionslegales" class="hover:text-gray-300"
          >Mentions légales</NuxtLink
        >
      </div>
    </div>
  </div>
</template>
