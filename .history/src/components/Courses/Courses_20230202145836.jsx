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
                    src="https://img.freepik.com/free-photo/close-up-hand-taking-notes_23-2148888827.jpg?w=2000&t=st=1675317493~exp=1675318093~hmac=d6cbf9bfbfdc813b6226f9a8c2d3a8376af103520df0c55e2d75b3cae7acef22"
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
                    src="https://img.freepik.com/free-photo/smiling-asian-girl-waching-webinar-having-work-video-call-from-home-working-freelance-remotely-looki_1258-84303.jpg?w=1800&t=st=1675317384~exp=1675317984~hmac=65fb0cdb555b0cc8ee5d9a760c440fe5f46f7ceb852b0641b8261f98a566b826"
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
                    src="https://img.freepik.com/free-photo/freelance-young-businesswoman-casual-wear-using-laptop-working-in-living-room-at-home_7861-3051.jpg?w=1800&t=st=1675316563~exp=1675317163~hmac=ecdff66c9752ce81fcfae01c6fd682faef2cdb8b0b5e9f127eccdb604d03245b"
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
                    src="https://img.freepik.com/free-photo/freelance-business-women-casual-wear-using-laptop-working-call-video-conference-with-customer-in-workplace-in-living-room-at-home-happy-young-asian-girl-relax-sitting-on-desk-do-job-in-internet_7861-2448.jpg?w=2000&t=st=1675316535~exp=1675317135~hmac=3b88697b844f180cc5455b7e470c5a6a33f2ec0006144219cf3b712bd313b6ea"
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
