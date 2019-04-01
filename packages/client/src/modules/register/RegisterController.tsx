import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router-dom";

import { RegisterMutation, RegisterMutationVariables } from "../../schemaTypes";
import { normalizeErrors } from "../../utils/normalizErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";
import { RegisterView } from "../../modules/register/RegisterView";

interface Props {
  children: (
    data: {
      submit: (
        values: RegisterMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables> &
    RouteComponentProps<{}>
> {
  submit = async (values: RegisterMutationVariables) => {
    console.log(values);
    const {
      data: { register }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", register);
    if (register) {
      return normalizeErrors(register);
    }
    return null;
  };

  onFinish = () => {
    this.props.history.push("/t/confirm-email", {
      message: "Check your email!",
      messageDesc: "We sent you a link to activate your account."
    });
  };

  render() {
    return <RegisterView onFinish={this.onFinish} submit={this.submit} />;
  }
}

const registerMutation = gql`
  mutation RegisterMutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const RegisterController = graphql<
  Props,
  RegisterMutation,
  RegisterMutationVariables
>(registerMutation)(C);
