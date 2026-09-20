import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../public/images/aboutmessageimg.jpg";
import quoteImg from "../public/images/quoteImg.png";
import Link from "next/link";

const Chairmanmessage = () => {
  return (
    <>
      <div className="Chairmanmessage py-5">
        <Container>
          <Row>
            <Col lg={5}>
              <Image
                src={aboutmessageimg}
                alt="aboutmessageimg"
                className="img-fluid "
              />
            </Col>
            <Col lg={7} className="ps-md-5">
              <Image src={quoteImg} alt="quoteImg" className="quoteImg" />
              <p className="m-0 pt-4 fs-2 fw-bold ps-md-3 pt-md-5 ">
                <span className="redclr">“At REDBOX,</span> our mission is to
                turn real estate into a trusted experience, one relationship at
                a time”
              </p>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  I’m Syed Naveed Shah, and I’m thrilled to share a bit about
                  our journey with you. At REDBOX, we are driven by a singular
                  vision: to redefine the real estate experience with
                  innovation, integrity, and a commitment to excellence through
                  our property management consulltancy. Our goal is not just to
                  participate in the real estate market but to lead it by
                  setting new standards in service and customer satisfaction.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our story began with a simple yet powerful idea—to create a
                  company that values every client relationship and focuses on
                  delivering unparalleled service through exceptional investment
                  properties for sale Karachi. I believe that the foundation of
                  any successful venture lies in understanding the needs and
                  aspirations of our clients, and it’s this philosophy that
                  guides everything we do at REDBOX.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  We pride ourselves on our ability to adapt and innovate in a
                  dynamic market through best Karachi real estate agents. Our
                  team is our greatest asset, and their dedication and expertise
                  enable us to offer cutting-edge solutions that address the
                  evolving needs of the real estate sector. Whether you’re
                  looking to buy, sell, or invest, we are committed to providing
                  you with the highest level of service and support.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At REDBOX, we are not just building properties; we are
                  building trust and lasting relationships. Our approach is
                  grounded in transparency and ethical practices, ensuring that
                  you receive honest, reliable, and effective solutions tailored
                  to your unique requirements of overseas investment options.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Thank you for visiting our website. I invite you to explore
                  our services and learn more about how REDBOX can help you
                  achieve your real estate goals. We look forward to the
                  opportunity to work with you and exceed your expectations.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Warm regards,
                  <br />
                </span>
              </p>
              <p class="fw-bold m-0 redclr">Syed Naveed Shah</p>
              <p class="fw-bold">Founder & CEO, REDBOX</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Chairmanmessage;
