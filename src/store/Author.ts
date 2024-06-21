export interface AuthorInterface {
    id: number
    name: string
    description: string
    image: string
}

export default class Author implements AuthorInterface {
    id: number
    name: string
    description: string
    image: string

    constructor(id: number, name: string, description: string, image: string) {
        this.id = id
        this.name = name
        this.description = description
        this.image = image
    }
}
