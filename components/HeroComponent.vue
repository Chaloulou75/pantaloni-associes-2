<template>
  <div
    class="relative min-h-screen w-full bg-hero-cabinet bg-cover bg-center bg-no-repeat"
    id="herotop"
  >
    <div
      class="absolute inset-0 bg-sky-800/50 mix-blend-overlay backdrop-blur-sm"
    ></div>
    <!-- Navigation -->
    <div
      class="mx-auto flex min-h-screen flex-col items-center justify-between"
    >
      <div class="relative mt-auto mb-20 space-y-8 lg:mb-44">
        <h1
          class="text-center text-4xl font-normal underline decoration-gold-yellow decoration-2 underline-offset-8 transition duration-200 md:text-8xl"
        >
          <span class="bg-gray-900 bg-clip-text text-transparent">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="text-center text-3xl font-medium text-gray-900 underline decoration-gold-yellow decoration-2 underline-offset-8 transition duration-200 md:text-6xl"
        >
          - Avocats à la Cour -
        </h2>
      </div>
      <!---menu -->
      <div class="my-20 mr-auto md:mx-auto">
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-normal uppercase md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4 md:text-gray-900"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4 md:text-gray-900"
          >
            <a href="#equipe">L'equipe</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4 md:text-gray-900"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative cursor-pointer px-3 tracking-wide text-white decoration-gold-yellow decoration-2 transition duration-300 ease-in-out hover:translate-x-2 hover:underline hover:underline-offset-4 md:text-gray-900"
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
