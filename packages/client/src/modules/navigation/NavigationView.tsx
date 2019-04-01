import * as React from "react";
import { Row, Col } from "antd";
import { HeaderView } from "./HeaderView";
import { MobileNavView } from "./MobileNavView";

export class NavigationView extends React.PureComponent {
  render() {
    return (
      <>
        <Row style={{ zIndex: 999 }}>
          <Col
            xs={0}
            sm={24}
            md={24}
            style={{
              top: 0,
              overflow: "hidden",
              position: "fixed",
              width: "100%",
              lineHeight: "64px"
            }}
          >
            <HeaderView />
          </Col>
          <Col
            xs={24}
            sm={0}
            md={0}
            style={{
              bottom: 0,
              overflow: "hidden",
              position: "fixed",
              width: "100%",
              lineHeight: "64px"
            }}
          >
            <MobileNavView />
          </Col>
        </Row>
      </>
    );
  }
}
