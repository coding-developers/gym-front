import * as yup from "yup";

export const loginRequestSchema = yup.object({
  email: yup.string().required("Insira seu email").email("Email inválido"),
  password: yup.string().required("Insira sua senha"),
});

export type LoginType = yup.InferType<typeof loginRequestSchema>;
