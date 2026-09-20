import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import singlebanner from "../public/images/singlebanner.jpg";
import Image from "next/image";

const ProjectdetailsBread = ({ projectdetailsbreadcontent }) => {
  return (
    <>
      <div className="ProjectdetailsBread">
        <Container>
          <Row>
            <Col lg={12}>
              <Image
                src={projectdetailsbreadcontent?.img}
                alt="singlebanner"
                width={1171}
                height={451}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ProjectdetailsBread;
