import { Course } from "../course"

export enum Role {
    TEACHER = "TEACHER",
    STUDENT = "STUDENT",
    ADMIN = "ADMIN",
}

export interface IUser {
    id: string,
    email?: string,
    password: string,
    phone?: string,
    role: Role

    name: string,
    imageUrl: string,

    department: string,
    speciality: string,
    group: string

    studiedCourses: Course[],
    taughtCourses: Course[],
}