export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  password?: string,
  token?: string
  contactNumber?: string
  favourites?: number[]
}