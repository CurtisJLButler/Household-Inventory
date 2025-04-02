<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar/>
  <router-view></router-view>
</template>

<style>

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
}

header img {
  display: block;
  margin: 0 auto;
}

.wrapper h1 {
  margin: 0;
}

.wrapper p {
  font-size: 16px;
  margin-top: 5px;
}



</style>
