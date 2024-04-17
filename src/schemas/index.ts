import * as z from "zod";

//course schemas
export const courseUpdateSchema = z.object({
    id: z.string().min(1, {
        message: "Id is required",
    }),
    title: z.string().min(4, {
        message: "Minimum 4 characters",
    }),
    description: z.string().min(4, {
        message: "Minimum 4 characters",
    }),
    body: z.string().optional()
});

export const courseCreateSchema = z.object({
    title: z.string().min(4, {
        message: "Minimum 4 characters",
    }),
    description: z.string().min(4, {
        message: "Minimum 4 characters",
    }),
});

// user schemas
export const studentSubscribeSchema = z.object({
    courseId: z.string().min(1, {
        message: "Course is required",
    }),
    studentId: z.string().min(1, {
        message: "Student is required",
    }),
});

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email required",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
});

export const userCreateSchema = z.object({
    email: z.string().email({
        message: "Email is required",
    }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
    department: z.string().min(1, {
        message: "Department is required",
    }),
    specialty: z.string().min(1, {
        message: "Specialty is required",
    }),
    group: z.string().min(1, {
        message: "Group is required",
    }),
});
