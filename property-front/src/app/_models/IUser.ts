import { UserRole } from "./user-role.enum"

export interface IUser {
  id?: number,
  firstName: string,
  lastName: string,
  email: string,
  role: UserRole,
  password?: string,
  token?: string
  contactNumber?: string
  favourites?: number[]
}