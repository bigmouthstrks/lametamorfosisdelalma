<template>
    <div class="navbar-background footer-container">
        <div class="container">
            <p class="text-center">
                <small>&copy; 2024 La Metamorfosis del Alma. Todos los derechos reservados.</small>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
    position: absolute;
    width: 100%;
    padding: 0.5em;
    bottom: 0;
    left: 0;
    background-color: #fdd4d4;
    height: 36px !important;
    color: #a5a5a5;
}
</style>
