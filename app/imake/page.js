import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutmessageimg from "../../public/images/SUBSIDIARIES4.jpg";
import quoteImg from "../../public/images/quoteImg.png";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata = {
  title: "Imake Construction",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/imake",
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
        title="IMAKE"
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
              <h4 className="m-0 pt-4 fs-2 fw-bold ps-md-3 pt-md-5">
                <span className="redclr">“Crafting</span> Homes with Excellence
                and Precision”
              </h4>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p>
                <span>
                  IMake, a distinguished construction company by REDBOX, is
                  dedicated to transforming dreams into reality by building
                  exceptional homes that reflect quality, craftsmanship, and
                  attention to detail.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Specializing in the new deals for residential construction,
                  IMake brings together innovation and expertise to create
                  living spaces that are not only functional but also
                  aesthetically pleasing.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  At IMake, we understand that a home is more than just a
                  structure; it’s a personal sanctuary where memories are made.
                  That’s why we focus on delivering customized construction
                  solutions that cater to the unique needs and preferences of
                  our clients.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  From the initial design phase to the final touches, our team
                  of experienced architects, engineers, and craftsmen work
                  diligently to ensure every project meets the highest standards
                  of excellence. If you find yourself in a sitution real estate
                  investing for beginners, then construction plans by iMake are
                  the solution for you!
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Our commitment to using premium materials and employing
                  sustainable building practices sets us apart in the
                  construction industry. Thee construction plans are the Best
                  investment opportunities in Karachi.
                  <br />
                </span>
                <span>
                  <br />
                </span>
                <span>
                  Whether you’re envisioning a modern minimalist residence or a
                  classic family home, IMake has the expertise to bring your
                  vision to life with precision and care.
                  <br />
                </span>
                <span>
                  With IMake, you can expect a seamless construction experience
                  that is guided by transparency, integrity, and a dedication to
                  exceeding your expectations.
                  <br />
                  Trust us to build not just a house, but a place you’ll proudly
                  call home.
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
