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
exports.HabiticaService = void 0;
const Discord_1 = require("./Discord");
const api_1 = require("../tools/api");
class HabiticaService {
    webhookHandler(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (data.type == "scored" || data.type == "updated" || data.type == "checklistScored") {
                    if (data.task.id != "b322a291-87c4-490e-8bf6-2b7087538929") {
                        const task = yield api_1.habiAPI.get('/tasks/b322a291-87c4-490e-8bf6-2b7087538929', {
                            headers: {
                                'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                                'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                                'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                            }
                        }).then(response => {
                            return response.data.data;
                        });
                        const checklistItems = task.checklist.length;
                        let completed = 0;
                        task.checklist.map((item, index) => __awaiter(this, void 0, void 0, function* () {
                            if (item.completed) {
                                completed++;
                            }
                            else {
                                console.log({ item, completed });
                                yield api_1.habiAPI.post(`/tasks/b322a291-87c4-490e-8bf6-2b7087538929/checklist/${task.checklist[completed].id}/score`, {}, {
                                    headers: {
                                        'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                                        'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                                        'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                                    }
                                }).catch(err => {
                                    console.log({ err });
                                });
                                if (completed == checklistItems - 1) {
                                    yield api_1.habiAPI.post("/tasks/b322a291-87c4-490e-8bf6-2b7087538929/score/up", {}, {
                                        headers: {
                                            'x-api-user': 'c150cf43-bf4a-4c46-8912-9c04f77d3924',
                                            'x-api-key': '3a00e702-525c-41f2-a69a-d10b741b0c5c',
                                            'x-client': 'c150cf43-bf4a-4c46-8912-9c04f77d3924-cordeiroAPI'
                                        }
                                    }).catch(err => {
                                        console.log({ err });
                                    });
                                }
                            }
                        }));
                    }
                }
                const discord = new Discord_1.DiscordService();
                yield discord.send_message('habitica_news', `**Task ${data.type}**
            task: ${data.task.text}
            description: ${data.task.notes}\n`, {
                    username: "Grifo",
                    avatar_url: "https://habitica.com/static/img/melior@3x.fe3b187f.png"
                })
                    .then(response => {
                    resolve("");
                })
                    .catch(err => {
                    reject(err);
                });
            }));
        });
    }
}
exports.HabiticaService = HabiticaService;
