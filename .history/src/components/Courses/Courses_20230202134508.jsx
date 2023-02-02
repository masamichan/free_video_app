import React, { Component, Fragment } from "react";
import { Col, Row } from "react-bootstrap";

export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="text-center">MY COURSES</h1>
        <div className="bottom"></div>
        <Row>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}></Col>
              <Col lg={6} md={6} sm={12}></Col>
            </Row>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Row>
              <Col lg={6} md={6} sm={12}></Col>
              <Col lg={6} md={6} sm={12}></Col>
            </Row>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Courses;
