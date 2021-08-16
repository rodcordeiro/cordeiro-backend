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
exports.DiscordController = void 0;
const Discord_1 = require("../Services/Discord");
class DiscordController {
    sendMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const services = new Discord_1.DiscordService();
            let { message, channel } = req.body;
            message = message ? message : "I'm alive fools.";
            channel = channel ? channel : "testes_do_cordeiro";
            const service = yield services.send_message(channel, message)
                .then(response => {
                return res.status(204).json();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
}
exports.DiscordController = DiscordController;
