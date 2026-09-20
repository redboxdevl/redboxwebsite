"use client";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import Airport from "../public/images/Airport.svg";
import Business from "../public/images/Business.svg";
import dubaiautodrome from "../public/images/dubaiautodrome.svg";
import dubaiinternationalstadium from "../public/images/dubaiinternationalstadium.svg";
import globalvillage from "../public/images/globalvillage.svg";
import Hospita from "../public/images/Hospita.svg";
import mircalegarden from "../public/images/mircalegarden.svg";

import { GoogleMapsEmbed } from "@next/third-parties/google";

const Aminities = ({ Nearbycontent, Aminitiescontent, mapLocationurl }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="Aminities py-5">
        <Container>
          <Row className="pb-4">
            <Col lg={12}>
              <h3 className="fw-bold fs-2">Amenities & Advantages</h3>
              <p>A Life Full of Experiences</p>
            </Col>
            <Col lg={12}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={10}
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
                  1275: { slidesPerView: 3 },
                }}
              >
                {Aminitiescontent?.map((item, key) => {
                  return (
                    <>
                      <SwiperSlide key={key}>
                        <div className="amentyitem">{item?.title}</div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Col>
          </Row>

          <Row className="pt-5 pb-4 Nearby">
            <Col lg={12}>
              <h3 className="fw-bold fs-2 pb-4">Nearby</h3>
              <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                navigation={false}
                // pagination={{
                //   clickable: true,
                // }}
                pagination={false}
                breakpoints={{
                  400: { slidesPerView: 1 },
                  740: { slidesPerView: 1 },
                  1275: { slidesPerView: 4 },
                }}
              >
                {Nearbycontent?.map((item, key) => {
                  return (
                    <>
                      <SwiperSlide key={key}>
                        <div className="AmenitiesBox">
                          <div className="AmenitiesIcon">
                            <Image
                              src={item?.img}
                              alt="Airport"
                              className="img-fluid"
                              width={225}
                              height={225}
                            />
                          </div>
                          <div className="AmenitiesFooter text-center">
                            <h3>{item?.title}</h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Col>
          </Row>

          <Row className="pt-4">
            <Col lg={12}>
              <h3 className="fs-2 fw-bold pb-3">Location</h3>
              <iframe
                src={mapLocationurl?.mapslug}
                frameborder="0"
                style={{ width: "100%" }}
                height={400}
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aminities;
