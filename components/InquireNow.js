"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const InquireNow = ({ show, handleClose }) => {
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
      <Modal show={show} onHide={handleClose} centered className="InquireNow">
        <Modal.Header closeButton>
          <Modal.Title>Register your interest</Modal.Title>
        </Modal.Header>
        <form method="post" onSubmit={querySubmit}>
          <Modal.Body>
            <Row>
              <Col lg={12}>
                <p>*All fields are required</p>
              </Col>
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
              <Col lg={12}>
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
              </Col>
              <Col lg={12}>
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
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Get Quote
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default InquireNow;
