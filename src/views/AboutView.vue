<template>
    <div class="about-page">
        <Navbar title="Acerca de mí" :isBackVisible="true" backRoute="" />

        <div class="about-content">
            <AboutAuthor authorName="Valentina Moraga" />
        </div>

        <FooterComponent />
    </div>
</template>

<script lang="ts">
import Navbar          from '../components/Navbar.vue'
import FooterComponent from '../components/FooterComponent.vue'
import AboutAuthor     from '../components/AboutAuthor.vue'

export default {
    name: 'AboutView',
    components: { Navbar, FooterComponent, AboutAuthor }
}
</script>

<style scoped>
.about-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #120620 0%, #1e0b2e 50%, #3a0d1e 100%);
    display: flex;
    flex-direction: column;
}

.about-content {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 100px 0 60px;
}
</style>
