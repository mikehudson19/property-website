import { AdvertGalleryController } from "../controllers/advert-gallery-controller";
import express from "express";

const controller = new AdvertGalleryController();
const advertGalleryRouter = express.Router();

advertGalleryRouter.get("/", controller.getAdvertGallery);
advertGalleryRouter.get('/headlineImages', controller.getHeadlineImages);
advertGalleryRouter.post("/", controller.create);

export {advertGalleryRouter};
