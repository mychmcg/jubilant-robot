import * as React from "react";
import Search from "antd/lib/input/Search";

export class HomeView extends React.PureComponent {
  render() {
    return (
      <div className="greeting">
        <div className="greeting-text">
          Your world,
          <br />
          <span className="huge-text">delivered.</span>
          <br />
          <br />
        </div>
        <Search placeholder="search products and services" />
      </div>
    );
  }
}
