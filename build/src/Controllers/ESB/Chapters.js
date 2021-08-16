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
exports.esbChapters = void 0;
const connection_1 = __importDefault(require("../../database/connection"));
class esbChapters {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default('esb_chapters')
                .select('*')
                .orderBy('created_at', 'asc')
                .then(response => {
                return res.json(response);
            })
                .catch(err => {
                return res.json(err.message);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, text } = req.body;
            const author = req.headers.id;
            yield connection_1.default('esb_chapters')
                .insert({ title, text, author })
                .then(response => {
                return res.json({ action: "create", chapter: { title } });
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, text, author } = req.body;
            const updated_at = new Date().toISOString();
            yield connection_1.default('esb_chapters')
                .where({ id })
                .update({ title, text, author, updated_at })
                .then(response => {
                return res.status(200).json({ action: "update", chapter: { id, title } });
            })
                .catch(err => {
                return res.status(err.statusCode).json(err.message);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield connection_1.default('esb_chapters')
                .where({ id })
                .delete()
                .then(response => {
                return res.status(204).send();
            })
                .catch(err => {
                return res.status(err.statusCode).json(err.message);
            });
        });
    }
    search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield connection_1.default('esb_chapters')
                .select('*')
                .where({ id })
                .first()
                .then(response => {
                return res.json(response);
            })
                .catch(err => {
                return res.json(err.message);
            });
        });
    }
}
exports.esbChapters = esbChapters;
