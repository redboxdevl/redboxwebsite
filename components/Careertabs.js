"use client";
import Image from "next/image";
import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

const Careertabs = () => {
  return (
    <>
      <div className="Careertabs">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="flex-row gap-2 justify-content-between"
          >
            <Nav.Item>
              <Nav.Link eventKey="first">
                <Image src="/images/Sales.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Sales</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">
                <Image src="/images/Marketing.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Marketing</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                <Image src="/images/Content.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Content </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">
                <Image src="/images/Operations.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Operations</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">
                <Image src="/images/Finance.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Finance</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="sixth">
                <Image src="/images/HumanResource.png" width={80} height={80} />
                <span className="fs-5 fw-bold">Human Resource</span>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="first"></Tab.Pane>
            <Tab.Pane eventKey="second"></Tab.Pane>
            <Tab.Pane eventKey="third"></Tab.Pane>
            <Tab.Pane eventKey="fourth"></Tab.Pane>
            <Tab.Pane eventKey="fifth"></Tab.Pane>
            <Tab.Pane eventKey="sixth"></Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </>
  );
};

export default Careertabs;
