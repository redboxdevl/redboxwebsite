// components/AutoplayVideo.js

import { Col, Container, Row } from "react-bootstrap";

const Careersecond = () => {
  return (
    <>
      <div className="CareerVideo">
        <Container>
          <Row>
            <Col lg={12}>
              {" "}
              <video width="100%" height="auto" autoPlay muted loop>
                <source src="/images/Careermainbanner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Careersecond;
