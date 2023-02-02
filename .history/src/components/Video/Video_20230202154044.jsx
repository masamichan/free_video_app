import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Video extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <h1 className="serviceMainTitle">MY SERVICES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <h1>text</h1>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <h1>text</h1>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Video;
