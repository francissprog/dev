<script setup lang="ts">
import { scrollTo, responsivePadding } from "../../utils/rootUtils";
import { Instagram, Facebook, Github, ListStart } from "lucide-vue-next";
</script>

<template>
  <footer
    class="h-[15vh] bg-black text-white px-20 flex justify-between items-center w-screen"
    :class="responsivePadding"
  >
    <a href="/" class="text-2xl font-stardock">LensShare</a>
    <div class="flex flex-row gap-4 items-center max-md:hidden">
      <button class="cursor-pointer" @click="() => scrollTo('home')">
        Home
      </button>
      <button class="cursor-pointer" @click="() => scrollTo('about')">
        About
      </button>
      <button class="cursor-pointer" @click="() => scrollTo('contact')">
        Contact
      </button>
    </div>

    <div class="flex flex-row gap-4 items-center max-md:hidden">
      <a href="https://www.instagram.com/francis_prog/?hl=en"> <Instagram /> </a
      ><a href="https://www.facebook.com/francis.gil.2024"> <Facebook /> </a
      ><a href="https://github.com/Franciss-prog">
        <Github />
      </a>
    </div>

    <button class="hidden max-md:block"><ListStart /></button>
  </footer>
</template>
