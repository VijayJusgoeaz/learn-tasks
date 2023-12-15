import { Alert, Button, Form, Input } from "antd";
import YupRules from "../Validations/form.validation";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useWatch } from "antd/es/form/Form";
import PasswordSchema from "../Validations/password.validation";

type FieldType = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  confirm_password: string;
};

const SignupPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const ConfirmPasswordWatch = useWatch("confirm_password", form);
  const passwordWatch = useWatch("password", form);

  const fillValues = () => {
    form.setFieldsValue({
      email: "example@example.com",
      first_name: "Vijay",
      last_name: "Ravi",
      password: "Password@123",
      confirm_password: "Password@123",
    });
  };

  return (
    <div className="bg-sky-500 h-screen  w-screen flex justify-center items-center flex-col">
      <div className="bg-white w-1/2 shadow-lg h-1/1.5 rounded-xl flex justify-center items-center flex-col">
        <div className="text-2xl my-4">SignUp Form</div>
        <Form
          id="signup"
          form={form}
          name="signup_form"
          initialValues={{}}
          onFinish={(val) => {
            console.log("YUP Success:", yup.ref("password"));
            // navigate(`/dashboard/${val.first_name} `, { replace: true });
          }}
          onFinishFailed={(_) => {
            console.log("Submission Failed");
          }}
        >
          <Form.Item<FieldType> name="email" label="email ID" rules={YupRules}>
            <Input type="email" />
          </Form.Item>
          <Form.Item<FieldType>
            name="first_name"
            label="First Name"
            rules={YupRules}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldType> name="last_name" label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={PasswordSchema}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item<FieldType>
            name="confirm_password"
            label="Confirm Password"
            rules={PasswordSchema}
          >
            <Input.Password />
          </Form.Item>

          {/* updated with useWatch */}
          {/* {ConfirmPasswordWatch?.length>8 && passwordWatch!==ConfirmPasswordWatch &&
           <Alert message="Passwords need to be same" type="error" className="mb-2"/>
          } */}

          {/* <Form.Item
            shouldUpdate={(_, currentValues) =>
              currentValues.confirm_password?.length > 8
            }
          >
            {({ getFieldValue }) =>
              getFieldValue("password") !==
              getFieldValue("confirm_password") ? (
                <Alert message="Passwords need to be same" type="error" />
              ) : (
                <></>
              )
            }
          </Form.Item> */}

          <Button
            type="primary"
            htmlType="submit"
            className="bg-sky-500 hover:!bg-sky-500 w-full mb-3"
          >
            SignUp
          </Button>
          <Button
            type="primary"
            onClick={fillValues}
            className="bg-sky-700 hover:!bg-sky-700 w-full mb-3"
          >
            Auto Fill
          </Button>
        </Form>
      </div>
      <Button
        // form="signup" // id of remote form
        onClick={form.submit} // using form.submit to perform submit operation on remote form
        htmlType="submit"
        className="bg-slate-500 hover:!bg-slate-500 my-5 w-2/4 !text-white hover:!border-white"
      >
        Remote Submit
      </Button>
    </div>
  );
};

export default SignupPage;
