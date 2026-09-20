"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosCall, IoIosMail, IoIosMailOpen } from "react-icons/io";
import Swal from "sweetalert2";

const Contactforminfo = () => {
  const { push } = useRouter();

  const [Name, setName] = useState("");
  const [Emailaddress, setEmailaddress] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Message, setMessage] = useState("");

  const querySubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Name", Name);
    formData.append("Emailaddress", Emailaddress);
    formData.append("Phoneno", Phoneno);
    formData.append("Message", Message);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(`https://redbox.estate/api/inquireForm.php`, requestOptions)
      .then((response) => response.json())
      .then((dataex) => {
        if (dataex.code == "200") {
          Swal.fire("Good job!", dataex.message, "success");
          push("/");
        } else {
          Swal.fire("Warning", dataex.message, "danger");
        }
      });
  };

  return (
    <>
      <div className="Contactforminfo py-5">
        <Container>
          <Row>
            <Col lg={8}>
              <h3 className="fs-2 fw-bold">Register your interest</h3>
              <h6 className="m-0">*All fields are required</h6>
              <form method="post" onSubmit={querySubmit} className="pt-4">
                <Row>
                  <Col lg={6}>
                    <div className="form-group">
                      <input
                        type="text"
                        name="Name"
                        className="form-control"
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={Name}
                        required
                      />
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="form-group">
                      <input
                        type="number"
                        name="Phoneno"
                        className="form-control"
                        placeholder="Enter Your Phone"
                        onChange={(e) => setPhoneno(e.target.value)}
                        value={Phoneno}
                        required
                      />
                    </div>
                  </Col>
                </Row>

                <div className="form-group">
                  <input
                    type="email"
                    name="Emailaddress"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    onChange={(e) => setEmailaddress(e.target.value)}
                    value={Emailaddress}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    id=""
                    rows={4}
                    cols={10}
                    className="form-control"
                    placeholder="Enter Message"
                    onChange={(e) => setMessage(e.target.value)}
                    value={Message}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </Col>
            <Col lg={4}>
              <div className="officeAddress pt-5 mt-5">
                <h4 className="fw-bold fs-3">Office Address</h4>
                <Row>
                  <Col lg={12}>
                    <p>
                      Al Amin Tower, 3rd Floor, Office No# 302, Midway
                      Commercial-B Bahria Town Karachi
                    </p>
                    <p className="m-0 pb-2">Karachi , Pakistan</p>
                    <Link
                      href="tel:+923111112266"
                      className="text-decoration-none text-dark d-flex align-items-center gap-2"
                    >
                      <IoIosCall size={23} />
                      03111112266
                    </Link>
                    <Link
                      href="mailto:info@redbox.estate"
                      className="text-decoration-none text-dark d-flex align-items-center gap-2 my-2"
                    >
                      <IoIosMailOpen size={23} />
                      info@redbox.estate
                    </Link>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contactforminfo;
