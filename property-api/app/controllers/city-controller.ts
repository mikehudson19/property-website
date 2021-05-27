import { db } from "../../models";

export class CityController {
  async list(req: any, res: any) {
    const result = await db.City.findAndCountAll();

    res.send(result);
  }
}