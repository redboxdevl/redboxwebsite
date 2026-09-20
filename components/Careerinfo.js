import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Careerinfo = () => {
  return (
    <>
      <div className="Careerinfo py-5 pb-1 text-center">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="fs-1 fw-bold text-uppercase">
                Welcome to our World
              </h2>
              <hr className="my-3" />
              <p>Make a career with REDBOX and enhance your work life!</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Careerinfo;
