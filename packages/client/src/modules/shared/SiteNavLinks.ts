import { LinkProps } from "react-router-dom";
import { IconProps } from "antd/lib/icon";

interface SiteNavLink {
  menuItemProps: any;
  iconProps?: IconProps;
  linkProps?: LinkProps;
  text?: string;
}

export const siteNavLinks: SiteNavLink[] = [
  {
    menuItemProps: {
      key: "mail",
      disabled: true
    },
    iconProps: {
      type: "mail"
    },
    text: "Partner with us"
  },
  {
    menuItemProps: {
      key: "store"
    },
    iconProps: {
      type: "appstore"
    },
    linkProps: {
      to: "/store"
    },
    text: "Store"
  },
  {
    menuItemProps: {
      key: "login"
    },
    iconProps: {
      type: "user"
    },
    linkProps: {
      to: "/login"
    },
    text: "Log in"
  }
];
