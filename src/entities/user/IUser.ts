import { Course } from "../course"
import { Department } from "../department/Department"
import { Group } from "../group/Group"
import { Specialty } from "../specialty/Specialty"

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

    department: Department,
    speciality: Specialty,
    group: Group,

    studiedCourses: Course[],
    taughtCourses: Course[],
}
