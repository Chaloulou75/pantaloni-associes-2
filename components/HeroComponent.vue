<template>
  <div class="relative w-full min-h-screen" id="herotop">
    <div
      class="absolute inset-0 bg-center bg-no-repeat bg-cover bg-hero-cabinet blur-sm"
    ></div>
    <div
      class="absolute inset-0 bg-sky-800 mix-blend-soft-light lg:backdrop-blur-sm"
    ></div>
    <!-- Navigation  backdrop-opacity-20 backdrop-contrast-50-->
    <div class="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div class="relative mt-auto mb-12 space-y-6">
        <h1
          class="text-4xl font-black text-center underline transition duration-200 decoration-gold-yellow underline-offset-8 md:text-7xl"
        >
          <span class="text-transparent bg-gray-900 bg-clip-text">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="text-3xl font-semibold text-center text-gray-900 underline transition duration-200 decoration-gold-yellow underline-offset-8 md:text-6xl"
        >
          - Avocats à la Cour -
        </h2>
      </div>
      <!---menu -->
      <div class="my-20 mr-auto md:mx-auto">
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-bold uppercase md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative px-3 tracking-wide text-gray-900 transition duration-300 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-white hover:underline hover:underline-offset-4"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-gray-900 transition duration-300 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-white hover:underline hover:underline-offset-4"
          >
            <a href="#equipe">L'equipe</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-gray-900 transition duration-300 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-white hover:underline hover:underline-offset-4"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-gray-900 transition duration-300 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-white hover:underline hover:underline-offset-4"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <!-- end menu -->
    </div>
  </div>
</template>

<script>
export default {};
</script>
