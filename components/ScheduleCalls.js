"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const ScheduleCalls = ({ show, handleClose }) => {
  const { push } = useRouter();

  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [Emailaddress, setEmailaddress] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [ScheduleDate, setScheduleDate] = useState("");
  const [ScheduleTime, setScheduleTime] = useState("");

  const querySubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("Firstname", Firstname);
    formData.append("Lastname", Lastname);
    formData.append("Emailaddress", Emailaddress);
    formData.append("Phoneno", Phoneno);
    formData.append("ScheduleDate", ScheduleDate);
    formData.append("ScheduleTime", ScheduleTime);

    const requestOptions = {
      method: "POST",
      body: formData,
    };

    fetch(`https://redbox.estate/api/scheduleForm.php`, requestOptions)
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
          <Modal.Title>SCHEDULE A CALL</Modal.Title>
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
                    name="Firstname"
                    className="form-control"
                    placeholder="Enter Your First Name"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={Firstname}
                    required
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="form-group">
                  <input
                    type="text"
                    name="Lastname"
                    className="form-control"
                    placeholder="Enter Your Last Name"
                    onChange={(e) => setLastname(e.target.value)}
                    value={Lastname}
                    required
                  />
                </div>
              </Col>
              <Col lg={6}>
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
              <Col lg={6}>
                <div className="form-group">
                  <input
                    type="date"
                    name="ScheduleDate"
                    className="form-control"
                    onChange={(e) => setScheduleDate(e.target.value)}
                    value={ScheduleDate}
                    required
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div className="form-group">
                  <input
                    type="time"
                    name="ScheduleTime"
                    className="form-control"
                    onChange={(e) => setScheduleTime(e.target.value)}
                    value={ScheduleTime}
                    required
                  />
                </div>
              </Col>
              <Col lg={12}>
                <div class="form-group checkBox">
                  <input type="checkbox" id="css" />
                  <label for="css" class="lblText ">
                    I’ve read and agree to the Privacy Policy
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default ScheduleCalls;
