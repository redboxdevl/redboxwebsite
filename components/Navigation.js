"use client";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import damacLogo from "../public/images/logo.webp";
import Image from "next/image";
import Link from "next/link";
import { SlCalender } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaCircleUser } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";
import InquireNow from "./InquireNow";
import { IoIosPricetag } from "react-icons/io";
import ScheduleCalls from "./ScheduleCalls";

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://redbox.estate/priceprojectapi.php"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className={`Navigation ${scroll ? "active" : ""}`}>
        <Navbar expand="lg" className="py-md-2">
          <Container>
            <Link className="navbar-brand" href="/">
              <Image src={damacLogo} alt="damacLogo" width={150} />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center gap-md-2">
                <Link className="nav-link" href="/real-talks">
                  <b className="text-dark">
                    <i>REAL TALKS</i>
                  </b>
                </Link>
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  href="javascript:;"
                  onClick={handleShow2}
                >
                  <SlCalender fill="#000" size={17} /> SCHEDULE A CALL
                </Link>
                <Link
                  className="nav-link"
                  href="javascript:;"
                  onClick={handleShow}
                >
                  <CiMail fill="#000" size={21} /> ENQUIRE
                </Link>
                <Link className="nav-link" href="/projects">
                  Projects
                </Link>
                <NavDropdown
                  style={{ borderRight: "0" }}
                  title={
                    <>
                      <IoIosPricetag fill="#000" size={20} /> Real Estate
                      Pricing
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  {projects?.map((item, key) => {
                    return (
                      <>
                        <Link
                          className="dropdown-item"
                          href={item?.project_slug}
                        >
                          {item?.project_name}
                        </Link>
                      </>
                    );
                  })}
                </NavDropdown>
                <Link className="nav-link" href="/blog">
                  Blog
                </Link>
                <Link className="nav-link" href="/contact">
                  Contact Us
                </Link>
                <Link
                  className="nav-link"
                  href="https://crm.pakrealestatecrm.com/affiliate-program"
                >
                  Affiliate Login
                </Link>
                {/* <NavDropdown
                  title={
                    <>
                      <FaCircleUser fill="#000" size={20} /> Login
                    </>
                  }
                  id="basic-nav-dropdown"
                >
                  <Link className="dropdown-item" href="#action/3.1">
                    DAMAC Living
                  </Link>
                  <Link className="dropdown-item" href="#action/3.1">
                    Agent Portal
                  </Link>
                  <Link className="dropdown-item" href="#action/3.2">
                    DAMAC Leasing
                  </Link>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <InquireNow show={show} handleClose={handleClose} />
      <ScheduleCalls show={show2} handleClose={handleClose2} />
    </>
  );
};

export default Navigation;
