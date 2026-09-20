import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import pro1 from "../public/images/pro1.jpg";
import pro2 from "../public/images/pro2.jpg";
import pro3 from "../public/images/pro3.jpg";
import pro4 from "../public/images/pro4.jpg";
import pro5 from "../public/images/pro5.jpg";
import pro6 from "../public/images/pro6.jpg";

const Projectsdata = ({ projectdata }) => {
  return (
    <>
      <div className="Projectsdata">
        <Container>
          <Row>
            {projectdata?.map((item, key) => {
              return (
                <>
                  <Col lg={4} key={key}>
                    <Link
                      href={`${item?.slug}`}
                      className="text-decoration-none text-dark"
                    >
                      <Image
                        src={item?.img}
                        width={366}
                        height={284}
                        alt="communityImg"
                        className="img-fluid w-100"
                      />
                      <div className="footerPro">
                        <h4 className="fs-5 pt-3 fw-bold">{item?.heading}</h4>
                        <p className="m-0 fw-normal pb-2">{item?.subheading}</p>
                        <p className="fw-bold m-0 pb-2">{item?.headingtitle}</p>
                        <p className="fw-normal m-0 prox">{item?.para}</p>

                        <hr className="m-0 mt-4 mb-2" />
                        <h5 className="text-uppercase fw-bold">Know More</h5>
                      </div>
                    </Link>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projectsdata;
