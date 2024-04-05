import * as z from "zod";

export const formSchema = z.object({
    courseId: z.string().uuid(),
    studentId: z.string().uuid(),
});
