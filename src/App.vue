<template>
    <header>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
    </header>

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
    },
};
</script>

<style lang="scss">
</style>
