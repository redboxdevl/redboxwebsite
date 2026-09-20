import React from "react";
import teams1 from "../public/images/teams1.jpg";
import teams2 from "../public/images/teams2.jpg";
import teams3 from "../public/images/teams3.jpg";
import teams4 from "../public/images/teams4.jpg";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";

const AboutTeam = () => {
  return (
    <>
      <div className="AboutTeam py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fw-bold fs-1">Management team</h3>
              <p className="m-0 pb-4" style={{ textAlign: "justify" }}>
                Meet the dynamic and experienced leadership team driving
                innovation and excellence at REDBOX, committed to delivering
                exceptional real estate services and building lasting
                relationships being in real estate Karachi.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div className="teamInfo">
                <Image src={teams4} alt="team1" className="img-fluid w-100" />
                <h5 className="m-0 pt-3 fs-3 fw-bold">Saeed Shah</h5>
                <p className="m-0">Chief Clarity Officer</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamInfo">
                <Image src={teams3} alt="team1" className="img-fluid w-100" />
                <h5 className="m-0 pt-3 fs-3 fw-bold">Waheed Shah</h5>
                <p className="m-0">Senior Sales Management</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamInfo">
                <Image src={teams1} alt="team1" className="img-fluid w-100" />
                <h5 className="m-0 pt-3 fs-3 fw-bold">Imran Ansari</h5>
                <p className="m-0">Sales & Operation</p>
              </div>
            </Col>
            <Col lg={3}>
              <div className="teamInfo">
                <Image src={teams2} alt="team1" className="img-fluid w-100" />
                <h5 className="m-0 pt-3 fs-3 fw-bold">Javeria Raza Musvi</h5>
                <p className="m-0">Marketing & Business Growth</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutTeam;
