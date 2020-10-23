<template>
    <header>
        <router-link to="/">Go to Home</router-link>
        <router-link to="/about">Go to About</router-link>
    </header>

    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <AddUser @add-user="showUsers" />

    <ShowUser :emitedUsers="users" />

    <router-view></router-view>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import AddUser from "./components/AddUser.vue";
import ShowUser from "./components/ShowUser.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        AddUser,
        ShowUser,
    },

    data() {
        return {
            users: [],
        };
    },

    methods: {
        showUsers(payload /*any thing*/) {
            this.users.push(payload);
        },
    },
};
</script>

<style lang="scss">
body {
    text-align: center;
}
</style>
