import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Aboutcontent = () => {
  return (
    <>
      <div className="Aboutcontent py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <p
                className="fs-4 m-0 pb-3 fw-bold"
                style={{ textAlign: "left" }}
              >
                Redbox is changing the property transaction process into an
                easy-tech ecosystem that ensures an amazing investment
                experience for the customers.
              </p>
            </Col>
            <Col lg={6}>
              <p className="m-0 pb-2">
                In 2016, Redbox took lead in offering clients authentic,
                legalized, and certified property advisory and investment
                alternatives as top real estate agents Karachi. We progressed
                with time and soon launched Redbox TV in February of 2018.
                Following the launch of our YouTube channel, we made it to the
                international platform in January of 2019.
              </p>
              <Row className="pt-3">
                <Col lg={6}>
                  <div className="aboutitem">
                    <h4 className="fs-1 m-0 redclr">3284</h4>
                    <hr className="m-0 my-2 pb-2" />
                    <h6 className="m-0 pb-3">Units Sold</h6>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className="aboutitem">
                    <h4 className="fs-1 m-0 redclr">228</h4>
                    <hr className="m-0 my-2 pb-2" />
                    <h6 className="m-0 pb-3">Projects Explored</h6>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutcontent;
