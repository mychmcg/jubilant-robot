import * as React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import { siteNavLinks } from "../shared/SiteNavLinks";

export class SiteNav extends React.Component<{
  text: boolean;
  icons: boolean;
  mode:
    | "inline"
    | "horizontal"
    | "vertical"
    | "vertical-left"
    | "vertical-right"
    | undefined;
  style: any;
}> {
  state = {
    activePage: "home"
  };

  handleClick = (e: any) => {
    console.log("click ", e);
    this.setState({
      activePage: e.key
    });
  };

  render() {
    const menuItems = siteNavLinks.map(siteNavLink => {
      let itemView = siteNavLink.iconProps ? (
        <>
          <Icon type={siteNavLink.iconProps.type} />
          {siteNavLink.text}
        </>
      ) : (
        <>{siteNavLink.text}</>
      );

      if (siteNavLink.linkProps) {
        itemView = <Link to={siteNavLink.linkProps.to}>{itemView}</Link>;
      }

      const menuItem = (
        <Menu.Item {...siteNavLink.menuItemProps}>{itemView}</Menu.Item>
      );

      return menuItem;
    });

    return (
      <Menu
        onClick={this.handleClick}
        theme="dark"
        mode={this.props.mode}
        style={this.props.style}
      >
        {menuItems}
      </Menu>
    );
  }
}
