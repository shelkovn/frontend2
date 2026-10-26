<script setup lang="ts">
import { ref, onMounted } from 'vue';
let url = ref<string>("")
let pingy = ref<string>("eepy")
let pingvalue = ref<Number>(-1)

fetch('http://localhost:3000/ping')
  .then(res => res.json())
  .then(data => console.log(data));

onMounted(async () => {
  try {
    const startTime = Date.now()

    const response = await fetch('http://localhost:3000/ping');
    if (!response.ok) {
      throw new Error('servar dead');
    }

    const data = await response.json();

    const endTime = Date.now(); 

    pingy.value = data;

    pingvalue.value = endTime - startTime;
  } catch (error) {
    console.error("fetch error", error);
  }
});
</script>

<template>
  <input placeholder="image" v-model="url"/>
  <img :src="url" height="100px"/> 
  <br>
  <p> server HI! {{ pingy }} </p>
  <p> {{ pingvalue }} ms ping</p>
  <h1>boba</h1>

  <RouterView/>
</template>

<style scoped>

</style>