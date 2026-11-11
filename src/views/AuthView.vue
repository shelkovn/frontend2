<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

let login = ref<string>("")
let password = ref<string>("")

let regcommand = async () => {
  try {

    const response = await axios.post('http://localhost:3000/register', 
      {
        login: login.value,
        password: password.value
      }
    );
    if (!response) {
      throw new Error('servar dead');
    }
    console.log(response.data)
  } catch (error) {
    console.error("register fetch error", error);
  }
}

let logincommand = async () => {
  try {

    const response = await axios.post('http://localhost:3000/login', 
      {
        login: login.value,
        password: password.value
      }
    );
    if (!response) {
      throw new Error('servar dead');
    }
    console.log(response.data)
  } catch (error) {
    console.error("login fetch error", error);
  }
}
</script>

<template>
  <p> abtorizacya</p>

  <br/>
  <input placeholder="imya" type="login" v-model="login" />
  <br/>
  <input placeholder="parol" type="password" v-model="password" />
  <br/>
  <button @click="regcommand"> create biba </button>
  <button @click="logincommand"> auth </button>

  <br/>
  <button @click="$router.push('/')"> homa </button>
</template>

<style scoped>

</style>