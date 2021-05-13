"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = __importDefault(require("../Services/jwt"));
var express_1 = require("express");
var DiscordController_1 = __importDefault(require("../controllers/DiscordController"));
var trelloController_1 = __importDefault(require("../controllers/trelloController"));
var webhooksController_1 = __importDefault(require("../controllers/webhooksController"));
var webhookRoutes = express_1.Router();
var discord = new DiscordController_1.default();
var webhooksController = new webhooksController_1.default();
webhookRoutes.post('/webhooks', jwt_1.default.verify, webhooksController.create);
webhookRoutes.get('/webhooks', webhooksController.get_webhooks);
webhookRoutes.get('/webhooks/:origin', webhooksController.get_webhook);
webhookRoutes.post('/webhooks/habitica', discord.habiticaMessage);
webhookRoutes.post('/webhook/devto', function (req, res) {
    discord.sendMessage('testes_do_cordeiro', '**Webhook do DevTo received!**', res);
    console.log(req.body);
});
webhookRoutes.post('/webhooks/trello', trelloController_1.default.cardWebhook); //Receives webhooks notifications
webhookRoutes.head('/webhooks/trello', trelloController_1.default.newWebhook); //Receives webhook creation request
exports.default = webhookRoutes;
