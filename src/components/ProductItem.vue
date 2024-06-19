<template>
    <div class="card border-0 shadow-sm">
        <div class="row">
            <div class="col-6 col-md-4">
                <img
                    src="../assets/images/products/la-revolucion-simbolica-cover.png"
                    alt="product image"
                    class="img-fluid rounded-start"
                />
            </div>
            <div class="col-6 col-md-8 row d-flex text-center">
                <div class="more-info-container text-end">
                    <div class="dropdown">
                        <button
                            class="btn border-0"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <strong>...</strong>
                        </button>
                        <ul class="dropdown-menu border-0 shadow-sm">
                            <li><a class="dropdown-item" href="#">Compartir </a></li>
                            <li><a class="dropdown-item" href="#">Ver más</a></li>
                        </ul>
                    </div>
                </div>
                <div class="justify-content-center card-body">
                    <h4 class="card-title">{{ data.title }}</h4>
                    <p class="card-text">
                        <small class="text-body-secondary">{{ data.shortDescription }}</small>
                    </p>
                    <div
                        class="badge rounded-pill ml-1 me-1 text-dark"
                        v-for="(tag, i) in data.tags"
                        :key="i"
                    >
                        <small>{{ tag }}</small>
                    </div>
                </div>
                <div class="justify-content-center">
                    <p class="price">
                        {{ data.priceAsString }} <small class="currency">CLP</small>
                    </p>
                    <button class="purchase-button">Comprar</button>
                </div>
            </div>
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
/* .card {
    max-width: 700px;
    min-width: 400px;
} */

.more-info-container {
    height: 4px;
}

.badge {
    background-color: var(--bs-danger-bg-subtle);
}

.price {
    font-size: 32px;
    font-weight: lighter;
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

.material-symbols-outlined {
    font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
}

.dropdown-item.active,
.dropdown-item:active {
    background-color: #6696c8;
    color: white;
}
</style>
