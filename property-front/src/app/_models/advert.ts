import { IAdvert } from './IAdvert';


export class Advert implements IAdvert {

  constructor(
    public title: string,
    public province: string,
    public city: string,
    public price: number,
    public details: string,
    public status?: string,
    /** @Note: shouldnt need this once the userId gets assigned via the API */
    public userId?: string,
    public id?: number
  ) {}
}
