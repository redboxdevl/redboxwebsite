"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gal1 from "../public/images/gal1.jpg";
import gal2 from "../public/images/gal2.jpg";
import Image from "next/image";
import Link from "next/link";

const GalleryDetails = ({ GalleryDetailscontent }) => {
  return (
    <>
      <div className="GalleryDetails">
        <Container>
          <Row>
            <Col lg={6}>
              <h3 className="fs-1 text-white fw-bold pb-3">
                {GalleryDetailscontent?.heading}
              </h3>
            </Col>
            <Col lg={6}></Col>
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
                  1275: { slidesPerView: 3 },
                }}
              >
                {GalleryDetailscontent.galleryData?.map((item, key) => {
                  return (
                    <>
                      <SwiperSlide>
                        <Image
                          src={item?.img}
                          alt="gal1"
                          width={362}
                          height={455}
                        />
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="communityCon">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fs-3 fw-bold">
                {GalleryDetailscontent?.subheading}
              </h3>
              <p>{GalleryDetailscontent?.para1}</p>
              <p>{GalleryDetailscontent?.para2}</p>
              <hr />
              {/* <Link href="#">{GalleryDetailscontent?.morelink}</Link> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GalleryDetails;
