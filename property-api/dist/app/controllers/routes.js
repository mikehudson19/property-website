"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// const controller = require('./controller');
const controller_1 = require("./controller");
const express_1 = __importDefault(require("express"));
const controller = new controller_1.Controller();
const router = express_1.default.Router();
exports.router = router;
router.get("/", controller.test);
/** @Todo: Need to find a way to export all routers through classes in this file. Or just a better way of doing this so that I don't have a bunch of lines for the router config in the server.ts file */ 
