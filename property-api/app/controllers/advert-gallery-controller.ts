import { db } from "../../models";

export class AdvertGalleryController {
    async getAdvertGallery(req: any, res: any) {
        const advertId = req.query.advertId;

        const result = await db.AdvertGallery.findAll({
            where: {
                advertId
            },
            attributes: [
                 'headlineImage',
                 'imageOne',
                 'imageTwo',
                 'imageThree',
                 'imageFour',
                 'imageFive'
            ]
        })

        res.send(result);
    }

    async getHeadlineImages(req:any, res: any) {
        const result = await db.AdvertGallery.findAll({
            attributes: ['advertId', 'headlineImage']
        });

        res.send(result);
    }

    async create(req: any, res: any) {
        const result = await db.AdvertGallery.create(req.body);
        res.send(result);
    }
}
