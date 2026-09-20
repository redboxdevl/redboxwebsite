import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";

const Detailsinfo = ({ Detailsinfocontent }) => {
  return (
    <>
      <div className="Detailsinfo">
        <Container>
          <Row>
            <Col lg={12}>
              <h3>{Detailsinfocontent?.heading}</h3>
              <h4>{Detailsinfocontent?.subheading}</h4>
              <div className="d-flex flex-wrap gap-3 align-items-center pt-3 pb-5">
                <Link href="tel:923111112266">Request a Callback</Link>
                <Link href="https://wa.me/923111112266">
                  Send WhatsApp Message
                </Link>
              </div>
              <p>{Detailsinfocontent?.para1}</p>
              <p>{Detailsinfocontent?.para2}</p>
              <p>{Detailsinfocontent?.para3}</p>

              <div className="d-flex flex-wrap gap-3 align-items-center pt-3 pb-5">
                {Detailsinfocontent?.downloadBrouchure ? (
                  <Link
                    href={Detailsinfocontent?.downloadBrouchure}
                    className="d-flex align-items-center gap-3 text-dark"
                    style={{ background: "#fff", border: "1px solid #cfba82" }}
                  >
                    DOWNLOAD BROCHURE <FiDownload />
                  </Link>
                ) : (
                  <></>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Detailsinfo;
