import { Role } from "../user/IUser";

export interface RegistrationRequest {
    email: string,
    password: string,
    name: string,
}
export interface CreateUserRequest {
    email: string,
    password: string,
    name: string,
    role: Role,

    department: string,
    speciality: string,
    group: string,
}