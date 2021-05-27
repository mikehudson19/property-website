import { CityController } from "../controllers/city-controller";
import express from "express";

const controller = new CityController();
const cityRouter = express.Router();

cityRouter.get('/', controller.list);

export {cityRouter};
