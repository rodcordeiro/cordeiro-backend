"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const Book_1 = require("../Services/Book");
class BookController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Book_1.BookService();
            const books = yield services.list_book()
                .then((response) => {
                return res.status(200).header('total-books', response.length.toString()).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Book_1.BookService();
            const books = yield services.create_book(req.body)
                .then(response => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Book_1.BookService();
            const { title, author, serie, serieOrder } = req.body;
            const { id } = req.params;
            const books = yield services.update({ id, title, author, serie, serieOrder })
                .then(response => {
                return res.status(200).json();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Book_1.BookService();
            const books = yield services.delete(req.params.id)
                .then(response => {
                return res.status(204).json();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    get_book(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Book_1.BookService();
            const books = yield services.get_book(req.params.id)
                .then(response => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
}
exports.BookController = BookController;
