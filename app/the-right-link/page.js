import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES3.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "The Right Link",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/the-right-link",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  // },
  verification: {
    google: "pelJy-IZuMzR0W9YPpllKkhFisKaainuQaALl4zODYE",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs
        title="THE RIGHT LINKS"
        para="Founder’s Message
"
      />
      <div className="Chairmanmessage py-5">
        <Container>
          <Row>
            <Col lg={5}>
              <Image
                src={aboutmessageimg}
                alt="aboutmessageimg"
                className="img-fluid "
              />
            </Col>
            <Col lg={7} className="ps-md-5">
              <Image src={quoteImg} alt="quoteImg" className="quoteImg" />
              <h4 className="m-0 pt-4 fs-1 fw-bold ps-md-3 pt-md-5">
                <span className="redclr">“Your Gateway</span> to Prime
                Properties”
              </h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  Introducing The Right Links, a premier sales venture by
                  REDBOX, dedicated to connecting you with the finest properties
                  along the Super Highway being one of the top real estate
                  agencies in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our focus is on delivering unparalleled expertise and service
                  in prime real estate developments such as Bahria Town Karachi,
                  DHA City, ASF City, and other top-tier projects by providing
                  the best real estate services in Pakistan.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At The Right Links, we pride ourselves on having a team of
                  seasoned sales professionals who are not only knowledgeable
                  about the market but are also passionate about helping clients
                  find their ideal property investments.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Whether you're looking for residential plots, commercial
                  spaces, or investment opportunities, our team is equipped to
                  guide you through every step of the process along with the
                  top-notch Karachi real estate agents.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our deep understanding of the Super Highway real estate
                  landscape allows us to offer exclusive insights and
                  opportunities that match your needs and preferences.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  We believe in forging strong, trust-based relationships with
                  our clients as their Real Estate Agency, ensuring that every
                  transaction is smooth, transparent, and tailored to your
                  specific goals.
                  <br />
                </span>
                <span>
                  The Right Links is more than just a sales venture; it’s your
                  trusted partner in navigating the ever-evolving real estate
                  market.
                  <br />
                  With our commitment to excellence and a focus on client
                  satisfaction, we make finding the right property simple and
                  straightforward.
                </span>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
