import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES5.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Next Factor",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/next-factor",
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
        title="NEXT FACTOR"
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
                <span className="redclr">“Empowering</span> the Future with
                Skills Development”
              </h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  Next Factor, a dynamic subsidiary of REDBOX, is dedicated to
                  empowering individuals with the skills they need to thrive in
                  the digital economy for Amazon courses in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  We offer a range of cutting-edge courses designed to equip
                  learners with practical knowledge and expertise in platforms
                  like Amazon, Shopify, TikTok Shop, and Daraz.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At Next Factor, we understand the growing demand for digital
                  skills in today’s fast-paced market. Our courses are tailored
                  to provide hands-on experience, guiding participants through
                  the intricacies of e-commerce, online retail, and digital
                  marketing though TikTok course in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Whether you're an entrepreneur looking to expand your business
                  or someone seeking to enhance your career prospects, Next
                  Factor has the right training for you.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our experienced instructors bring real-world insights and
                  industry best practices to the classroom, ensuring that our
                  students gain not just theoretical knowledge but also
                  practical skills that can be immediately applied by our
                  digital marketing course in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  With a focus on personalized learning and continuous support,
                  Next Factor is committed to helping you succeed in the digital
                  landscape.
                  <br />
                </span>
                <span>
                  By choosing Next Factor, you’re not just taking a
                  course—you’re investing in your future. Join us to unlock new
                  opportunities and stay ahead in the ever-evolving world of
                  e-commerce and digital platforms like Daraz course in Karachi.
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
