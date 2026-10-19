<script setup lang="ts">
import { ref } from 'vue';

let clicks = ref<number>(1)
let bibacide = ref<boolean>(false)
let login = ref<string>("")
let password = ref<string>("")

let inc = () => {
    clicks.value++;
    console.log(clicks);
}

let cooler_inc = (i: number) => {
    clicks.value += i;
    console.log(clicks);
}

let reset = () => {
    clicks.value = 0
    bibacide.value = true
    console.log("HERETICS");
}

</script>

<template>
    <input placeholder="boba" type="text" v-model="login" />
    <input placeholder="secret" type="password" v-model="password" />
    
    <p v-if="clicks <= 5">
        WORK HARDER
        <span v-if="bibacide"> FOREVER SINNER the lost bibas are crying. <br /> doxxing: {{ login }} <br /> pwd: {{
            password }}</span>
        <span v-else> lawful </span>
    </p>
    <p v-if="clicks > 5">
        big biba {{ clicks }}
        <span v-if="bibacide"> FOREVER SINNER the lost bibas may forgive you </span>
        <span v-else> lawful </span>
    </p>

    <a href="/auth">
        <button> auf </button>
    </a>

    <button @click="$router.push('/auth')"> cool auth </button>

    <button @click="inc"> bibinator </button>
    <button @click="reset"> UNBIBA </button>
    <br />
    <div v-for="i in clicks">
        <button @click="cooler_inc(clicks - i + 1)"> {{ clicks - i + 1 }} bib{{ "a".repeat(clicks - i + 1) }} </button>
    </div>
</template>

<style scoped>
button {
    margin: 5px;
}
</style>