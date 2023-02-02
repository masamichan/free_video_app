import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY COURSES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>
                <img
                  className="courseImg"
                  src="https://img.freepik.com/premium-photo/congratulatory-conferment-and-award-of-the-diploma-with-the-graduates-of-the-university_43157-2039.jpg?w=1800"
                />
                <Col lg={6} md={6} sm={12}></Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>
                <h5>Laravel 8 </h5>
                <Col lg={6} md={6} sm={12}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Courses;
