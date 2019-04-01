import * as React from "react";
import { Route, Switch } from "react-router-dom";

import { ForgotPasswordController } from "../modules/forgotPassword/ForgotPasswordController";
import { HomeController } from "../modules/home/HomeController";
import { LoginController } from "../modules/login/LoginController";
import { RegisterController } from "../modules/register/RegisterController";
import { StoreController } from "../modules/store/StoreController";
import { ChangePasswordController } from "../modules/changePassword/ChangePasswordController";
import { AlertPage } from "../modules/alertPage/AlertPage";

export const Routes = () => (
  <Switch>
    <Route path="/t" component={AlertPage} />
    <Route exact={true} path="/" component={HomeController} />
    <Route exact={true} path="/store" component={StoreController} />
    <Route exact={true} path="/login" component={LoginController} />
    <Route exact={true} path="/register" component={RegisterController} />
    <Route
      exact={true}
      path="/forgot-password"
      component={ForgotPasswordController}
    />
    <Route
      exact={true}
      path="/change-password/:key"
      component={ChangePasswordController}
    />
  </Switch>
);
