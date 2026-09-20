"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const TalkInformation = () => {
  const [Realtalks, setRealtalks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "do MMMM’ yyyy");
  };

  useEffect(() => {
    const fetchRealtalks = async () => {
      try {
        const response = await fetch("https://redbox.estate/realtalkapi.php");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setRealtalks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRealtalks();
  }, []);

  return (
    <>
      <div className="TalkInformation py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h3
                style={{
                  fontSize: "2.9721rem",
                  color: "#a8945d",
                  textAlign: "center",
                  fontWeight: "700",
                  fontStyle: "italic",
                }}
              >
                Explore Real Estate, Economy & Investment Insights on Our
                Podcasts
              </h3>
              {/* <p className="text-center m-0 py-2 fs-5">
                Presenting DBATE, an original podcast series by DAMAC
                Properties.
              </p> */}
              <p className="text-center m-0 py-0 pb-2 fs-5">
                Stay informed with our exclusive podcast covering Pakistan’s
                real estate market, economic trends, and investment
                opportunities. From in-depth discussions on commercial and
                residential properties to insights on Gwadar’s future, we bring
                you expert analysis and valuable knowledge. Whether you're a
                buyer, investor, or simply curious about the property market,
                our podcast offers educational content to help you make informed
                decisions.
              </p>
              <h4 className="text-center fw-bold fs-2 py-3">
                STAY TUNED FOR ALL THINGS REAL ESTATE!
              </h4>
            </Col>
          </Row>

          {Realtalks?.map((item, key) => {
            const isEven = key % 2 === 0;

            return (
              <Row
                key={key}
                className="align-items-center my-5"
                style={{
                  background: isEven ? "rgb(99,99,99)" : "rgb(168,148,93)",
                }}
              >
                {isEven ? (
                  <>
                    {/* Image Left */}
                    <Col lg={6} className="ps-md-0">
                      <Image
                        src={`https://redbox.estate/realtalks/${item.realtalks_thumbnail}`}
                        width={456}
                        height={380}
                        className="img-fluid w-100"
                      />
                    </Col>
                    <Col lg={6}>
                      <div className="Boxinf">
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.details }}
                        ></div>
                        {/* <h4 className="fs-1 fw-bold text-uppercase text-white">
                          ECONOMY UPDATES
                        </h4>
                        <p className="fs-5 text-white">
                          Stay updated with the latest trends in Pakistan’s real
                          estate and economy through our insightful podcast. We
                          cover everything from market fluctuations, property
                          investments, and Gwadar’s potential to commercial and
                          residential real estate opportunities. Gain expert
                          advice, industry insights, and deep discussions on how
                          economic changes impact property prices.
                        </p> */}
                        <Link
                          href={item?.video_url}
                          className="text-decoration-none d-flex gap-md-2 fs-5 align-items-center justify-content-center text-white fw-bold"
                        >
                          EPISODE 7{" "}
                          <Image
                            src="https://v.fastcdn.co/u/a43967b2/62880937-0-play-btn.svg"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                    </Col>
                  </>
                ) : (
                  <>
                    {/* Image Right */}
                    <Col lg={6} className="order-lg-2 ps-md-0">
                      <Image
                        src={`https://redbox.estate/realtalks/${item.realtalks_thumbnail}`}
                        width={456}
                        height={380}
                        className="img-fluid w-100"
                      />
                    </Col>
                    <Col lg={6} className="order-lg-1">
                      <div className="Boxinf">
                        <div
                          dangerouslySetInnerHTML={{ __html: item?.details }}
                        ></div>
                        <Link
                          href={item?.video_url}
                          className="text-decoration-none d-flex gap-md-2 fs-5 align-items-center justify-content-center text-white fw-bold"
                        >
                          EPISODE 7{" "}
                          <Image
                            src="https://v.fastcdn.co/u/a43967b2/62880937-0-play-btn.svg"
                            width={30}
                            height={30}
                          />
                        </Link>
                      </div>
                    </Col>
                  </>
                )}
              </Row>
            );
          })}
        </Container>
      </div>
    </>
  );
};

export default TalkInformation;
