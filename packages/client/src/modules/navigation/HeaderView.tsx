import * as React from "react";
import { Layout, Row, Col } from "antd";
import { SiteNav } from "../shared/SiteNav";
import { Link } from "react-router-dom";

const { Header } = Layout;

export class HeaderView extends React.Component {
  public render() {
    return (
      <Header className="App-header">
        <Row type="flex" justify="space-between">
          <Col span={4}>
            <div className="app-title">
              <Link to="/" style={{ textDecoration: "none" }}>
                Vaster
              </Link>
            </div>
          </Col>
          <Col xs={0} sm={20} md={20}>
            <SiteNav
              text={true}
              icons={true}
              mode="horizontal"
              style={{
                lineHeight: "63px",
                float: "right"
              }}
            />
          </Col>
          <Col xs={20} sm={0} md={0}>
            <div className="right">{/* TODO: Small desktop site nav */}</div>
          </Col>
        </Row>
      </Header>
    );
  }
}
