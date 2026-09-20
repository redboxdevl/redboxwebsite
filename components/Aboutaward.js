import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import awardImg from "../public/images/awardImg.jpg";
import Image from "next/image";

const Aboutaward = () => {
  return (
    <>
      <div className="Aboutaward py-5">
        <Container>
          <Row>
            <Col lg={7}>
              <h2>Awards</h2>
              <div class="description">
                <p>
                  Since the early days of DAMAC Properties, the organisation has
                  continually received recognition and accolades for its
                  contribution to the real estate development sector.
                </p>

                <p>
                  Having now received over 100 global awards and commendations,
                  for everything from high-rise architecture and interior design
                  to excellence in hospitality and international golf course
                  communities, DAMAC only goes from strength to strength.
                </p>

                <p>
                  <em>
                    <strong>2024</strong>
                  </em>
                </p>

                <ul type="disc">
                  <li>
                    Chairman named Executive of the Year at Big Project ME
                    Awards 2023
                  </li>
                  <li>
                    Hussain Sajwani, Chairman and Founder of DAMAC receives
                    Lifetime Achievement Award
                  </li>
                  <li>
                    DAMAC Tower Nine Elms London lauded by the Concrete Awards
                    2023 in England
                  </li>
                  <li>
                    Hussain Sajwani, Chairman and Founder of DAMAC Group was
                    conferred the esteemed Lifetime Achievement Award at the
                    11th Gulf Business Awards.
                  </li>
                  <li>
                    DAMAC Properties’ LOAMS, has won two prestigious awards at
                    the International Real Estate Community Management Summit
                    (IRECMS)
                  </li>
                </ul>

                <p>
                  <em>
                    <strong>2023</strong>
                  </em>
                </p>

                <ul type="disc">
                  <li>
                    Best Luxury High Rise Living for CAVALLI CASA TOWER - 2023
                    Luxury Lifestyle Awards
                  </li>
                  <li>
                    Leading Real Estate Developer of Luxury Properties in UAE
                    2023&nbsp;- World Business Outlook Awards 2023
                  </li>
                  <li>
                    Most Innovative Residential Community Developers – UAE 2023
                    by Global Business Outlook Awards Ceremony 2023
                  </li>
                  <li>
                    Developer of the Year Award at the 18th Global RLI (Retail
                    and Leisure International) Awards
                  </li>
                  <li>
                    ISO certification and WELL Health and Safety Certification
                    received
                  </li>
                  <li>
                    The Big Night Life Award 2023: Malibu Sky Lounge &amp; Bar -
                    Highly Recommended, Under Best Rooftop Venue
                  </li>
                  <li>
                    Paramount Hotel Midtown Wins Gold at the Chef Excellence
                    Awards 2023
                  </li>
                  <li>
                    LOAMS becomes Middle East Facility Management Association
                    (MEFMA) Corporate Member
                  </li>
                  <li>
                    Highly Commended for Excellence in FM Health &amp; Safety -
                    MEFMA 2023
                  </li>
                  <li>
                    Obtained ISO certifications (ISO - 9001, 45001, 14001, Mark
                    of Trust - Multi Certification, Mark of Trust - UKAS)
                  </li>
                  <li>Achieved WELL Health-Safety Rating</li>
                </ul>

                <p>
                  <strong>
                    <em>2022</em>
                  </strong>
                </p>

                <ul>
                  <li>
                    LOAMS- Real Estate Community Management Summit (IRECMS)-
                    Happiest Residential Community;
                  </li>
                  <li>
                    LOAMS- Real Estate Community Management Summit (IRECMS)-
                    Best Crisis Management;
                  </li>
                  <li>
                    Ali Sajwani, Managing Director at DAMAC – Family Business
                    Council Gulf – Next Generation Award;
                  </li>
                  <li>
                    DAMAC Properties - Construction Week Middle East- Top 50
                    developers of the GCC;
                  </li>
                  <li>
                    Hussain Sajwani – Construction Week Middle East – Power 100
                    List;
                  </li>
                  <li>
                    Paramount Hotel Dubai- Hotel and Catering News Middle East –
                    Best Off Beat Night Venue for - Flashback Speakeasy;
                  </li>
                  <li>
                    Paramount Hotel Dubai- Hotel and Catering News Middle East –
                    Best Night Life Awards 2022 - Flashback Speakeasy;
                  </li>
                  <li>
                    Hussain Sajwani- Arabian Business- Most Influential Arabs
                    2022;
                  </li>
                  <li>
                    LOAMS- Dubai Land Department- Outstanding initiatives in
                    managing its communities and buildings;
                  </li>
                  <li>
                    Hussain Sajwani - CEO Middle East- Best Leaders list; and
                  </li>
                  <li>
                    Trump International Golf Club in DAMAC Hills – Time Out -
                    Best golf courses in Dubai.
                  </li>
                </ul>

                <p>
                  <strong>
                    <em>2021</em>
                  </strong>
                </p>

                <ul>
                  <li>LOAMS-(IRECMS)-Best Crisis Management Initiative;</li>
                  <li>
                    Hussain Sajwani – Gulf Business Awards- Real Estate Business
                    Leader of The Year;
                  </li>
                  <li>
                    DAMAC Living App - GEC Awards 2021 - Best transformative
                    project in real estate for its one-stop-shop community app
                    implementation;
                  </li>
                  <li>
                    DAMAC Living APP- CXO Insight - Best transformative project
                    in real estate for its one-stop-shop community app
                    implementation;
                  </li>
                  <li>
                    DAMAC Properties- Linkedin - Best Acquisition Team UAE
                    Finalist;
                  </li>
                  <li>
                    Trump International Golf Club - 2021 Travelers' Choice award
                    winner - Golfing Experiences;
                  </li>
                  <li>
                    Hussain Sajwani – Forbes- World's Billionaires List of 2021;
                    and
                  </li>
                  <li>
                    Paramount Hotel Dubai - Leaders in Hospitality Awards 2021
                    UAE- Lobby of the Year.
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={5}>
              <Image src={awardImg} alt="awardImg" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Aboutaward;
