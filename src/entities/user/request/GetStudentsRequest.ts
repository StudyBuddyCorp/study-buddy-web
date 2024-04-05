import { Role } from "../IUser";

export interface GetStudentsRequest {

    role?: Role
    name?: string;
    department?: string;
    specialty?: string;
    groupId?: string;
}
