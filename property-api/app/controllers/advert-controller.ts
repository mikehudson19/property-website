import { db } from "../../models";

export class AdvertController {
  async getAdverts(req: any, res: any) {
    const result = await db.Advert.findAndCountAll({
      include: [
        {
          model: db.User
        }
      ]
    });

    res.send(result);
  }

  async getAdvert(req: any, res: any) {
    const result = await db.Advert.findByPk(req.params.id)

    res.send(result);
  }

  async create(req: any, res: any) {
    const result = await db.Advert.create(req.body);
    res.send(result);
  }

  async update(req: any, res: any) {
    console.log(req.body);
    const result = await db.Advert.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(result);
  }
}