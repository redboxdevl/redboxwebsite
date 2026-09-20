import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES2.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Redflix",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/redflix",
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
        title="REDFLIX"
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
                <span className="redclr">“Transforming</span> Marketing with
                Innovation and Expertise”
              </h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  REDFLIX, a premier marketing agency by REDBOX, is
                  revolutionizing the marketing landscape with a comprehensive
                  suite of services tailored to meet the diverse needs of
                  businesses across industries for specified and best Social
                  Media Marketing services.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our agency is built on the foundation of creativity,
                  innovation, and an unparalleled understanding of digital
                  marketing trends.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At REDFLIX, we offer a wide range of marketing solutions
                  designed to elevate your brand's presence and drive measurable
                  results. Our services include cutting-edge digital marketing
                  strategies, social media management, content creation, search
                  engine optimization (SEO), and pay-per-click (PPC) advertising
                  by our exceptional and Best SEO Services
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  With a strong digital focus, our team leverages the latest
                  tools and platforms to ensure your brand reaches its target
                  audience with precision and impact.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our experienced team is at the heart of REDFLIX, bringing
                  together a diverse group of marketing professionals with deep
                  expertise in various aspects of marketing by being the best
                  real estate seo service agency.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Whether it's crafting compelling brand stories, executing
                  data-driven campaigns, or optimizing online visibility, our
                  team works collaboratively to deliver exceptional outcomes for
                  our clients.
                  <br />
                  <br />
                </span>
                <span>
                  REDFLIX is not just another marketing agency; we are your
                  strategic partner in building and enhancing your brand's
                  identity with our website development for real estate
                  agencies. With a proven track record and a commitment to
                  excellence, we help businesses thrive in today's competitive
                  market by offering tailored marketing solutions that are as
                  unique as your brand.
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
