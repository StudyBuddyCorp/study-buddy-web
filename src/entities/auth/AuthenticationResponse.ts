import { User } from "../user/IUser";

export interface AuthenticationResponse{
    user: User
    token: string
}