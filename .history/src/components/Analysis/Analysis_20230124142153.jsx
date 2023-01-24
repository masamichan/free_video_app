import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Analysis extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h1>BarCart</h1>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <h1>Text</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
