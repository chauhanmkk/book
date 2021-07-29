export class Book {
    id: number;
    name: string;
    author: string;
    year: number;
    language: string;

    constructor() {
        this.name = "";
        this.author = "";
        this.year = 0;
        this.language = "";
    }
}