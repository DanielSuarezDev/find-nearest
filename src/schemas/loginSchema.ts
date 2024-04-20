import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  email: yup.string().required("El correo es requerido"),
  password: yup
    .string()
    .oneOf([yup.ref("password")], "La contraseña es incorrecta")
    .required("La contraseña es requerida"),
});
