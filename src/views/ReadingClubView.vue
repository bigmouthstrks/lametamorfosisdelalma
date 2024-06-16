<template>
    <Navbar />
    <div class="view-container">
        <h1 class="text-center special-title">Club de lectura</h1>
        <div class="container">hola</div>
    </div>
    <FooterComponent />
</template>

<script lang="ts">
import Navbar from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
    name: 'ReadingClubView',
    components: {
        Navbar,
        FooterComponent
    }
}
</script>

<style scoped>
.navbar-container,
.footer-container,
.view-container {
    background-color: #832b3b !important;
    color: #f8c29b;
}
</style>
