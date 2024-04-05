import * as z from "zod";

export const formSchema = z.object({
  title: z.string().min(4),
  description: z.string().min(4),
});
