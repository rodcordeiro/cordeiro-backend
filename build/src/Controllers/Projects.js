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
exports.ProjectController = void 0;
const connection_1 = __importDefault(require("../database/connection"));
const uuid_1 = require("uuid");
class ProjectController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection_1.default('projects')
                .then(response => {
                return res.status(200).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            const { title, description, tags, image, url, repository } = req.body;
            yield connection_1.default('projects')
                .insert({ id, title, description, tags, image, url, repository })
                .then(response => {
                return res.status(200).json({ id, title, description });
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    get_project(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield connection_1.default('projects')
                .select("*")
                .where({ id })
                .first()
                .then(response => {
                if (response)
                    return res.status(200).json(response);
                return res.status(400).json({ err: "Projeto não encontrado" });
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { title, description, tags, image, url, repository } = req.body;
            yield connection_1.default('projects')
                .update({ title, description, tags, image, url, repository })
                .where("id", id)
                .then(response => {
                return res.status(200).json({ title, description });
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield connection_1.default('projects')
                .select("*")
                .where({ id })
                .first()
                .delete()
                .then(response => {
                if (response)
                    return res.status(204).json();
                return res.status(400).json({ err: "Projeto não encontrado" });
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
}
exports.ProjectController = ProjectController;
