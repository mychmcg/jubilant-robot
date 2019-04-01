import * as React from "react";
import { Icon, Menu } from "antd";
import { Link } from "react-router-dom";

const mobileNavIcon = (type: string) => (
  <Icon
    type={type}
    style={{
      fontSize: "2em",
      lineHeight: "64px",
      paddingLeft: "14px"
    }}
  />
);

export class MobileNavView extends React.PureComponent {
  render() {
    return (
      <Menu mode="horizontal" theme="dark" style={{ paddingTop: "10px" }}>
        <Menu.Item
          key="home"
          disabled={false}
          style={{ width: "33%", textAlign: "center" }}
        >
          <Link to="/">{mobileNavIcon("home")}</Link>
        </Menu.Item>
        <Menu.Item key="store" style={{ width: "33%", textAlign: "center" }}>
          <Link to="/store">{mobileNavIcon("appstore")}</Link>
        </Menu.Item>
        <Menu.Item key="login" style={{ width: "33%", textAlign: "center" }}>
          <Link to="/login">{mobileNavIcon("user")}</Link>
        </Menu.Item>
      </Menu>
    );
  }
}
