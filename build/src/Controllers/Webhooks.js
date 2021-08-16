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
exports.WebhooksController = void 0;
const Webhook_1 = require("../Services/Webhook");
const Habitica_1 = require("../Services/Habitica");
class WebhooksController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Services = new Webhook_1.WebhookServices();
            const webhook = yield Services.create_webhook(req.body)
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
            const Services = new Webhook_1.WebhookServices();
            const { id } = req.params;
            const { name, origin, webhook } = req.body;
            yield Services.update({ id, origin, webhook, name })
                .then(response => {
                return res.status(204).json();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Services = new Webhook_1.WebhookServices();
            const { id } = req.params;
            yield Services.delete(id)
                .then(response => {
                return res.status(204).json();
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    get_webhooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const Services = new Webhook_1.WebhookServices();
            const webhook = yield Services.list_webhooks()
                .then((response) => {
                return res.status(200).header('TOTAL-X-COUNT', response.length.toString()).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    get_webhook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { origin } = req.params;
            const Services = new Webhook_1.WebhookServices();
            const webhook = yield Services.list_by_origin(origin)
                .then((response) => {
                return res.status(200).header('TOTAL-X-COUNT', response.length.toString()).json(response);
            })
                .catch(err => {
                return res.status(400).json(err);
            });
        });
    }
    run_webhook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { origin, webhook } = req.params;
            if (origin == "habitica") {
                const service = new Habitica_1.HabiticaService();
                yield service.webhookHandler(req.body)
                    .then(response => {
                    return res.status(204).json();
                })
                    .catch(err => {
                    return res.status(400).json(err);
                });
            }
            return res.status(200).send();
        });
    }
    validate_webhook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { origin, webhook } = req.params;
        });
    }
}
exports.WebhooksController = WebhooksController;
