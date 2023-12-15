import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup
    .number()
    .positive("Password must be greater than zero")
    .required("Password is required")
    .typeError("Password must be a number"),
});

const YupRules = [
  {
    async validator({ field }: any, value: any) {
      //TODO: change any to RuleObject
      const fieldName = String(field);
      await formSchema.validateAt(fieldName, { [fieldName]: value });
    },
  },
];
export default YupRules;
