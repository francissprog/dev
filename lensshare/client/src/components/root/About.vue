<script setup lang="ts">
import { MoveRight } from "lucide-vue-next";
import {
  scrollTo,
  responsivePadding,
  responsiveText,
} from "../../utils/rootUtils";
</script>

<template>
  <section class="h-screen px-20 py-5" :class="responsivePadding" id="about">
    <div class="flex items-start h-[60vh] justify-center flex-col">
      <span
        class="font-stardock text-6xl font-bold tracking-wider mb-10"
        :class="responsiveText"
        >Capture More,<br />Own Less</span
      >
      <div class="flex flex-col gap-3 items-start">
        <span
          class="flex items-center gap-2 max-md:gap-1 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-md"
          ><MoveRight />Pick a camera.
          <button
            class="hover:underline cursor-pointer  font-bold"
            @click="() => scrollTo('contact')"
          >
            Book it fast.
          </button></span
        >
        <span
          class="flex items-center gap-2 max-md:gap-1 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-md"
          ><MoveRight />Create your
          <button
            class="hover:underline cursor-pointer font-bold"
            @click="() => scrollTo('contact')"
          >
            best work.
          </button></span
        >
        <span
          class="flex items-center gap-2 text-2xl max-lg:text-xl max-md:text-lg max-sm:text-md"
          ><MoveRight />Easy and
          <button
            class="hover:underline cursor-pointer font-bold"
            @click="() => scrollTo('contact')"
          >
            hassle-free.
          </button></span
        >
      </div>
    </div>
  </section>
</template>
