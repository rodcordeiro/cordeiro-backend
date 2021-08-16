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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const uuid_1 = require("uuid");
class BookService {
    list_book() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('books')
                    .select('*')
                    .orderBy('serie', 'asc')
                    .orderBy('serieOrder', 'asc')
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    create_book(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const id = uuid_1.v4();
                const { title, author, serie, serieOrder } = data;
                yield connection_1.default('books')
                    .insert({
                    id, title, author, serie, serieOrder
                })
                    .then(response => {
                    resolve({
                        id,
                        title,
                        author
                    });
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    get_book(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const book = yield connection_1.default('books')
                    .select('*')
                    .where("id", id)
                    .first()
                    .then(response => {
                    if (response)
                        resolve(response);
                    reject("Livro não encontrado");
                })
                    .catch(err => reject(err));
            }));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const book = yield connection_1.default('books')
                    .where("id", id)
                    .first()
                    .delete()
                    .then(response => {
                    if (response !== 0)
                        resolve("");
                    reject("Livro não encontrado");
                })
                    .catch(err => reject(err));
            }));
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let { id, title, author, serie, serieOrder } = data;
                const updated_at = new Date().toISOString();
                yield connection_1.default('books')
                    .update({ title, author, serie, serieOrder, updated_at })
                    .where("id", id)
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => reject(err));
            }));
        });
    }
}
exports.BookService = BookService;
