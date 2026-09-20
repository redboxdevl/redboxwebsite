import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Term & Conditions",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/term-and-condition",
  },
  // robots: {
  //   index: false,
  //   follow: false,
  //   nocache: true,
  // },
  verification: {
    google: "pelJy-IZuMzR0W9YPpllKkhFisKaainuQaALl4zODYE",
  },
};

const page = () => {
  return (
    <>
      <Breadcrumbs title="Terms & Conditions" para="" />
      <div className="privacyPolicy py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <p>
                Please read these terms and conditions carefully. These are the
                general terms and conditions governing your access to and use of
                REDBOX (the “Company”) website. If you do not agree with these
                terms, please refrain from using the website. By continuing to
                use the website, its content, or any services displayed on it,
                you agree to be bound by these terms and conditions.
              </p>
              <h5>Acceptance</h5>
              <p>
                By using the website (which includes all content displayed on
                screens, web links, emails, services, and any information,
                including subsequent changes and updates [‘content’]), you fully
                accept these terms and conditions. Your eligibility for the
                products and services offered on the website is subject to
                REDBOX’s determination and acceptance. Furthermore, you agree
                that your use of the website shall not:
              </p>
              <h3>Violate any applicable laws</h3>
              <p>
                Harm the public image of the website and will only be used for
                defined, permitted, and productive purposes
              </p>
              <p>
                Represent fraudulent business activities; any decisions made
                based on the content will be at your own risk
              </p>
              <h6>Copyright © REDBOX. All Rights Reserved.</h6>
              <p>
                All rights, including copyright, in the pages, screens,
                information, and materials displayed on this website are owned
                by REDBOX, unless otherwise stated. Reuse of any content is
                strictly prohibited unless specifically authorized by REDBOX.
              </p>
              <h5>Trademarks</h5>
              <p>
                REDBOX, its subsidiaries, affiliates, contractors, and/or
                participating corporations, are the owners of the trade and
                service marks displayed on this website, and all rights are
                reserved concerning these trade and service marks.
              </p>
              <h5>No Warranty</h5>
              <p>
                The Company does not warrant the accuracy, completeness,
                correctness, or suitability of the content, services, or any
                other materials available on the website. No warranties of any
                kind are provided, whether express, implied, or statutory,
                including but not limited to warranties of non-infringement of
                third-party rights, security, accuracy, and safety.
              </p>
              <h5>Limitation of Liability</h5>
              <p>
                REDBOX and/or any of its affiliates will not be liable for any
                errors, omissions, updates, or safety features built into the
                website (including loss or damage to personal data or
                information, or any other form of loss whether direct, indirect,
                foreseeable, or unforeseeable). REDBOX will not be held
                responsible for any incidental, consequential, or direct damages
                arising from the use of the website.
              </p>
              <p>
                Content on the website has not been investigated or verified and
                is not continuously monitored. The Company reserves the right to
                disclose information as required by applicable law or to remove
                or edit content at its sole discretion.
              </p>
              <h5>Submission</h5>
              <p>
                Any information submitted to REDBOX through this website shall
                be deemed the property of REDBOX and may be used for any
                purpose. REDBOX shall not be bound by any confidentiality or
                privacy obligations regarding such information, except as
                required by law or as specifically agreed by REDBOX.
              </p>
              <h6>Variations</h6>
              <p>
                These terms and conditions are subject to change at any time
                without notice. Continued use of the website after any
                modifications implies acceptance of the updated terms.
              </p>
              <h6>Governing Laws and Jurisdiction</h6>
              <p>
                Your use of the REDBOX website, its content, services, and any
                information or material posted or made available through the
                website shall be governed by the laws of Pakistan, and you agree
                to submit to the exclusive jurisdiction of the courts in
                Karachi, Pakistan.
              </p>
              <h6>Disclaimer</h6>
              <p>
                No representations or warranties of any kind are given, express
                or implied, for the accuracy, completeness, fitness for purpose,
                or non-infringement of any content, information, or material
                posted or available on the website. Any tangible or intangible
                harm/damage, including incidental or consequential damage
                resulting from accessing the website or breach of these terms,
                is entirely at the user’s risk.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
