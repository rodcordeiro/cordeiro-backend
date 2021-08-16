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
exports.WebhookServices = void 0;
const connection_1 = __importDefault(require("../database/connection"));
class WebhookServices {
    create_webhook(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let { name, origin, webhook } = data;
                if (!origin) {
                    origin = webhook;
                }
                yield connection_1.default('webhooks')
                    .insert({ name, origin, webhook })
                    .then(response => {
                    resolve({ name, origin });
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    list_webhooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('webhooks')
                    .select('*')
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    list_by_origin(origin) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('webhooks')
                    .select('*')
                    .where('origin', origin)
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    get_webhook_by_name(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('webhooks')
                    .select('*')
                    .where('name', name)
                    .first()
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let { id, name, origin, webhook } = data;
                const updated_at = new Date().toISOString();
                yield connection_1.default('webhooks')
                    .where({ id })
                    .update({ name, origin, webhook, updated_at })
                    .then((response) => {
                    resolve(response);
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield connection_1.default('webhooks')
                    .where({ id })
                    .first()
                    .delete()
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
exports.WebhookServices = WebhookServices;
