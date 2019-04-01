import * as React from "react";
import { Link } from "react-router-dom";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../shared/InputField";
// import { NormalizedErrorMap } from "../../controller/types/NormalizedErrorMap";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<any>;
}

export class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form className="user-form" style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            component={InputField}
          />
          <FormItem className="right">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Reset Password
            </Button>
          </FormItem>
          <FormItem>
            Or <Link to="/register">Register</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const ForgotPasswordView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({ email: "" }),
  handleSubmit: async (values, { setErrors, props }) => {
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    }
  }
})(C);
