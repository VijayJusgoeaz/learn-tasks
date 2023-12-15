import * as yup from "yup";

const PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, "Should be minumun of 8 characters")
    .required("Password is required")
    .matches(
      /^(?=.*[@#$%^&+=])(?=.*[0-9]).*$/,
      "Need atleast one special character and number"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], 'Must match "password" field value'),
});

export default PasswordSchema;
