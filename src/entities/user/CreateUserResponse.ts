import { IUser } from "./IUser";

export interface CreateUserResponse extends Response {
    user: IUser
}