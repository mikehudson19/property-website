"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.provinceRouter = void 0;
const province_controller_1 = require("../controllers/province-controller");
const express_1 = __importDefault(require("express"));
const controller = new province_controller_1.ProvinceController();
const provinceRouter = express_1.default.Router();
exports.provinceRouter = provinceRouter;
provinceRouter.get('/', controller.list);
