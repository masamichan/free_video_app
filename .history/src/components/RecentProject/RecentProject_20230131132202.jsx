import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class RecentProject extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <h1>Test One</h1>
            </Col>
            <Col g={4} md={6} sm={12}>
              <h1>Test One</h1>
            </Col>
            <Col g={4} md={6} sm={12}>
              <h1>Test One</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default RecentProject;
