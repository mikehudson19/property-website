export interface IAdvert {
  id?: number,
  title: string,
  province: string,
  city: string,
  price: number,
  details: string,
  status?: string,
  userId?: number,
  bedrooms: number,
  bathrooms: number,
  carports: number,
  images?: string[],
  headlineImage?: string;
  dateCreated: Date;
  size: number;
}
