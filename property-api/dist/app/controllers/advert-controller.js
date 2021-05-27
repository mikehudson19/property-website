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
exports.AdvertController = void 0;
const models_1 = require("../../models");
class AdvertController {
    getAdverts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.db.Advert.findAndCountAll({
                include: [
                    {
                        model: models_1.db.User
                    }
                ]
            });
            res.send(result);
        });
    }
    getAdvert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.db.Advert.findByPk(req.params.id);
            res.send(result);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.db.Advert.create(req.body);
            res.send(result);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield models_1.db.Advert.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            res.send(result);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield models_1.db.Advert.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.sendStatus(200);
        });
    }
}
exports.AdvertController = AdvertController;
