import { IUser } from "../user/IUser";

export interface Course {
    id: string,
    title: string,
    description: string,
    imageUrl: string,

    createdAt: Date

    students: IUser[],
    teachers: IUser[],
}