import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/image/design.png"

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img src={} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Two</h1>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <h1>Three</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
