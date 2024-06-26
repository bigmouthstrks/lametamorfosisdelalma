<template>
    <div class="navbar-background navbar-container">
        <div class="container">
            <div class="row">
                <router-link
                    :to="'/' + backRoute"
                    class="text-center col-2 navbar-brand special-title"
                    >{{ backText }}</router-link
                >
                <router-link to="/" class="col-8 text-center navbar-brand special-title">{{
                    title
                }}</router-link>
                <span class="col-2" hidden>...</span>
            </div>
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
        },
        isBackVisible: {
            type: Boolean,
            required: true
        },
        backRoute: {
            type: String,
            required: true
        }
    },
    computed: {
        backText() {
            if (this.isBackVisible) {
                return '<--'
            } else {
                return ''
            }
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
