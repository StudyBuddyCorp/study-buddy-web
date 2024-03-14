import * as z from "zod";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string()
    .min(8, {message: 'Длина пароля должен быть минимум 8 символов'})
    .regex(/^.*(?=.*[a-zA-Z]).*$/, { message: 'Пароль должен содержать заглавные и строчные буквы' })
    .regex(/^.*(?=.*\d).*$/, { message: 'Пароль должен содержать цифры' })
    .regex(/^.*(?=.*[!#$%&?., "]).*$/, { message: 'Пароль должен содержать специальные символы' }),
  passwordConfirmation: z.string(),
  name: z.string(),
}).superRefine(({ passwordConfirmation, password }, ctx) => {
  if (passwordConfirmation !== password) {
    ctx.addIssue({
      code: "custom",
      path: ['passwordConfirmation'],
      message: 'Пароли не совпадают'
    });
  }
})
