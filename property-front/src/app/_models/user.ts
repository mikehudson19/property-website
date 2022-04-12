import { IUser } from './IUser';
import { UserRole } from './user-role.enum';

export class User implements IUser {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public role: UserRole,
        public contactNumber?: string,
        public password?: string,
        public token?: string,
        public id?: number,
        public favourites?: number[],
        public dateCreated?: Date
    ){}
}