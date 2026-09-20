"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import damacLogo from "../public/images/whiteLogo.png";
import Link from "next/link";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { RiContactsBook3Fill } from "react-icons/ri";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import InquireNow from "./InquireNow";
import ScheduleCalls from "./ScheduleCalls";

const Footer = () => {
  const [scroll, setScroll] = useState(false);

  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className={`fixedBottombar justify-content-around ${
          scroll ? "d-flex" : "d-none"
        }`}
      >
        <div className="bottomnav">
          <Link
            href="mailto:info@redbox.estate"
            onClick={handleShow}
            className="d-flex flex-column justify-content-center align-items-center gap-1"
          >
            <IoMdMail size={21} />
            <p>Enquire</p>
          </Link>
        </div>
        <div className="bottomnav">
          <Link
            href="tel:923111112266"
            className="d-flex flex-column justify-content-center align-items-center gap-1"
          >
            <IoCall size={21} />
            <p>Call</p>
          </Link>
        </div>
        <div className="bottomnav">
          <Link
            href="https://wa.me/923111112266"
            className="d-flex flex-column justify-content-center align-items-center gap-1"
          >
            <FaWhatsapp size={21} />
            <p>Whatsapp</p>
          </Link>
        </div>
        <div className="bottomnav">
          <Link
            href="/contact"
            className="d-flex flex-column justify-content-center align-items-center gap-1"
          >
            <RiContactsBook3Fill size={21} />
            <p>Contact Us</p>
          </Link>
        </div>
      </div>
      <div className="Footer py-5 pb-4">
        <Container>
          <Row className="align-items-center">
            <Col lg={3}>
              <Image src={damacLogo} alt="damacLogo" width={200} />
            </Col>
            <Col lg={3}>
              <div className="social">
                <h3 className="m-0 fs-5">Follow Us On</h3>
                <ul className="list-unstyled m-0 d-flex gap-2 pt-1 align-items-center">
                  <li>
                    <Link href="https://www.facebook.com/RedboxPropertyConsultant/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/redbox_online">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://pk.linkedin.com/company/redbox-real-estate">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.instagram.com/redbox.estate/">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://youtube.com/c/RBTVNETWORK">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* <Col lg={3}>
              <p className="m-0" style={{ color: "#c0aa71" }}>
                Subscribe to our exclusive offers
              </p>
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Please insert a valid email"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Subscribe
                </button>
              </div>
            </Col> */}
          </Row>
          <Row className="pt-5">
            <Col lg={3}>
              <p
                className="fw-bold m-0 fs-5 mobileBx"
                onClick={() =>
                  setActiveMenu(activeMenu === "why" ? null : "why")
                }
              >
                WHY REDBOX?{" "}
              </p>
              <ul
                className={`m-0 list-unstyled pt-2 menuxs ${
                  activeMenu === "why" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link href="/about-us">About REDBOX</Link>
                </li>
                <li>
                  <Link href="/chairman-message">Founder's Message</Link>
                </li>
                <li>
                  <Link href="/investor-relations">Investor relations</Link>
                </li>
                <li>
                  <Link href="/corporate-social-responsibility">
                    Corporate Social Responsibility
                  </Link>
                </li>
                {/* <li>
                  <Link href="/building-documentation">
                    Building Documentation
                  </Link>
                </li> */}
                <li>
                  <Link href="/career">Careers</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <p
                className="fw-bold m-0 fs-5 mobileBx"
                onClick={() =>
                  setActiveMenu(activeMenu === "projects" ? null : "projects")
                }
              >
                PROJECTS
              </p>
              <ul
                className={`m-0 list-unstyled pt-2 menuxs ${
                  activeMenu === "projects" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link href="/paragon-tower">Paragon Towers</Link>
                </li>
                <li>
                  <Link href="/redsim-hills">Redsim Hills</Link>
                </li>
                <li>
                  <Link href="/blue-lake-farmhouse">Blue Lake Farmhouses</Link>
                </li>
                <li>
                  <Link href="/aq-bazaar">AQ Bazaar</Link>
                </li>
                <li>
                  <Link href="/dha-city">DHA City</Link>
                </li>
                <li>
                  <Link href="/asf-city">ASF City</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <p
                className="fw-bold m-0 fs-5 mobileBx"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "subsidiaries" ? null : "subsidiaries",
                  )
                }
              >
                SUBSIDIARIES
              </p>
              <ul
                className={`m-0 list-unstyled pt-2 menuxs ${
                  activeMenu === "subsidiaries" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link href="/redbox-tv">Redbox TV</Link>
                </li>
                <li>
                  <Link href="/redflix">Redflix</Link>
                </li>
                <li>
                  <Link href="/the-right-link">The Right Links</Link>
                </li>
                <li>
                  <Link href="/imake">IMake</Link>
                </li>
                <li>
                  <Link href="/next-factor">Next Factor</Link>
                </li>
                <li>
                  <Link href="/sell-more">Sell More</Link>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <p
                className="fw-bold m-0 fs-5 mobileBx"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "redboxassist" ? null : "redboxassist",
                  )
                }
              >
                REDBOX ASSIST
              </p>
              <ul
                className={`m-0 list-unstyled pt-2 menuxs ${
                  activeMenu === "redboxassist" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link href="/bahria-town-karachi-price-list">
                    Bahria Town Karachi
                  </Link>
                </li>
                <li>
                  <Link href="/dha-city-karachi-price-list">
                    DHA City Karachi
                  </Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col lg={3}>
              <p
                className="fw-bold m-0 fs-5 mobileBx"
                onClick={() =>
                  setActiveMenu(
                    activeMenu === "mediacenttr" ? null : "mediacenttr",
                  )
                }
              >
                MEDIA CENTER{" "}
              </p>
              <ul
                className={`m-0 list-unstyled pt-2 menuxs ${
                  activeMenu === "mediacenttr" ? "show" : "hide"
                }`}
              >
                <li>
                  <Link href="/video-gallery">Video Gallery</Link>
                </li>
                <li>
                  <Link href="/blog">REDBOX Blogs</Link>
                </li>
                <li>
                  <Link href="/news">Industry News</Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@RBTVNETWORK">
                    REDBOX TV
                  </Link>
                </li>
                <li>
                  <Link href="/term-and-condition">Terms and Conditions</Link>
                </li>
                <li>
                  <Link href="/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/corporate-communication-policy">
                    Corporate Communication Policy
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="pt-4">
            <Col lg={12}>
              <p className="m-0 text-white text-center">
                © {new Date().getFullYear()} REDBOX Real Estate Marketing. All
                Rights Reserved
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <InquireNow show={show} handleClose={handleClose} />
      {/* <ScheduleCalls show={show} handleClose={handleClose} /> */}
    </>
  );
};

export default Footer;
