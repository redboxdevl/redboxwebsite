import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Privacy Policy",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/privacy-policy",
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
      <Breadcrumbs title="Privacy Policy" para="" />
      <div className="privacyPolicy py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <p>
                This privacy policy ("Privacy Policy") explains how REDBOX ("we"
                or "us") collects, uses, shares, and retains personal
                information provided to us or collected from you when you use
                the REDBOX website at www.redbox.estate (the "Sites"), mobile
                applications, or communicate with our customer service
                representatives.
              </p>
              <p>
                Please note that if you disagree with any part of this Privacy
                Policy, you should not use the Sites, mobile applications, or
                provide personal information to us in connection with REDBOX’s
                products or services.
              </p>
              <h3>Table of Contents</h3>
              <ul>
                <li>Collection of Personal Information</li>
                <li>Marketing Communication</li>
                <li>Use, Sharing, and Retention of Personal Information</li>
                <li>
                  How to Contact REDBOX and Modify Your Information or
                  Preferences
                </li>
                <li>Modifications to This Privacy Policy</li>
                <li>Questions, Concerns, or Complaints</li>
              </ul>
              <h3>Collection of Personal Information</h3>
              <h5>Information You Directly and Voluntarily Provide to Us</h5>
              <p>
                Enquiry: If you inquire about our services or properties or
                register as a user on the Sites, we will collect certain
                personal information from you. This includes your first and last
                name, email address, telephone number, and business or home
                address.
              </p>
              <p>
                Events: If you register for any REDBOX event, we will use the
                information in your account to provide you with relevant details
                and services. For non-registered users, we will collect your
                name, email address, business or home address, and
                business-related information.
              </p>
              <p>
                Communications with REDBOX: We collect any information you
                provide when you communicate with us via email, phone, postal
                mail, or other forms of communication. This information is used
                to respond to your inquiries, provide updates on events, or
                handle complaints and service requests.
              </p>
              <h5>Information We Automatically Collect</h5>
              <p>
                We automatically collect certain data when you visit the Sites,
                such as your IP address, browser type and version, operating
                system, pages visited, and time spent on the site. We may also
                use cookies and other tracking technologies to enhance your user
                experience.
              </p>
              <p>
                If you access the Sites via a mobile device, we may collect your
                location information, subject to your device's settings.
              </p>
              <h4>Information You Provide to Payment Processors</h4>
              <p>
                All payments to REDBOX are processed by third-party services.
                REDBOX does not have access to payment information collected by
                these third-party processors unless you provide such information
                directly.
              </p>
              <h5>Marketing Communications</h5>
              <p>
                We may use your data to send you marketing communications about
                REDBOX services, events, and promotions. If you prefer not to
                receive marketing communications, you may opt out by following
                the instructions provided in each email or by contacting us at
                info@redbox.estate.
              </p>
              <p>Use, Sharing, and Retention of Personal Information</p>
              <h5>How We Use Your Information</h5>
              <p>We use your personal information to:</p>
              <ul>
                <li>Create and maintain your account.</li>
                <li>Improve our services and operations.</li>
                <li>Respond to inquiries and provide support.</li>
                <li>Send you promotional information and updates.</li>
                <li>Protect against fraudulent activities.</li>
              </ul>
              <h6>Data Sharing</h6>
              <p>
                We may share your personal information with trusted third-party
                vendors who provide services on our behalf, such as email
                marketing or customer support.
              </p>
              <p>
                We will not sell or rent your personal data to third parties.
              </p>
              <h5>Data Retention</h5>
              <p>
                REDBOX retains your personal information for as long as
                necessary to fulfill the purposes for which it was collected or
                as required by applicable law.
              </p>
              <p>
                How to Contact REDBOX and Modify Your Information or Preferences
              </p>
              <p>
                If you have any questions regarding this Privacy Policy or wish
                to modify the personal information we hold about you, please
                contact us at info@redbox.estate.
              </p>
              <h6>Modifications to This Privacy Policy</h6>
              <p>
                REDBOX reserves the right to modify this Privacy Policy at any
                time. Changes will be posted on the Sites, and we encourage you
                to review this Privacy Policy periodically. Continued use of the
                Sites after the policy is modified constitutes your agreement to
                the new terms.
              </p>
              <h6>Questions, Concerns, or Complaints</h6>
              <p>
                If you have any questions or concerns about this Privacy Policy,
                please contact us at info@redbox.estate.
              </p>
              <p>This Privacy Policy is effective as of March 1st 2018.</p>
              <p>
                This policy has been designed in line with REDBOX’s commitment
                to protecting your privacy and ensuring transparency in the
                collection and use of your personal information.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
