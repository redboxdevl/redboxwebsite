import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Breadcrumbs = ({ title, para }) => {
  return (
    <>
      <div className="Breadcrumbs pt-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h1 className="m-0 text-white fw-bold">{title}</h1>
              <p className="m-0 text-white">{para}</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Breadcrumbs;
