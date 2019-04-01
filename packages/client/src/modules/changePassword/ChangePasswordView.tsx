import * as React from "react";
import { Link } from "react-router-dom";
import { Form as AntForm, Icon, Button } from "antd";
import { withFormik, FormikProps, Field, Form } from "formik";

import { InputField } from "../shared/InputField";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";
import { changePasswordSchema } from "@vaster/common";
import { ForgotPasswordChangeMutationVariables } from "../../../src/schemaTypes";

const FormItem = AntForm.Item;

interface FormValues {
  newPassword: string;
}

interface Props {
  onFinish: () => void;
  passwordResetKey: string;
  submit: (
    values: ForgotPasswordChangeMutationVariables
  ) => Promise<NormalizedErrorMap | null>;
}

export class C extends React.PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <Form className="user-form" style={{ display: "flex" }}>
        <div style={{ width: 400, margin: "auto" }}>
          <Field
            name="newPassword"
            type="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="New Password"
            component={InputField}
          />
          <FormItem className="right">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
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

export const ChangePasswordView = withFormik<Props, FormValues>({
  validationSchema: changePasswordSchema,
  mapPropsToValues: () => ({ newPassword: "" }),
  handleSubmit: async ({ newPassword }, { props, setErrors }) => {
    const errors = await props.submit({
      newPassword,
      key: props.passwordResetKey
    });
    errors ? setErrors(errors) : props.onFinish();
  }
})(C);
