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
exports.DiscordService = void 0;
const api_1 = require("../tools/api");
const Webhook_1 = require("../Services/Webhook");
class DiscordService {
    send_message(channel, message, options = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const wservices = new Webhook_1.WebhookServices();
                let hook = yield wservices.get_webhook_by_name(channel)
                    .then((response) => {
                    return response.webhook;
                })
                    .catch((error) => reject(error));
                yield api_1.discordApi.post(hook, {
                    "content": message,
                    "username": options.username ? options.username : "RodRobo",
                    "avatar_url": options.avatar_url ? options.avatar_url : "https://rodcordeiro.github.io/shares/img/rodrobo.jpg"
                })
                    .then(response => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
}
exports.DiscordService = DiscordService;
