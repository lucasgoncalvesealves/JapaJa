<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="wrapper">
    <TheHeader />
    <RouterView />
    <TheFooter />
  </div>
</template>