import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Image from "next/image";

const Comunitybox = ({ comunityboxcontent }) => {
  return (
    <>
      <div className="Comunitybox">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fw-semibold fs35 text-dark pb-3">
                {comunityboxcontent?.heading}
              </h3>
              <Link
                href="/paragon-tower"
                className="text-decoration-none text-dark"
              >
                <Image
                  src={comunityboxcontent?.banner}
                  width={1150}
                  height={487}
                  alt="communityImg"
                  className="img-fluid w-100"
                />
                <h4 className="fs24 pt-3 fw-semibold">
                  {comunityboxcontent?.subheading}
                </h4>
                <p
                  className="m-0 fw-bold pb-2 com1 fs14"
                  style={{ color: "#4a4a4a" }}
                >
                  {comunityboxcontent?.heading2}
                </p>
                <p className="m-0 com2 fs14" style={{ color: "#4a4a4a" }}>
                  {comunityboxcontent?.para}
                </p>
                <hr className="m-0 mt-3 mb-3" />
                <h5 className="text-uppercase fw-semibold vwft">Know More</h5>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Comunitybox;
