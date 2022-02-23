<template>
  <div class="min-h-full bg-gray-600" id="contact">
    <h2
      class="sticky top-0 z-30 py-4 mb-8 text-xl font-medium tracking-wider text-center text-white uppercase bg-gray-600 backdrop-blur-xs"
    >
      Contact
    </h2>

    <div class="justify-around pb-32 space-y-6 md:space-y-0 lg:flex">
      <div
        class="flex justify-start w-full px-2 tracking-wider text-gray-100 lg:w-1/3 lg:justify-center"
      >
        <div>
          <p class="flex items-center text-lg lg:text-xl">
            <svg
              class="inline-block w-6 h-6 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Adresse:
          </p>
          <p
            class="mt-4 ml-10 text-lg font-extralight text-pink-cabinet lg:text-2xl"
          >
            Pantaloni &amp; Associés | Avocats
          </p>
          <p class="ml-10 text-lg">15 Rue Saussier Leroy</p>
          <p class="ml-10 text-lg">75017 Paris</p>
          <p class="ml-10 text-lg">France</p>
        </div>
      </div>

      <div
        class="flex justify-start w-full px-2 text-gray-100 lg:w-1/3 lg:justify-center"
      >
        <div>
          <p
            class="flex items-center justify-start pb-4 text-lg font-light text-gray-100 cursor-pointer lg:text-xl"
          >
            <svg
              class="inline-block w-6 h-6 mr-4 lg:mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              ></path>
            </svg>
            <Mailto
              mail="info@pantaloni-avocats.com"
              class="tracking-wide underline transition duration-200 ease-in-out decoration-pink-cabinet underline-offset-4 hover:translate-x-1"
              >info@pantaloni-avocats.com</Mailto
            >
          </p>
        </div>
      </div>
      <div
        class="flex justify-start w-full px-2 text-gray-100 lg:w-1/3 lg:justify-center"
      >
        <div class="text-lg tracking-wide">
          <p>Le cabinet vous reçoit sur rendez-vous.</p>
          <p>
            <span class="mr-2"> Horaires d'ouvertures: </span> de 9h30 à 17h30
          </p>
          <div class="flex items-center mt-2">
            <svg
              class="inline-block w-6 h-6 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <a href="tel:+33185734050">+ 33 1 85 73 40 50</a>
          </div>
          <p class="mt-2">
            <span class="p-1 mr-2"> Fax: </span> + 33 1 86 95 29 57
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
