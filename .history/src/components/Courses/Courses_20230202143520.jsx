import React, { Component, Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
export class Courses extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">MY COURSES</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/close-up-hand-writing-on-notebook-top-view_23-2148888824.jpg?w=1800&t=st=1675314859~exp=1675315459~hmac=4c4f97a903dea5a80e03bfa4b7066a295b620b88d2e933eb3a07ef96ae6c6b3d"
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/education-concept-student-studying-and-brainstorming-campus-concept-close-up-of-students-discussing-their-subject-on-books-or-textbooks-selective-focus_1418-627.jpg?w=1800&t=st=1675314827~exp=1675315427~hmac=89564f1377c5a2ce222a3158a58eb5a988e37231806aef6ec09931b7aec8cdc3"
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={12} sm={12}>
              <Row>
                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-vector/university-student-cap-mortar-board-and-diploma_3446-334.jpg?w=1380&t=st=1675314790~exp=1675315390~hmac=8f0402c1fb32d6882a254f0306cad480bd35b075406c5dfac887263ebb752484"
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>

                <Col lg={6} md={6} sm={12} className="p-2">
                  <img
                    className="courseImg"
                    src="https://img.freepik.com/free-photo/freelance-business-women-casual-wear-using-laptop-working-call-video-conference-with-customer-in-workplace-in-living-room-at-home-happy-young-asian-girl-relax-sitting-on-desk-do-job-in-internet_7861-2448.jpg?w=2000&t=st=1675314160~exp=1675314760~hmac=de7e363712c12af9598ee62e62576a3ce41f480285c2951d883b291099d9924d"
                  />
                </Col>

                <Col lg={6} md={6} sm={12}>
                  <h5 className="text-justify serviceName">Laravel 8 </h5>
                  <p className="text-justify serviceDescription">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a className="courseViewMore float-left" href="#">
                    View Details
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default Courses;
