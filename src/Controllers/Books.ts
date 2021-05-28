import { Request, Response } from "express";
import { BookService,iBook } from "../Services/Book"

class BookController{
    async index(req: Request, res: Response){
        const services = new BookService();       
        const books = await services.list_book();
        const total =  books.data.length
        return res.status(books.message == "success" ? 200 : 400).header('total-books',total.toString()).json(books)
    }
    async create(req: Request, res: Response){
        const services = new BookService();
        const books = await services.create_book(req.body);
        return res.status(books.message == "success" ? 200 : 400).json(books)
    }
    async update(req: Request, res: Response){
        const services = new BookService();
        
    }
    async delete(req: Request, res: Response){
        const services = new BookService();
        const books = await services.delete(req.params.id)
        return res.status(books.message == "success" ? 200 : 400).json(books)
    }
    async get_book(req: Request, res: Response){
        const services = new BookService();
        const books = await services.get_book(req.params.id)
        return res.status(books.message == "success" ? 200 : 400).json(books)
    }
}

export {
    BookController
}