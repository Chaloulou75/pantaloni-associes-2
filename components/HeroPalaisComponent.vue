<script setup></script>

<template>
  <div class="relative w-full h-screen bg-white" id="herotop">
    <!-- Navigation -->
    <div
      class="flex flex-col items-center justify-between min-h-screen mx-auto"
    >
      <div class="relative mt-auto mb-4 space-y-2 md:mb-20">
        <NuxtImg
          sizes=""
          height="200"
          src="/logo.jpg"
          alt="logo"
          class="w-auto h-auto mx-auto"
        />
        <h1
          class="text-2xl font-medium text-center uppercase transition duration-200 animate-fade-in-down md:text-3xl lg:text-4xl"
        >
          <span class="font-semibold">P</span>antaloni
          <span class="font-semibold">G</span>reiner
          <span class="font-semibold">R</span>achwan
        </h1>
        <h2
          class="text-lg font-thin text-center text-gray-700 uppercase transition duration-200 animate-fade-in-down-delai md:text-xl lg:text-2xl"
        >
          Avocats
        </h2>
      </div>
      <!---menu -->
      <div class="my-20 mr-auto md:mx-auto">
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-medium uppercase animate-fade-in-down-delai-more md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-red-500 decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <NuxtLink to="#cabinet">Le cabinet</NuxtLink>
          </li>

          <li
            class="hs-tooltip relative inline-block cursor-pointer px-3 tracking-wide text-black decoration-red-500 decoration-2 transition duration-300 ease-in-out [--trigger:hover] hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <NuxtLink to="#equipe">L'equipe</NuxtLink>
            <div
              class="absolute z-10 invisible w-full h-auto px-4 py-3 font-medium text-black transition-opacity rounded shadow-sm opacity-0 hs-tooltip-content bg-gray-50 hs-tooltip-shown:visible hs-tooltip-shown:opacity-100"
            >
              <ul
                class="w-auto px-3 space-y-2 text-xs divide-y divide-gray-200"
              >
                <li class="py-1 whitespace-nowrap hover:font-semibold">
                  <NuxtLink to="#MarcPantaloni">Marc Pantaloni</NuxtLink>
                </li>
                <li class="py-1 whitespace-nowrap hover:font-semibold">
                  <NuxtLink to="#MagaliGreiner">Magali Greiner</NuxtLink>
                </li>
                <li class="py-1 whitespace-nowrap hover:font-semibold">
                  <NuxtLink to="#GhinwaRachwan">Ghinwa Rachwan</NuxtLink>
                </li>
                <li class="py-1 whitespace-nowrap hover:font-semibold">
                  <NuxtLink to="#SandrineNivetAbdoun"
                    >Sandrine Nivet-Abdoun</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </li>
          <li
            class="px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-red-500 decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <NuxtLink to="#expertise">Expertise</NuxtLink>
          </li>
          <li
            class="px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-red-500 decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <NuxtLink to="#contact">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <!-- end menu -->
    </div>
  </div>
</template>
