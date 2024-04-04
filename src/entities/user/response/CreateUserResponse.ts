import { User } from "../IUser";

export interface CreateUserResponse extends Response {
    user: User
}