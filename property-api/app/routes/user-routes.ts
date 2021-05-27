import { UserController } from "../controllers/user-controller";
import express from "express";
import passport from "passport";

const controller = new UserController();
const userRouter = express.Router();

userRouter.get("/", controller.list);
userRouter.get("/:id", controller.user);
userRouter.post("/login", controller.login);
userRouter.post("/register", controller.register);
userRouter.get("/protected", passport.authenticate('jwt', { session: false }), controller.getProtectedTest);

export{userRouter};