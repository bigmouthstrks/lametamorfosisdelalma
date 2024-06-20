import productsAsJson from './products.json'
import { type Product } from './Product'

export class ProductController {
    public getProduct(id: Number) {
        const products: Product[] = productsAsJson.products
        const product = products.find((product) => product.id == id);
        return product
    }
}