import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES6.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Sell More",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/sell-more",
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
        title="SELLMORE"
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
                  Sellmore, a forward-thinking subsidiary of REDBOX, is designed
                  to empower businesses with cutting-edge digital solutions that
                  streamline operations and drive efficiency.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our comprehensive platform offers a suite of tools tailored to
                  address the multifaceted needs of modern businesses, from
                  finance handling to HR management and everything in between.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At Sellmore, we understand the complexities of running a
                  business in today’s fast-paced environment. That’s why we’ve
                  developed a range of modules that simplify and enhance every
                  aspect of business management by our CRM services in Pakistan.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our finance handling solutions ensure accurate tracking and
                  management of financial data, while our marketing modules
                  provide the tools needed to effectively plan, execute, and
                  analyze marketing campaigns by task management system in
                  Pakistan.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our sales tracking and reporting features offer real-time
                  insights into your sales performance, helping you make
                  informed decisions that boost profitability for inventory
                  management in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  The HR modules include attendance tracking, performance
                  monitoring, and streamlined operations management, ensuring
                  that your team is working efficiently and effectively.
                  <br />
                </span>
                <br />
                <span>
                  Sellmore is more than just a software solution; it's a
                  strategic partner in your business growth. By digitalizing and
                  automating essential processes, we help you save time, reduce
                  errors, and focus on what matters most—growing your business.
                  Join the many businesses that trust Sellmore to take their
                  operations to the next level.
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
