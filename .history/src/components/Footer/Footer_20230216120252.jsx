import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Container fluid={true} className="footerSection">
          <Row>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Follow Us</h2>
              <a href="#"></a>
              <FontAwesomeIcon icon={} />
              <a href="#"></a>
              <a href="#"></a>
            </Col>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Address</h2>
            </Col>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Information</h2>
            </Col>
            <Col lg="3" md={6} sm={12}>
              <h2 className="footerName text-center">Policy</h2>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Footer;
