<template>
    <div id="app">
        <Navbar />
        <router-view></router-view>
        <FooterComponent />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/FooterComponent.vue'

export default defineComponent({
    name: 'App',
    components: {
        Navbar,
        FooterComponent
    }
})
</script>
