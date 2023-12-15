import { Input, Checkbox, Button, Form } from "antd";
import { useState } from "react";
import YupRules from "./Comp/Validations/form.validation";


//! form.resetFields()                      -> reset all fields
//! form.setFieldsValue({username:'vijay'}) -> set field value
//! getFieldValue('username')               -> get the mentioned field's current value

type FieldTypes = {
  // todo: datatypes mentioned here has no effect. why?
  username: string;
  password: string;
  remember: boolean;
};

const App = () => {
  const [form] = Form.useForm();
  const [toggle, setToggle] = useState(false);
  const watchs = Form.useWatch([], form);

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2 bg-white rounded-xl flex justify-center items-center">
        <Form
          layout="horizontal"
          disabled={false}
          form={form}
          name="myForm"
          initialValues={{}}
          onFinish={(e) => {
            console.log(e);
            setToggle(!toggle);
            console.log(toggle);
          }}
        >
          <div>
            <p>{JSON.stringify(watchs)}</p>
          </div>
          <Form.Item<FieldTypes>
            label="username"
            name="username"
            // rules={[{ required: true, message: "This is required" }]}
            rules={YupRules}
          >
            <Input />
          </Form.Item>
          <Form.Item<FieldTypes>
            label="password"
            name="password"
            rules={YupRules}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldTypes>
            name="remember"
            // todo: valuePropName
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-sky-500 hover:!bg-sky-500"
            >
              Submit
            </Button>
          </Form.Item>

          <Form.Item shouldUpdate={true}>
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default App;
