import { AdvertController } from "../controllers/advert-controller";
import express from "express";

const controller = new AdvertController();
const advertRouter = express.Router();

advertRouter.get("/", controller.getAdverts);
advertRouter.get("/:id", controller.getAdvert);
advertRouter.post("/", controller.create);
advertRouter.put("/:id", controller.update);
advertRouter.delete("/:id", controller.delete);

export {advertRouter};
