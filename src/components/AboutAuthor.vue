<template>
    <div class="container">
        <br />
        <div class="bg-light rounded p-3 shadow">
            <div class="d-flex justify-content-center row">
                <div class="col-12 col-md-2 text-center pb-2 pb-md-0">
                    <img
                        class="author-image rounded-circle"
                        src="../assets/images/profile-img.jpg"
                        alt=""
                    />
                </div>
                <div class="col-12 col-md-8">
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
import Author from '../store/Author/Author'
import { AuthorController } from '../store/Author/AuthorController'

export default {
    name: 'AboutAuthor',
    props: {
        authorName: {
            type: String,
            required: true
        }
    },
    computed: {
        authorData() {
            return AuthorController.getAuthor(this.authorName) as Author
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
