<script setup lang="ts">
import { responsivePadding, responsiveText } from '../../utils/rootUtils';
</script>

<template>
  <section class="min-h-screen bg-white px-20 py-5" :class="responsivePadding" id="home">
    <div class="flex justify-center items-center h-screen">
      <div class="flex flex-col items-start gap-2 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-md">
        <span class="font-stardock text-6xl font-bold tracking-wider" :class="responsiveText"
          >LensShare</span
        >
        <span >Rent. Shoot. Return.</span>
        <div class="flex justify-center items-center  w-full max-w-96 h-auto max-h-72">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F218%2F987%2Foriginal%2Fblack-camera-lens-isolated-on-a-transparent-background-png.png&f=1&nofb=1&ipt=2bff99f458fac28e97ab4ec9d3b8379e34aaf9ba60f1d7a7e9e4c2a8751ae9da&ipo=images"
            alt="image"
            class="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  </section>
</template>