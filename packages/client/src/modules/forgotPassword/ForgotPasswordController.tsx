import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router-dom";

import {
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables
} from "../../schemaTypes";
import { ForgotPasswordView } from "./ForgotPasswordView";

interface Props {
  children: (
    data: {
      submit: (
        values: SendForgotPasswordEmailMutationVariables
      ) => Promise<null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<
    Props,
    SendForgotPasswordEmailMutation,
    SendForgotPasswordEmailMutationVariables
  > &
    RouteComponentProps<{}>
> {
  submit = async (values: SendForgotPasswordEmailMutationVariables) => {
    console.log(values);
    const response = await this.props.mutate({
      variables: values
    });
    console.log("response: ", response);

    return null;
  };

  onFinish = () => {
    this.props.history.push("/t/reset-password", {
      message: "Check your email!",
      messageDesc: "We sent you a link to reset your password."
    });
  };

  render() {
    return <ForgotPasswordView onFinish={this.onFinish} submit={this.submit} />;
  }
}

const ForgotPasswordMutation = gql`
  mutation SendForgotPasswordEmailMutation($email: String!) {
    sendForgotPasswordEmail(email: $email)
  }
`;

export const ForgotPasswordController = graphql<
  Props,
  SendForgotPasswordEmailMutation,
  SendForgotPasswordEmailMutationVariables
>(ForgotPasswordMutation)(C);
