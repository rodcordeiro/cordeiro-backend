"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const express_1 = require("express");
const Chapters_1 = require("../Controllers/ESB/Chapters");
const esbEndpoints = express_1.Router();
const esb_chapters = new Chapters_1.esbChapters();
esbEndpoints.get('/esb/chapters', esb_chapters.index);
esbEndpoints.get('/esb/chapters/:id', esb_chapters.search);
esbEndpoints.post('/esb/chapters/create', jwt_1.default.validate, esb_chapters.create);
esbEndpoints.put('/esb/chapters/:id', jwt_1.default.validate, esb_chapters.update);
esbEndpoints.delete('/esb/chapters/:id', jwt_1.default.validate, esb_chapters.delete);
exports.default = esbEndpoints;
