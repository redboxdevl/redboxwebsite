import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const Comunitychildbox = ({ comunitychildboxcontent }) => {
  return (
    <>
      <div className="Comunitychildbox py-5">
        <Container>
          <Row>
            {comunitychildboxcontent?.map((item, key) => {
              return (
                <>
                  <Col lg={6} key={key}>
                    <Link
                      href={`/${item?.slug}`}
                      className="text-decoration-none text-dark"
                    >
                      <Image
                        src={item?.img}
                        alt="communityImg"
                        width={561}
                        height={511}
                        className="img-fluid w-100"
                      />
                      <h4 className="fs24 pt-3 fw-semibold">{item?.heading}</h4>
                      <p className="m-0 fw-semibold pb-2 com1 fs14">
                        {item?.subheading}
                      </p>
                      <p className="m-0 com2 fs14" style={{ color: "#4a4a4a" }}>
                        {item?.para}
                      </p>
                      <hr className="m-0 mt-2 mb-3" />
                      <h5 className="text-uppercase fw-semibold vwft">
                        Know More
                      </h5>
                    </Link>
                  </Col>
                </>
              );
            })}

            {/* <Col lg={6}>
              {" "}
              <Link href="/" className="text-decoration-none text-dark">
                <Image
                  src={childlisting2}
                  alt="communityImg"
                  className="img-fluid w-100"
                />
                <h4 className="fs-4 pt-3 fw-bold">DAMAC LAGOONS</h4>
                <p className="m-0 fw-bold pb-2">
                  Dubailand, Dubai, United Arab Emirates
                </p>
                <p className="fw-normal m-0">
                  An established and prestigious international golf community in
                  Dubailand comprising luxury villas, apartments and a hotel
                </p>
                <hr className="m-0 mt-2 mb-3" />
                <h5 className="text-uppercase fw-bold">Know More</h5>
              </Link>
            </Col> */}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Comunitychildbox;
