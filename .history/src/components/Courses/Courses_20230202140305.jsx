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
                <img src="https://img.freepik.com/premium-photo/congratulatory-conferment-and-award-of-the-diploma-with-the-graduates-of-the-university_43157-2039.jpg?w=1800" />
                <Col lg={6} md={6} sm={12}></Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12}></Col>
                <img src="https://img.freepik.com/free-photo/freelance-business-women-casual-wear-using-laptop-working-call-video-conference-with-customer-in-workplace-in-living-room-at-home-happy-young-asian-girl-relax-sitting-on-desk-do-job-in-internet_7861-2448.jpg?w=2000&t=st=1675314160~exp=1675314760~hmac=de7e363712c12af9598ee62e62576a3ce41f480285c2951d883b291099d9924d" />
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
