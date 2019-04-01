import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router-dom";

import {
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
} from "../../schemaTypes";
import { ChangePasswordView } from "./ChangePasswordView";
import { normalizeErrors } from "../../utils/normalizErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (
    data: {
      submit: (
        values: ForgotPasswordChangeMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    ForgotPasswordChangeMutation,
    ForgotPasswordChangeMutationVariables
  > &
    RouteComponentProps<{ key: string }>
> {
  submit = async (values: ForgotPasswordChangeMutationVariables) => {
    console.log(values);
    const {
      data: { forgotPasswordChange }
    } = await this.props.mutate({
      variables: values
    });
    console.log(forgotPasswordChange);
    if (forgotPasswordChange) {
      return normalizeErrors(forgotPasswordChange);
    }

    return null;
  };

  onFinish = () => {
    this.props.history.push("/login");
  };

  render() {
    const {
      match: {
        params: { key }
      }
    } = this.props;
    console.log(key);
    return (
      <ChangePasswordView
        onFinish={this.onFinish}
        passwordResetKey={key}
        submit={this.submit}
      />
    );
  }
}

const forgotPasswordChangeMutation = gql`
  mutation ForgotPasswordChangeMutation($newPassword: String!, $key: String!) {
    forgotPasswordChange(newPassword: $newPassword, key: $key) {
      path
      message
    }
  }
`;

export const ChangePasswordController = graphql<
  Props,
  ForgotPasswordChangeMutation,
  ForgotPasswordChangeMutationVariables
>(forgotPasswordChangeMutation)(C);
