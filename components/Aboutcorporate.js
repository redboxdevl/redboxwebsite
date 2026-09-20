import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import arabhopemakers from "../public/images/csr3.png";

const Aboutcorporate = () => {
  return (
    <>
      <div className="Aboutcorporate py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={7}>
              <Image
                src={arabhopemakers}
                alt="arabhopemakers"
                className="img-fluid w-100"
              />
            </Col>
            <Col lg={5}>
              <h3 className="fs-1 fw-bold text-dark">
                Corporate Social Responsibility
              </h3>
              <p className="m-0 pt-3">
                At REDBOX, we are proud to support the Autism Care and
                Rehabilitation Organization (ACRO) through our corporate social
                responsibility initiatives. Our partnership with ACRO reflects
                our commitment to making a positive impact in our community.
              </p>
              <hr />
              <Link
                href="/corporate-social-responsibility"
                className="text-decoration-none text-uppercase text-dark fw-bold"
              >
                MORE ABOUT CSR
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutcorporate;
