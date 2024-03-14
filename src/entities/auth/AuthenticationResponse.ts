import { Response } from "../api/Response";
import { IUser } from "../user/IUser";

export interface AuthenticationResponse extends Response{
    user: IUser
    token: string
}