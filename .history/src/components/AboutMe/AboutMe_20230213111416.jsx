import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import face from "../../asset/image/face-removebg-preview.png";

export class AboutMe extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">ABOUT ME</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeImage">
                <img className="aboutImg" src={face} />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="aboutMeBody">
                <h2 className=" aboutMeDetails">HI There I'm</h2>
                <h2 className="aboutMeTitle">Masamichan</h2>
                <h3>
                  Work as <span>Developer</span>
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default AboutMe;
