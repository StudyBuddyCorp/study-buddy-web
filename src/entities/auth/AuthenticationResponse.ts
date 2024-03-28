import { IUser } from "../user/IUser";

export interface AuthenticationResponse{
    user: IUser
    token: string
}