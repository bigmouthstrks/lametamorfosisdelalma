import productsAsJson from './products.json'
import { Stringify } from '../../utils/JSONStringify'
import Product from './Product'
import { put } from '@vercel/blob'
import { APIService, HttpMethod } from '@/utils/APIService'

export class ProductController {
    static getLocalProducts() {
        const products: Product[] = productsAsJson.products
        return products
    }
    static async getProducts(): Promise<any> {
        const products = await APIService.returningRequest<any>(
            'https://5skeecz6ao7d1lie.public.blob.vercel-storage.com/products/products-cb9LFOvmAyoYFIs44OuI3fiUQDFYPC.json',
            HttpMethod.GET,
            (error) => console.log(error)
        )
        console.log(products)
        return products
    }
    static getLocalProduct(id: number) {
        const products: Product[] = productsAsJson.products
        const product = products.find((product) => product.id == id)

        return product
    }
    static async addProduct(product: Product) {
        try {
            const currentProducts: Promise<Product[]> = this.getProducts()
            currentProducts.then((productsResponse) => {
                const index = productsResponse.findIndex((prod) => prod.id === product.id)
                if (index !== -1) {
                    productsResponse[index] = product
                } else {
                    productsResponse.push(product)
                }
                const body = Stringify.parse(productsResponse)
                put('products/products.json', body, { access: 'public' })
            })
        } catch (error) {
            console.log(error)
            console.log('Error adding product')
            throw error
        }
    }
    static getBlobProducts() {}
}
