import { Request, Response } from 'express';
import { BookService, iBook } from '../Services/Book';

class BookController {
  async index(req: Request, res: Response) {
    const services = new BookService();
    const books = await services
      .list_book()
      .then((response: Array<iBook>) => {
        return res
          .status(200)
          .header('total-books', response.length.toString())
          .json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async create(req: Request, res: Response) {
    const services = new BookService();
    const books = await services
      .create_book(req.body)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async update(req: Request, res: Response) {
    const services = new BookService();
    const { title, author, serie, serieOrder }: iBook = req.body;
    const { id }: any = req.params;
    const books = await services
      .update({ id, title, author, serie, serieOrder })
      .then((response) => {
        return res.status(200).json();
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async delete(req: Request, res: Response) {
    const services = new BookService();
    const books = await services
      .delete(req.params.id)
      .then((response) => {
        return res.status(204).json();
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
  async get_book(req: Request, res: Response) {
    const services = new BookService();
    const books = await services
      .get_book(req.params.id)
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  }
}

export { BookController };
