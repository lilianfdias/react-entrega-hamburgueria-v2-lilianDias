import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido."),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha precisa conter pelo menos 6 caracteres."),
  confirmPassword: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha precisa conter pelo menos 6 caracteres.")
    .oneOf([yup.ref("password"), "As senhas precisam ser iguais"]),
});
