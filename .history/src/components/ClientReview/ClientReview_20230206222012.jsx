import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

export class ClientReview extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TEST MOIAL</h1>
          <div className="reviewBottom"></div>
          <Row className="text-center justify-content-center">
            <Col lg={6} md={6} sm={12}>
              <img
                className="circleImg"
                src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&uid=R91501435&ga=GA1.2.1662293289.1675141153&semt=sph"
              />
              <h2 className="reviewName">
                Hi! I'm Masami Iwakiri. I'm a web developer with a serious love
                for teaching.
              </h2>
              <p className="reviewDescription">
                I will design and develop ecommerce online store website.
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
