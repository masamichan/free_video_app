import React, { Component, Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class ClientReview extends Component {
  render() {
    var settings = {
      autoPlaySpeed: 3000,
      autoPlay: true,
      dots: true,
      infinite: true,
      vertical: true,
      verticalSwiping: 1,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container fluid={true} className="siderBack text-center">
          <h1 className="reviewMainTitle p-3">TEST MOIAL</h1>
          <div className="reviewBottom"></div>
          <Slider {...settings}>
            <div>
              <Row className="text-center justify-content-center">
                <Col lg={6} md={6} sm={12}>
                  <img
                    className="circleImg"
                    src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&uid=R91501435&ga=GA1.2.1662293289.1675141153&semt=sph"
                  />
                  <h2 className="reviewName">masamichan</h2>
                  <p className="reviewDescription">
                    Hi! I'm Masami Iwakiri. I'm a web developer with a serious
                    love for teaching.
                  </p>
                </Col>
              </Row>
            </div>
          </Slider>
        </Container>
      </Fragment>
    );
  }
}

export default ClientReview;
