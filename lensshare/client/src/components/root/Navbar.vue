<script setup lang="ts">
import { scrollTo, responsivePadding, showNavbar } from "../../utils/rootUtils";
import { Aperture, ListStart } from "lucide-vue-next";


</script>
<template>
  <header class="absolute w-full">
    <nav
      class="flex justify-between items-center max-w-full px-20 py-5"
      :class="responsivePadding"
    >
      <!-- logo -->
      <a href="/"><Aperture /></a>
      <!-- navs -->
      <div class="flex gap-10 max-md:hidden">
        <button
          class="cursor-pointer hover:underline"
          @click="() => scrollTo('home')"
        >
          Home
        </button>
        <button
          class="cursor-pointer hover:underline"
          @click="() => scrollTo('about')"
        >
          About
        </button>
        <button
          class="cursor-pointer hover:underline"
          @click="() => scrollTo('contact')"
        >
          Contact
        </button>
      </div>
      <!-- routes -->
      <a href="/dashboard" class="max-md:hidden">Rent Now!</a>

      <!-- navbar to toggle for smaller screenss -->
      <button class="hidden max-md:block cursor-pointer" @click="showNavbar"><ListStart /></button>
    </nav>
    
  </header>
</template>
