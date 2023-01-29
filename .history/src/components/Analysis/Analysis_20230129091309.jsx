import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class Analysis extends Component {
  constructor() {}

  render() {
    return (
      <Fragment>
        <Container className="text-center">
          <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
          <div className="bottom"></div>
          <Row>
            <Col lg={6} md={12} sm={12}>
              <h1>BarCart</h1>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <p className="text-justify serviceDescription">
                Hi! I'm Masami Iwakiri. I'm a web developer with a serious love
                for teaching I am a founder of masamichan Learning and a Web
                Developer, Programmer & Instructor.<br></br>
                <br></br>I am working online for the last 7 years and have
                created several successful websites running on the internet. I
                try to create a project-based course that helps you to learn
                professionally and make you fell as a complete developer. easy
                learning exists to help you succeed in life.<br></br>
                <br></br>
                Each course has been hand-tailored to teach a specific skill. I
                hope you agree! Whether you're trying to learn a new skill from
                scratch or want to refresh your memory on something you've
                learned in the past, you've come to the right place.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Analysis;
