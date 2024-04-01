import { Response } from "../../shared/lib/response";

export interface UserDto {
    departmentTitle: string;
    email: string;
    groupId: string;
    groupNumber: number;
    id: string;
    name: string;
    specialtyTitle: string;
}

export interface UserDtoes {
    userDtoes?: UserDto[];
}

export interface GetStudentsResponse extends Response<UserDtoes> {}
