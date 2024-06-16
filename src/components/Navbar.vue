<template>
    <div class="navbar-background navbar-container">
        <div class="container text-center">
            <router-link to="/" class="navbar-brand special-title">{{ title }}</router-link>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NavBar',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.navbar-container {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    font-size: 18px;
}
.navbar {
    height: 50px !important;
}
</style>
