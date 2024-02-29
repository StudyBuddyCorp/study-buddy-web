import * as z from "zod";

export const formSchema = z
  .object({
    state: z.literal("LOGIN").or(z.literal("REGISTER")),
    email: z.string().email(),
    password: z.string().min(6),
    passwordConfirmation: z.string().optional(),
    name: z.string().optional(),
  })
  .superRefine(({ password, passwordConfirmation, state, name }, ctx) => {
    if (state === "REGISTER") {
      passwordConfirmation === undefined &&
        ctx.addIssue({
          code: "custom",
          message: "Нужно подтвердить пароль",
        });
      name === undefined &&
        ctx.addIssue({
          code: "custom",
          message: "Нужно ввести имя",
        });
    }
    if (password !== passwordConfirmation) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
      });
    }
  });
