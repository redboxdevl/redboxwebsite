import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import geethanjali from "../public/images/geethanjali.jpg";
import anasbhai from "../public/images/KamranRedbox.jpg";
import Harisbhai from "../public/images/Harisbhai.jpg";
import DAMACemployee from "../public/images/teamPic.jpg";

const Workingatsec = () => {
  return (
    <>
      <div className="Workingatsec py-5">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="workingatinner">
                <h3>Working at REDBOX</h3>
                <hr className="mt-5" />
                <Link href="/career">Know More</Link>
              </div>
              <div className="photoName pt-5 mt-4">
                <Image src={Harisbhai} alt="geethanjali" />
                <h3>HARIS ASLAM</h3>
              </div>
              <div className="quoteContainer">
                <Image
                  src="data:image/png;base64,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"
                  width={40}
                  height={40}
                  style={{ mixBlendMode: "difference" }}
                />
                <div className="quoteText">
                  <p class="quote-title m-0">GROWTH BEYOND EXPECTATIONS</p>
                  <p class="quote-content">
                    "REDBOX has provided me with countless opportunities to
                    expand my skill set and grow both personally and
                    professionally to become the best among karachi real estate
                    agents. The team is supportive, and the environment pushes
                    me to excel every day”
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="photoName">
                <Image src={anasbhai} alt="anasbhai" />
                <h3>MUHAMMAD KAMRAN</h3>
              </div>
              <div className="quoteContainer">
                <Image
                  src="data:image/png;base64,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"
                  width={40}
                  height={40}
                  style={{ mixBlendMode: "difference" }}
                />
                <div className="quoteText">
                  <p class="quote-title m-0">DRIVEN BY INNOVATION</p>
                  <p class="quote-content">
                    "My time at REDBOX has been a dynamic experience filled with
                    innovation and creativity being established as the best real
                    estate company in karachi. The company's forward-thinking
                    approach and commitment to excellence have developed me”
                  </p>
                </div>
              </div>

              <Link href="/">
                <Image
                  src={DAMACemployee}
                  alt="DAMACemployee"
                  className="img-fluid"
                />
              </Link>
              <div className="lifeBottom">
                {/* <Image
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBaRXhpZgAATU0AKgAAAAgABQMBAAUAAAABAAAASgMDAAEAAAABAQAAAFEQAAEAAAABAQAAAFERAAQAAAABAAAAAFESAAQAAAABAAAAAAAAAAAAAYagAACxj//bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIABkAGwMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APh/Rda+781dbomt/d+avItF1vhfmr9LP+CVH7IPwf8A2o/2HPixrXxR1S38Hv4X1aE2Xio3CwSaWGt87W3HbMjMAPKIJYnCFWOaCj5f0bWdwHNbC3Csuc1xetyadoPi7UrLSNYTXtLtbmSK01Jbd7YX0QYhJfKk+dNwwdrcjOKvxaz+7X5qCT5R0TW/u/NXd6J8QNSTw7/Y41G+GktcC7NkJ2+zGbbt83y87d+3jdjOOM15Tof8NdZof8NTErqel6Jrf3fmro4ta/drzXA6H/DXQRf6tfpVAj//2Q=="
                  width={30}
                  height={30}
                /> */}
                {/* <p class="life-text">Words from our staff</p> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Workingatsec;
