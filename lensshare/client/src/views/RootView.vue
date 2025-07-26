<script setup lang="ts">
import Navbar from "../components/root/Navbar.vue";
import Home from "../components/root/Home.vue";
import About from "../components/root/About.vue";
import Footer from "../components/root/Footer.vue";
import Contact from "../components/root/Contact.vue";
</script>

<template>
  <Navbar />
  <main class="text-black">
    <Home />
    <About />
    <Contact />
  </main>

  <Footer />
</template>
