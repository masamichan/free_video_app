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
              <div>
                <img src={ecommerceIcon} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img src={designIcon} />
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div>
                <img src={webIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Services;
