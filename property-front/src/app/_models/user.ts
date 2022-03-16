import { IUser } from './IUser';

export class User implements IUser {

    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public contactNumber?: string,
        public password?: string,
        public token?: string,
        public id?: number,
        public favourites?: number[]
    ){}
}