import * as z from "zod";

export const formSchema = z
  .object({
    email: z.string().email(),
    name: z.string(),
    department: z.string(),
    specialty: z.string(),
    group: z.string()
  })
