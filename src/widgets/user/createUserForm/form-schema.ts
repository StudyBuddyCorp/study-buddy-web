import * as z from 'zod';

export const createUserSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  department: z.string().min(1, {
    message: 'Department is required',
  }),
  specialty: z.string().min(1, {
    message: 'Specialty is required',
  }),
  group: z.string().min(1, {
    message: 'Group is required',
  }),
});
