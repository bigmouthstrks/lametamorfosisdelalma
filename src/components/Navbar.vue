<template>
    <div class="navbar-background navbar-container">
        <div class="container text-center">
            <router-link to="/" class="navbar-brand special-title"
                >La metamorfosis del alma</router-link
            >
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'NavBar'
}
</script>

<style scoped>
.navbar-container {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fdd4d4;
    font-size: 18px;
}
.navbar {
    height: 50px !important;
    padding: 8px;
}
</style>
