import React from "react";
import blog1 from "../public/images/blog1.jpg";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import { data } from "@/app/Blogdata";



const Blogitems = async () => {
  if (!data) return <div>Loading...</div>;

  return (
    <>
      <div className="Blogitems py-5">
        <Container>
          <Row>
            <Col lg={9}>
              <Row>
                {data.map((item) => (
                  <Col lg={6}>
                    <Link
                      href={`blog/${item.blog_url}`}
                      className="text-decoration-none text-dark"
                    >
                      <Image
                        src={blog1}
                        width={362}
                        height={302}
                        alt="communityImg"
                        className="img-fluid w-100"
                      />
                      <div className="newsBoxlayer">
                        <h4 className="fs-5 pt-3 fw-bold">
                          The Impact of Government Policies on Pakistan's Real
                          Estate Market: A Decade in Review
                        </h4>
                        <p className="fw-normal m-0">8 Jul 2024</p>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col lg={3}>
              <div className="catBlog">
                <h4 className="fs-3 fw-bold pb-3">All Categories</h4>
                <ul className="m-0 list-unstyled d-flex gap-2 flex-column">
                  <li>
                    <Link href="/">Press Release</Link>
                  </li>
                  <li>
                    <Link href="/">Blog</Link>
                  </li>
                  <li>
                    <Link href="/">DAMAC In the News</Link>
                  </li>
                  <li>
                    <Link href="/">Industry News</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogitems;
