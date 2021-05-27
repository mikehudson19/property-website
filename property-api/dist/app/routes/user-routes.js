"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const user_controller_1 = require("../controllers/user-controller");
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const controller = new user_controller_1.UserController();
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.get("/", controller.users);
userRouter.post("/login", controller.login);
userRouter.post("/register", controller.register);
userRouter.get("/protected", passport_1.default.authenticate('jwt', { session: false }), controller.getProtectedTest);
