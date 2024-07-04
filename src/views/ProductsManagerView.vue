<template>
    <h1>Products</h1>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { ProductController } from '../store/Product/ProductController'
import Product from '../store/Product/Product'

export default {
    name: 'ProductsManagerView',
    setup() {
        onMounted(async () => {
            const products: Promise<any> = await ProductController.getProducts()
            products.then((result) => {
                console.log(result)
            })
        })
    }
}
</script>
