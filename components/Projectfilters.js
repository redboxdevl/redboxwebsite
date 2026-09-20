"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Projectsdata from "./Projectsdata";
import { projectdata } from "@/app/projects/projectdata";

const Projectfilters = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const [Search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(projectdata); // Set initial filtered data to full dataset

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [showMe, setShowMe] = useState(false);
  const toggle = () => {
    setShowMe(!showMe);
  };

  const projectSearch = (e) => {
    e.preventDefault();
    let filtered = "";
    if (Search) {
      filtered = projectdata.filter((item) =>
        item.heading.toLowerCase().includes(Search.toLowerCase())
      );
    } else {
      filtered = projectdata;
    }
    setFilteredData(filtered);
  };

  return (
    <>
      <div className="Projectfilters position-relative">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="searchingBox py-md-5 py-4 pb-3 px-md-5 px-3">
                <form onSubmit={projectSearch}>
                  <Row>
                    <Col lg={10}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="search"
                          className="form-control searchinput"
                          placeholder="Search Projects...."
                          onChange={(e) => setSearch(e.target.value)}
                          value={Search}
                        />
                      </div>
                      {/* <Row className={`pt-md-3 ${showMe ? "d-flex" : "d-none"}`}>
                      <Col lg={3} className="pe-md-1">
                        <div className="form-group">
                          <select
                            name=""
                            id=""
                            className="form-control text-white"
                          >
                            <option value="">Project Type</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={3} className="ps-md-1 pe-md-1">
                        <div className="form-group">
                          <select
                            name=""
                            id=""
                            className="form-control text-white"
                          >
                            <option value="">All Countries</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={3} className="ps-md-1 pe-md-1">
                        <div className="form-group">
                          <select
                            name=""
                            id=""
                            className="form-control text-white"
                          >
                            <option value="">All Cities</option>
                          </select>
                        </div>
                      </Col>
                      <Col lg={3} className="ps-md-1">
                        <div className="form-group">
                          <select
                            name=""
                            id=""
                            className="form-control text-white"
                          >
                            <option value="">All Areas</option>
                          </select>
                        </div>
                      </Col>
                    </Row> */}
                    </Col>
                    <Col lg={2} className="pe-md-0 ps-md-0">
                      <div className="form-group">
                        <button
                          className="pe-4 d-flex justify-content-between align-items-center fw-normal"
                          type="submit"
                        >
                          Search <FaLongArrowAltRight size={20} fill="#000" />
                        </button>
                      </div>
                    </Col>
                    <Col lg={12}>
                      {/* <Link
                      href="javascript:;"
                      onClick={toggle}
                      className="text-white text-decoration-none fw-bold d-flex align-items-center"
                    >
                      {showMe ? "LESS OPTIONS" : "MORE OPTIONS"}
                      {showMe ? (
                        <MdOutlineKeyboardArrowUp size={30} />
                      ) : (
                        <MdOutlineKeyboardArrowDown size={30} />
                      )}
                    </Link> */}
                    </Col>
                  </Row>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Projectsdata projectdata={filteredData} />
    </>
  );
};

export default Projectfilters;
