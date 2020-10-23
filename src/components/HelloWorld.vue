<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>

    <span class="click">click me</span>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
};
</script>
<style scoped lang="scss">
h1 {
    color: $color;
}
</style>
