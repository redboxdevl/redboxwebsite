import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../public/images/aboutmessageimg.jpg";
import quoteImg from "../public/images/quoteImg.png";
import Link from "next/link";

const Foundermessage = () => {
  return (
    <>
      <div className="Foundermessage py-4 pb-0">
        <Container>
          <Row>
            <Col lg={6}>
              <Image
                src={aboutmessageimg}
                alt="aboutmessageimg"
                className="img-fluid aboutmessageimg"
              />
            </Col>
            <Col lg={6} className="ps-md-5">
              <h3 className="fs-1 fw-bold text-white">Founder's Message</h3>
              {/* <Image src={quoteImg} alt="quoteImg" className="quoteImg" /> */}
              <p
                className="m-0 pt-4 ps-md-3 pt-md-1 text-white"
                style={{ textAlign: "justify" }}
              >
                I’m Syed Naveed Shah, and I’m thrilled to share a bit about our
                journey with you. At REDBOX, we are driven by a singular vision:
                to redefine the real estate experience with innovation,
                integrity, and a commitment to excellence to be one of the best
                real estate companies in Karachi. Our goal is not just to
                participate in the real estate market but to lead it by setting
                new standards in service and customer satisfaction.
              </p>
              <hr />
              <Link
                href="/chairman-message"
                className="text-decoration-none text-uppercase text-white fw-bold ps-md-3"
              >
                Know more
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Foundermessage;
