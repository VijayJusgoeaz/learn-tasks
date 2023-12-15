import * as yup from "yup";

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("Email is required"),
  first_name: yup.string().required("First name is required"),
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
