import { IUser } from "../user/IUser";

export interface Course {
    id: string,
    title: string,
    description: string,
    imageUrl: string,

    students: IUser[],
    teachers: IUser[],
}