import Breadcrumbs from "@/components/Breadcrumbs";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Blue Lake Farmhouses Offering 1 Acre Serenity in Gharo",
  description:
    "Discover Blue Lake Farmhouses by REDBOX in Gharo. Enjoy 1-acre retreats with modern amenities, ample space, and privacy. Perfect for living or investment.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/building-documentation",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  verification: {
    google: "pelJy-IZuMzR0W9YPpllKkhFisKaainuQaALl4zODYE",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs title="Building Documentation" para="" />
      <Container>
        <Row>
          <Col lg={8}>
            <div class="page-block main-content-wrapper" is="">
              <h1 class="title" id="page-title">
                Building Documentation
              </h1>
              <p>
                Easily access and download all essential documentation for
                projects marketed by REDBOX right here.
              </p>
              <div class="b-row">
                <Link
                  href="/images/pdf/AQPentHouse.pdf"
                  download
                  target="_blank"
                >
                  AQ Pent House PDF
                </Link>
              </div>
              <div class="b-row">
                <Link
                  href="/images/pdf/ASFCITYKARACHI.pdf"
                  download=""
                  target="_blank"
                >
                  ASF CITY KARACHI PDF
                </Link>
              </div>
              <div class="b-row">
                <Link
                  href="/images/pdf/BlueLakeFarmhouses.pdf"
                  download=""
                  target="_blank"
                >
                  Blue Lake Farmhouses PDF
                </Link>
              </div>
              <div class="b-row">
                <Link
                  href="/images/pdf/DHACity.pdf"
                  download=""
                  target="_blank"
                >
                  DHA City PDF
                </Link>
              </div>
              <div class="b-row">
                <Link
                  href="/images/pdf/ParagonTower.pdf"
                  download=""
                  target="_blank"
                >
                  Paragon Tower PDF
                </Link>
              </div>
              <div class="b-row">
                <Link href="/images/pdf/Redsim.pdf" download="" target="_blank">
                  Redsim PDF
                </Link>
              </div>

              <div id="buildings"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default page;
