import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import resortLogo from "../public/images/clientLogo1.png";
import resortLogo2 from "../public/images/clientLogo2.png";
import resortLogo3 from "../public/images/clientLogo3.png";
import resortLogo4 from "../public/images/clientLogo4.png";
import resortLogo5 from "../public/images/clientLogo5.png";
import resortLogo6 from "../public/images/clientLogo6.png";

const Brands = () => {
  return (
    <>
      <div className="Brands py-md-5 py-4">
        <Container>
          <Row>
            <Col lg={10} xs={12} className="offset-md-1">
              <h3 className="fs35 text-center fw-semibold pb-4">OUR BRANDS</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="offset-md-2">
              <Row>
                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo3}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
                  </div>
                </Col>
                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo4}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
                  </div>
                </Col>
                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
                  </div>
                </Col>
                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo2}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
                  </div>
                </Col>

                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo5}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
                  </div>
                </Col>
                <Col lg={4} xs={6}>
                  <div className="boxbrand">
                    <Image
                      src={resortLogo6}
                      alt="resortLogo"
                      style={{ height: "auto" }}
                    />
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

export default Brands;
