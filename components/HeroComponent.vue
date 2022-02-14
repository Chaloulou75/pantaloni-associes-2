<template>
  <div class="relative min-h-screen w-full" id="herotop">
    <div
      class="absolute inset-0 bg-hero-cabinet bg-cover bg-center bg-no-repeat"
    ></div>
    <div
      class="absolute inset-0 bg-sky-800/5 backdrop-blur-sm backdrop-contrast-50 backdrop-opacity-50"
    ></div>
    <!-- Navigation   -->
    <div class="mx-auto flex min-h-screen flex-col items-center justify-center">
      <div class="group relative mt-auto space-y-6 lg:mb-24">
        <h1
          class="text-center text-4xl font-black text-white underline decoration-gold-yellow underline-offset-8 transition duration-200 lg:text-7xl"
        >
          <span class="bg-white bg-clip-text text-transparent">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="text-center text-3xl font-semibold text-white underline decoration-gold-yellow underline-offset-8 transition duration-200 lg:text-6xl"
        >
          - Avocats à la Cour -
        </h2>
      </div>
      <!---menu -->
      <div
        class="desktop-menu mt-8 mb-20 mr-auto md:my-16 md:mx-auto lg:divide-x lg:divide-gray-600"
      >
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-bold uppercase md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-4 transition duration-500 ease-in-out hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-4 transition duration-500 ease-in-out hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#equipe">L'equipe</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-4 transition duration-500 ease-in-out hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-4 transition duration-500 ease-in-out hover:translate-x-2 hover:text-gold-yellow hover:underline"
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
