import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES1.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Redbox TV",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/redbox-tv",
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
        title="REDBOX TV"
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
                <span className="redclr">“Pioneering</span> Real Estate
                Awareness in Pakistan”
              </h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  REDBOX TV stands as a groundbreaking initiative, being the
                  first YouTube channel in Pakistan dedicated to real estate
                  awareness. With a mission to educate and inform viewers about
                  the intricacies of the real estate market by providing the
                  best Karachi investment opportunities, REDBOX TV has quickly
                  become a trusted source for anyone looking to understand
                  property investment, market trends, and real estate
                  opportunities in Pakistan.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our channel has garnered immense popularity, boasting over
                  260K subscribers—a testament to the valuable content and
                  insights we provide through teaching you how to invest in real
                  estate.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  With the largest media team in the industry, REDBOX TV
                  delivers high-quality videos, expert interviews, market
                  analysis, and property tours, ensuring our audience stays
                  well-informed and up-to-date.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  We pride ourselves on making real estate accessible to
                  everyone, whether you're a seasoned investor or a first-time
                  buyer. Our channel has established us as one of the best real
                  estate investment companies.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our comprehensive coverage of the real estate landscape helps
                  viewers make informed decisions and navigate the complexities
                  of property transactions with confidence about overseas
                  investment opportunities.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At REDBOX TV, we’re not just about showcasing properties;
                  we’re about empowering our viewers with the knowledge they
                  need to succeed in best investment opportunities in Karachi.
                  Join our ever-growing community and stay ahead with the latest
                  updates and insights from Pakistan's leading real estate
                  YouTube channel.
                  <br />
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
