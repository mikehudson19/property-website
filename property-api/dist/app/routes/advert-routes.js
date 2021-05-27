"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.advertRouter = void 0;
const advert_controller_1 = require("../controllers/advert-controller");
const express_1 = __importDefault(require("express"));
const controller = new advert_controller_1.AdvertController();
const advertRouter = express_1.default.Router();
exports.advertRouter = advertRouter;
advertRouter.get("/", controller.getAdverts);
advertRouter.get("/:id", controller.getAdvert);
advertRouter.post("/", controller.create);
advertRouter.put("/:id", controller.update);
