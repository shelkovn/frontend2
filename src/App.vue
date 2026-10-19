<script setup lang="ts">
import { ref } from 'vue';
import AuthView from './views/AuthView.vue';
let url = ref<string>("")
</script>

<template>
  <input placeholder="kiwifarm" v-model="url"/>
  <br/>
  <img :src="url"/> 
  <h1>boba</h1>

  <a href="/auth">
    <button> auf </button>
  </a>

  <button @click="$router.push('/auth')"> cool auth </button>

  <RouterView/>
</template>

<style scoped>

</style>