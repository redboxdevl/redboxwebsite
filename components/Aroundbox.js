"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../public/images/AQBazar.jpg";
import slider2 from "../public/images/slider2.jpg";
import slider3 from "../public/images/slider3.jpg";
import slider4 from "../public/images/slider4.jpg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Aroundbox = ({ aroundboxcontent }) => {
  return (
    <>
      <div className="Aroundbox py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fs35 fw-semibold text-center text-dark pb-3">
                {aroundboxcontent?.heading}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                navigation={true}
                // pagination={{
                //   clickable: true,
                // }}
                pagination={false}
                breakpoints={{
                  400: { slidesPerView: 1 },
                  740: { slidesPerView: 1 },
                  1275: { slidesPerView: 1 },
                }}
              >
                <SwiperSlide>
                  <div
                    className="around1 sliderPanel d-flex align-items-end"
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
                            <div className="captionData d-flex justify-content-between py-md-4 py-2 align-items-center">
                              <div>
                                <h2 className="fs24  pb-2 text-white m-0">
                                  AQ BAZAR
                                </h2>
                                <p className="text-white m-0 fs14">
                                  Bahria Town
                                </p>
                              </div>

                              <div>
                                <Link
                                  href="/aq-bazaar"
                                  className="rounded fs14 fw-semibold d-flex justify-content-between ps-3 pe-3 gap-5 align-items-center"
                                  style={{
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid #fff",
                                  }}
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
                {/* <SwiperSlide>
                  <div
                    className="around1 sliderPanel d-flex align-items-end"
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
                            <div className="captionData d-flex justify-content-between py-4 align-items-center">
                              <div>
                                <h2 className="fs-3 fw-bold text-white m-0">
                                  DAMAC Tower Amman
                                </h2>
                                <p className="text-white m-0">Doha Qatar</p>
                              </div>

                              <div>
                                <Link
                                  href="/"
                                  className="rounded"
                                  style={{
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid #fff",
                                  }}
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
                    className="around1 sliderPanel d-flex align-items-end"
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
                            <div className="captionData d-flex justify-content-between py-4 align-items-center">
                              <div>
                                <h2 className="fs-3 fw-bold text-white m-0">
                                  DAMAC Tower Amman
                                </h2>
                                <p className="text-white m-0">Doha Qatar</p>
                              </div>

                              <div>
                                <Link
                                  href="/"
                                  className="rounded"
                                  style={{
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid #fff",
                                  }}
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
                    className="around1 sliderPanel d-flex align-items-end"
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
                            <div className="captionData d-flex justify-content-between py-4 align-items-center">
                              <div>
                                <h2 className="fs-3 fw-bold text-white m-0">
                                  DAMAC Tower Amman
                                </h2>
                                <p className="text-white m-0">Doha Qatar</p>
                              </div>

                              <div>
                                <Link
                                  href="/"
                                  className="rounded"
                                  style={{
                                    background: "transparent",
                                    color: "#fff",
                                    border: "1px solid #fff",
                                  }}
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
                </SwiperSlide> */}
              </Swiper>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className="text-center mt-md-5 mt-4">
              <Link
                href="/projects"
                className="fs18 projectsx pe-4 ps-3 d-flex gap-5 justify-content-between align-items-center"
                style={{
                  background: "transparent",
                  color: "#000",
                  border: "1px solid #000",
                }}
              >
                VIEW ALL PROJECTS <FaArrowRightLong size={20} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aroundbox;
