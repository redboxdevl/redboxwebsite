"use client";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

const News = ({ blogcontent }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "do MMMM’ yyyy");
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://redbox.estate/blogapi.php");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // if (loading) return <div>Loading blogs...</div>;
  // if (error) return <div>Error: {error}</div>;

  console.log("blogs", blogs);

  return (
    <>
      <div className="News py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center fs35 fw-semibold pb-4">
                INSIDER INDUSTRY INSIGHTS
              </h3>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Navigation]}
                spaceBetween={30}
                loop={false}
                autoplay={false}
                // pagination={{
                //   clickable: true,
                // }}
                navigation={true}
                pagination={false}
                breakpoints={{
                  400: { slidesPerView: 1 },
                  740: { slidesPerView: 1 },
                  1275: { slidesPerView: 3 },
                }}
              >
                {blogs?.map((item, key) => {
                  return (
                    <>
                      {" "}
                      <SwiperSlide key={key}>
                        <Link
                          href={`https://redbox.estate/blog/${item?.blog_url}`}
                          className="text-decoration-none text-dark"
                        >
                          <div className="blogImgbox">
                            <Image
                              src={`https://redbox.estate/blogimages/images/thumb-blog/${item?.thumb_image}`}
                              width={362}
                              height={302}
                              alt="communityImg"
                              className="img-fluid w-100"
                            />
                          </div>
                          <div className="newsBoxlayer">
                            <h4 className="fs16 pt-3 fw-semibold">
                              {item?.blog_title}
                            </h4>
                            <p className="m-0 fw-bold pb-1 clrgrey fs15">
                              {item?.blog_author}
                            </p>
                            {/* <p className="fw-normal m-0">{item?.blog_dats}</p> */}
                            <p className="fw-semibold m-0 fs14 dateclr">
                              {formatDate(item?.blog_dats)}
                            </p>
                            <hr className="m-0 mt-5 mb-2" />
                            <h5 className="text-uppercase fw-bold fs14 ">
                              Know More <MdArrowRightAlt size={30} />
                            </h5>
                          </div>
                        </Link>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default News;
