"use client";
import React from "react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../public/images/narkinshillcrestBanner.webp";
import slider2 from "../public/images/narkinsboutiqueBanner.webp";
import slider3 from "../public/images/slider3.jpg";
import slider4 from "../public/images/hmrBanner.webp";
import slider5 from "../public/images/slider5.jpeg";
import slider6 from "../public/images/slider6.jpeg";
import slider7 from "../public/images/emaarBaner.webp";
import slider8 from "../public/images/thegrandresidencyBanner.jpg";
import slider9 from "../public/images/Bahriatown.jpg";

import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";

const Sliderinfo = () => {
  return (
    <>
      <div className="Sliderinfo">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          // pagination={{
          //   clickable: true,
          // }}
          navigation={true}
          pagination={false}
          breakpoints={{
            400: { slidesPerView: 1 },
            740: { slidesPerView: 1 },
            1275: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide>
            <div
              className="slider7 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider7.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 text-white text-uppercase m-0">
                            Emaar Oceanfront
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            {/* 1-Bed Lounge Luxury Apartments */}
                          </p>
                        </div>
                        <div>
                          <Link
                            href="https://emaar.redbox.estate/"
                            className=""
                          >
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider8 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider8.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 text-white text-uppercase m-0">
                            The Grand Residency
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            2-Bed, 3-Bed, & 4-Bed Apartments
                          </p>
                        </div>
                        <div>
                          <Link href="/the-grand-residency" className="">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider1 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider4.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 text-white text-uppercase m-0">
                            HMR Waterfront
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Luxury Sea Facing Living
                          </p>
                        </div>
                        <div>
                          <Link href="https://hmr.redbox.estate/" className="">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slider3 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 fw-normal text-white text-uppercase m-0">
                            Paragon Towers
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Studio & 2-Bed Apartments in Bahria Town Karachi
                          </p>
                        </div>
                        <div>
                          <Link href="/paragon-tower" className="">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider9 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider9.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 text-white text-uppercase m-0">
                            Bahria Town Karachi
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Residential & Commercial Property
                          </p>
                        </div>
                        <div>
                          <Link href="/bahria-town-karachi" className="">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider2 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider2.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 text-white text-uppercase m-0">
                            Narkins Boutique Residency
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            {/* Commercial Shops for Sale in Bahria Town Karachi */}
                          </p>
                        </div>
                        <div>
                          <Link
                            href="https://narkinsboutique.redbox.estate/"
                            className=""
                          >
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider5 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider1.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 fw-bold text-white text-uppercase m-0">
                            Narkins Hill Crest
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Hill Crest Residency Ready To Move
                          </p>
                        </div>
                        <div>
                          <Link
                            href="https://narkinshillcrest.redbox.estate/"
                            className="rounded"
                          >
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slider4 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider5.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 fw-bold text-white text-uppercase m-0">
                            ASF City
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Residential Plots for Sale on M9 Motorway
                          </p>
                        </div>
                        <div>
                          <Link href="/asf-city" className="rounded">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="slider6 sliderPanel d-flex align-items-end"
              style={{
                background: `url(${slider6.src})`,
                backgroundSize: "cover",
                backgroundPosition: "50% 30%",
                width: "100%",
                height: "87vh",
              }}
            >
              <div className="Captionbox">
                <Container>
                  <Row>
                    <Col lg={12}>
                      {" "}
                      <div className="captionData d-flex justify-content-between py-md-5 py-3 align-items-center">
                        <div>
                          <h2 className="fs-2 fw-bold text-white text-uppercase m-0">
                            DHA City
                          </h2>
                        </div>
                        <div>
                          <p className="m-0 text-white fs-5">
                            Residential Plots for Sale on Super Highway
                          </p>
                        </div>
                        <div>
                          <Link href="/dha-city" className="rounded">
                            KNOW MORE <FaArrowRightLong />
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Sliderinfo;
