import authorsJson from './authors.json'
import Author from './Author'

export class AuthorController {
    static getAuthors() {
        const authors: Author[] = authorsJson.authors
        return authors
    }
    static getAuthor(name: string) {
        const authors: Author[] = authorsJson.authors
        const author = authors.find((author) => author.name == name);
        return author
    }
}