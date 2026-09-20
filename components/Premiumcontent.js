import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Premiumcontent = ({ premiumcontent }) => {
  return (
    <>
      <div className="Premiumcontent py-5">
        <Container>
          <Row>
            <Col lg={10} className="text-center offset-md-1">
              <h1
                className="m-0 fs25 fw-semibold text-center pb-2 "
                dangerouslySetInnerHTML={{ __html: premiumcontent?.heading }}
              ></h1>
              <p
                className="m-0 fs22 text-center"
                dangerouslySetInnerHTML={{ __html: premiumcontent?.para }}
              ></p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Premiumcontent;
