<script setup lang="ts">
import { reactive, ref } from "vue";
const loading = ref(false);
import { responsiveText, responsivePadding } from "../../utils/rootUtils";
const form = reactive({
  username: "",
  email: "",
  message: "",
});
const handleMessage = async (e: Event) => {
  e.preventDefault();
  loading.value = true;

  if (!form.username || !form.email || !form.message) {
    console.error("input all fields");
    loading.value = false;
    return;
  }
};
</script>

<template>
  <section
    class="min-h-screen px-20 py-5"
    id="contact"
    :class="responsivePadding"
  >
    <div
      class="flex justify-start items-start flex-col w-full h-screen text-xl max-lg:text-lg max-md:text-md max-sm:text-sm"
    >
      <span
        class="font-stardock font-bold text-6xl tracking-widest mb-10"
        :class="responsiveText"
        >Let's Collab</span
      >
      <form
        class="flex flex-col gap-6 items-start w-full"
        @submit="handleMessage"
      >
        <input
          type="name"
          class="w-full p-3 outline-black border border-black"
          placeholder="Name"
          v-model="form.username"
        />
        <input
          type="email"
          class="w-full p-3 outline-black border border-black"
          placeholder="Email"
          v-model="form.email"
        />
        <textarea
          class="h-56 w-full p-3 outline-black border border-black resize-none max-lg:h-48 max-md:h-40 max-sm:h-32"
          placeholder="Message"
          v-model="form.message"
        ></textarea>
        <button
          class="relative cursor-pointer outline-none bg-black text-white px-20 py-4 flex items-center justify-center w-full max-lg:px-16 max-md:px-12 max-sm:px-8"
        >
          <div
            v-if="loading"
            class="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"
          ></div>
          <span v-else>Submit Message</span>
        </button>
      </form>
    </div>
  </section>
</template>
