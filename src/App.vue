<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'App'
})
</script>

<style scoped>
#app {
    background-color: #699ac4 !important;
}
</style>
