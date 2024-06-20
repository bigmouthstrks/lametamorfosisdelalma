<template>
    <div class="container">
        <br />
        <div class="bg-light rounded p-3 shadow">
            <div class="d-flex justify-content-center row">
                <div class="col-2">
                    <img
                        class="author-image rounded-circle"
                        src="../assets/images/profile-img.jpg"
                        alt=""
                    />
                </div>
                <div class="col-8">
                    <h5>
                        <strong>Acerca de la autora </strong
                        ><span class="author-name">{{ authorData.name }}</span>
                    </h5>
                    <p class="description text-dark">{{ authorData.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { type Author } from '../store/Author'

export default {
    name: 'AboutAuthor',
    props: {
        data: {
            type: Object as () => Author,
            required: true
        }
    },
    computed: {
        authorData() {
            return this.data
        }
    }
}
</script>

<style scoped>
.rounded-circle {
    width: 75%;
}
.description,
.author-name {
    font-weight: lighter;
}
.author-image {
    width: 100px;
    height: 100px;
}
</style>
