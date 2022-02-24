<template>
  <div class="relative w-full min-h-screen" id="herotop">
    <nuxt-img
      sizes="sm:100vw"
      src="/img/palais3.jpg"
      alt="palais"
      class="absolute inset-0 object-cover w-full h-full opacity-50"
    />
    <div
      class="absolute inset-0 backdrop-blur-xxs md:bg-pink-cabinet/50 md:mix-blend-overlay"
    ></div>

    <!-- Navigation -->
    <div
      class="flex flex-col items-center justify-between min-h-screen mx-auto"
    >
      <div class="relative mt-auto mb-20 space-y-8">
        <h1
          class="text-4xl font-normal text-center underline transition duration-200 animate-fade-in-down decoration-pink-cabinet decoration-2 underline-offset-8 md:text-6xl lg:text-8xl"
        >
          <span class="text-transparent bg-black bg-clip-text">
            Pantaloni &amp; Associés
          </span>
        </h1>
        <h2
          class="text-3xl font-medium text-center text-black underline transition duration-200 animate-fade-in-down-delai decoration-pink-cabinet decoration-2 underline-offset-8 md:text-4xl lg:text-6xl"
        >
          - Avocats à la Cour -
        </h2>
      </div>
      <!---menu -->
      <div class="my-20 mr-auto md:mx-auto">
        <ul
          class="flex flex-col justify-around space-y-3 text-lg font-medium uppercase animate-fade-in-down-delai-more md:flex-row md:space-x-8 md:space-y-0 lg:text-2xl"
        >
          <li
            class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#cabinet">Le cabinet</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#equipe">L'equipe</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
          >
            <a href="#expertise">Expertise</a>
          </li>
          <li
            class="relative px-3 tracking-wide text-black transition duration-300 ease-in-out cursor-pointer decoration-pink-cabinet decoration-2 hover:translate-x-2 hover:underline hover:underline-offset-4"
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
