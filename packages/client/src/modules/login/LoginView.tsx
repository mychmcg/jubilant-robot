import * as React from "react";
import { Link } from "react-router-dom";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { loginSchema } from "@vaster/common";
import { InputField } from "../shared/InputField";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onFinish: () => void;
  submit: (values: FormValues) => Promise<NormalizedErrorMap | null>;
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
          <Field
            name="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            placeholder="Password"
            component={InputField}
          />
          <FormItem className="right">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log In
            </Button>
          </FormItem>
          <FormItem>
            <Link to="/forgot-password">Forgot password</Link>
          </FormItem>
          <FormItem style={{ color: "#eee" }}>
            Or <Link to="/register">Register</Link>
          </FormItem>
        </div>
      </Form>
    );
  }
}

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  validateOnBlur: false,
  validateOnChange: false,
  mapPropsToValues: () => ({ email: "", password: "" }),
  handleSubmit: async (values, { setErrors, props }) => {
    const errors = await props.submit(values);
    errors ? setErrors(errors) : props.onFinish();
  }
})(C);
