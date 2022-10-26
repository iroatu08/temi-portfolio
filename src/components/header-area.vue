<template>
  <div>
    <nav
      class="py-2 px-12 bg-white shadow-sm flex items-center justify-between w-full sticky top-0 z-10"
    >
      <div class="logo w-48">
        <RouterLink to="/"
          ><img src="../assets/logo.svg" alt="" srcset=""
        /></RouterLink>
      </div>

      <div class="nav flex items-centers space-x-8 text-lg">
        <RouterLink to="/about">About</RouterLink>
        <router-link to="/#showcase">Showcase</router-link>
        <RouterLink to="/contact">Contact</RouterLink>

        <div class="icons flex items-center space-x-4">
          <img class="w-4" src="../assets/twitter.svg" alt="" srcset="" />
          <img class="w-4" src="../assets/ig.svg" alt="" srcset="" />
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
nav a.router-link-exact-active {
  text-decoration: none;
  color: #f38043;
  transition: 0.4s;
}

nav a:hover {
  color: #f38043;
}
</style>
