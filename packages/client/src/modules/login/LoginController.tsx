import * as React from "react";
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { RouteComponentProps } from "react-router-dom";

import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";
import { LoginView } from "../../modules/login/LoginView";
import { normalizeErrors } from "../../utils/normalizErrors";
import { NormalizedErrorMap } from "../../types/NormalizedErrorMap";

interface Props {
  children: (
    data: {
      submit: (
        values: LoginMutationVariables
      ) => Promise<NormalizedErrorMap | null>;
    }
  ) => JSX.Element | null;
}

class C extends React.PureComponent<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables> &
    RouteComponentProps<{}>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log(values);
    const {
      data: {
        login: { errors, sessionId }
      }
    } = await this.props.mutate({
      variables: values
    });

    console.log("response: ", errors, sessionId);

    if (errors) {
      return normalizeErrors(errors);
    }

    return null;
  };

  onFinish = () => {
    this.props.history.push("/");
  };

  render() {
    return <LoginView onFinish={this.onFinish} submit={this.submit} />;
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      errors {
        path
        message
      }
      sessionId
    }
  }
`;

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(C);
