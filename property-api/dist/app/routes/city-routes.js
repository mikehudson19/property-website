"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cityRouter = void 0;
const city_controller_1 = require("../controllers/city-controller");
const express_1 = __importDefault(require("express"));
const controller = new city_controller_1.CityController();
const cityRouter = express_1.default.Router();
exports.cityRouter = cityRouter;
cityRouter.get('/', controller.list);
