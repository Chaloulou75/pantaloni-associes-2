<script setup>
const showDropdown = ref(false);
</script>
<template>
  <div class="relative min-h-screen w-full" id="herotop">
    <NuxtImg
      sizes="sm:100vw"
      src="/img/palais3.jpg"
      alt="palais"
      class="absolute inset-0 h-full w-full object-cover opacity-50"
    />
    <div
      class="absolute inset-0 bg-pink-cabinet/50 mix-blend-overlay backdrop-blur-xxs"
    ></div>

    <!-- Navigation -->
    <div
      class="mx-auto flex min-h-screen flex-col items-center justify-between"
    >
      <div class="relative mb-20 mt-auto space-y-8">
        <h1
          class="animate-fade-in-down text-center text-4xl font-normal underline decoration-pink-cabinet decoration-2 underline-offset-8 transition duration-200 md:text-6xl lg:text-8xl"
        >
          <span class="bg-black bg-clip-text text-transparent">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="animate-fade-in-down-delai text-center text-3xl font-medium text-black underline decoration-pink-cabinet decoration-2 underline-offset-8 transition duration-200 md:text-4xl lg:text-6xl"
        >
          - Avocats à la Cour -
        </h2>
      </div>
      <!---menu -->
      <div class="my-20 mr-auto md:mx-auto">
        <ul
          class="flex animate-fade-in-down-delai-more flex-col justify-around space-y-3 text-lg font-medium uppercase md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative cursor-pointer px-3 tracking-wide text-black decoration-pink-cabinet decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-black decoration-pink-cabinet decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4"
            @mouseover="showDropdown = true"
            @mouseleave="showDropdown = false"
          >
            <a href="#equipe">L'equipe</a>
            <transition name="fade">
              <div
                v-if="showDropdown"
                class="absolute z-30 hidden h-auto w-52 rounded-lg bg-gray-50 text-black lg:-top-32 lg:left-5 lg:block"
              >
                <ul class="divide-y divide-gray-200 px-3 pb-1 pt-2 text-xs">
                  <li class="py-1 hover:font-semibold">
                    <a href="#MarcPantaloni">Marc Pantaloni</a>
                  </li>
                  <li class="py-1 hover:font-semibold">
                    <a href="#MagaliGreiner">Magali Greiner</a>
                  </li>
                  <li class="py-1 hover:font-semibold">
                    <a href="#GhinwaRachwan">Ghinwa Rachwan</a>
                  </li>
                  <li class="py-1 hover:font-semibold">
                    <a href="#SandrineNivetAbdoun">Sandrine Nivet-Abdoun</a>
                  </li>
                </ul>
              </div>
            </transition>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-black decoration-pink-cabinet decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-black decoration-pink-cabinet decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- end menu -->
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
