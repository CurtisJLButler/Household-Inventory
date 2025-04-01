<script setup>
import HelloWorld from './components/Navbar.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/test">Test</router-link>
    <router-link to="/inventory">Inventory</router-link>
    <router-link to="/listtoget">List to get</router-link>
  </nav>
  <router-view></router-view>
</template>
