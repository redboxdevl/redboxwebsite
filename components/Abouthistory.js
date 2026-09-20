import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Abouthistory = () => {
  return (
    <>
      <div className="Abouthistory py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="fs-3">History</h3>
              <p className="text-white">
                REDBOX has grown to become of the most prominent real estate
                marketing companies. Take a look at our journey!
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2017</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>Founded as a Real Estate Marketing Firm.</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2018</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>Launched YouTube Channel. </li>
                    <li>Achieved 50K Daily Viewership </li>
                    <li>Started Project Marketing/ Media Partnership</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2019</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>Started Project Sales</li>
                    <li>Collaborated with UAE & Turkey Developers </li>
                    <li>Launched First Ever Builder Project </li>
                    <li>REDBOX First Event of Builder Project </li>
                    <li> REDBOX Initiated Real Estate Courses </li>
                    <li>
                      {" "}
                      Successfully Done 1st International Property Expo (Media
                      Partners)
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2020</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>Opened Office in Bahria Town Karachi. </li>
                    <li>
                      Successfuly Done 2nd International Property Expo for real
                      estate in karachi (Media Partners)
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2021</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>
                      Moved Main Office to Gulshan e Iqbal (Bigger & Better){" "}
                    </li>
                    <li>
                      Launched Our Own Project in Bahria Town Karachi "Redsim
                      Hills"
                    </li>
                    <li>
                      Launched our own CRM software with the latest technology.
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2022</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>
                      Succesfully Done Two - Property Expos (Media Partners)
                    </li>
                    <li>
                      Launched our Own Project of Farm Houses "Al Barsha
                      Farmhouses"
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="history-item">
                <h3 className="fs-3 pb-2">2023</h3>
                <div class="description">
                  <ul className="m-0 ps-md-0 d-flex flex-column gap-2">
                    <li>
                      Succesfully Executed Heavy sales of Projects like Pearl
                      Villas in Surjani Town
                    </li>
                    <li>Gulshan e Jiwan in Scheme 45 in a dead market.</li>
                    <li>Executed Commander Property Expo as Media Partners</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Abouthistory;
