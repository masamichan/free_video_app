import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import designIcon from "../../asset/image/design.png";
import ecommerceIcon from "../../asset/image/ecommerce.png";
import webIcon from "../../asset/image/web.png";

export class Services extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="serviceCard">
                <img className="ecommerceIcon" src={ecommerceIcon} />
                <h2>Ecommerce</h2>
                <p>I will design and develop ecommerce online store website.</p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img className="designIcon" src={designIcon} />
                <h2>Web Design</h2>
                <p>
                  Qualified web design and attractive effects which catch
                  visitor's Eye.
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img className="webIcon" src={webIcon} />
                <h2>Web Development</h2>
                <p>
                  Clean and fresh code to make your website dynamic perfectly.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
