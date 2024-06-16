<template>
    <div class="col p-3">
        <div class="fluid-container border rounded">
            <img
                class="product-image"
                src="../assets/images/products/la-revolucion-simbolica-cover.png"
                alt=""
            />
        </div>
        <div class="mt-2">
            <h2>{{ data.title }}</h2>
            <p class="text-secondary">
                <small>{{ data.shortDescription }}</small>
            </p>
        </div>
        <div
            class="badge rounded-pill text-bg-success-subtle ml-1 me-1 text-secondary"
            v-for="(tag, i) in data.tags"
            :key="i"
        >
            <small>{{ tag }}</small>
        </div>
        <div class="mt-4">
            <p class="price">{{ data.priceAsString }}<small class="currency">CLP</small></p>
        </div>
        <div class="d-flex justify-content-center">
            <button class="btn ml-1 me-1 rounded-pill btn-sm bg-danger-subtle pill">
                <small>Comprar</small>
            </button>
            <button class="btn ml-1 me-1 rounded-pill btn-sm bg-primary-subtle">
                <small>Ver más</small>
            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'ProductItem',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.badge {
    background-color: var(--bs-danger-bg-subtle);
}
.product-image {
    /* width: 320px;
    height: 320px; */
}

.price {
    font-size: 28px;
    font-family: 'Lemonada', cursive;
}

.currency {
    font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        Oxygen,
        Ubuntu,
        Cantarell,
        'Open Sans',
        'Helvetica Neue',
        sans-serif;
    font-weight: lighter;
    font-size: 16px;
}
</style>
