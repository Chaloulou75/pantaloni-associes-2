<template>
  <div class="relative w-full min-h-screen" id="herotop">
    <div
      class="absolute inset-0 bg-center bg-no-repeat bg-cover bg-hero-palais"
    ></div>
    <div
      class="absolute inset-0 bg-sky-600/5 backdrop-blur-sm backdrop-contrast-50 backdrop-opacity-50"
    ></div>
    <!-- Navigation   -->
    <div class="flex flex-col items-center justify-center min-h-screen mx-auto">
      <div class="relative mt-auto space-y-6 group lg:mb-24">
        <h1
          class="text-4xl font-black text-center text-white underline transition duration-200 decoration-gold-yellow underline-offset-8 lg:text-7xl"
        >
          <span class="text-transparent bg-white bg-clip-text">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="text-3xl font-semibold text-center text-white underline transition duration-200 decoration-gold-yellow underline-offset-8 lg:text-6xl"
        >
          <span> - Avocats à la Cour -</span>
        </h2>
      </div>
      <!---menu -->
      <div
        class="mt-8 mb-20 mr-auto desktop-menu md:my-16 md:mx-auto lg:divide-x lg:divide-gray-600"
      >
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-bold uppercase md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative px-3 tracking-wide text-white transition duration-500 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-white transition duration-500 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#equipe">L'equipe</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-white transition duration-500 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-gold-yellow hover:underline"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-white transition duration-500 ease-in-out cursor-pointer decoration-gold-yellow decoration-4 hover:translate-x-2 hover:text-gold-yellow hover:underline"
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
