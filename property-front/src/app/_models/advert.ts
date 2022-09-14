import { IAdvert } from './IAdvert';


export class Advert implements IAdvert {

  constructor(
    public title: string,
    public province: string,
    public city: string,
    public price: number,
    public details: string,
    public bedrooms: number,
    public bathrooms: number,
    public carports: number,
    public size: number,
    public dateCreated: Date,
    public status?: string,
    public headlineImage?: string,
    public images?: string[],
    /** @Note: shouldnt need this once the userId gets assigned via the API */
    public userId?: number,
    public id?: number,
  ) {}
}
