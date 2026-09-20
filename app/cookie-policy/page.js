import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Cookie Policy",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/cookie-policy",
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
      <Breadcrumbs title="Cookie Policy" para="" />
      <div className="privacyPolicy py-5">
        <Container>
          <Row>
            <Col lg={12}>
              <h5>What are Cookies?</h5>
              <p>
                Cookies are small files stored on your device when you visit a
                website. These files contain data that help the website
                recognize your device and remember your preferences or actions
                over time. Cookies placed by REDBOX are harmless and are
                primarily used to enhance your experience while navigating our
                website.
              </p>
              <h5>When and Why Does REDBOX Use Cookies?</h5>
              <p>
                REDBOX places cookies on any browser that visits our website.
                Cookies are used to collect data that helps us improve our
                website, monitor its performance, and understand user behavior,
                including how users navigate through the pages and interact with
                our content. This policy outlines the cookies we use and their
                purposes. You may opt-out of using cookies on your device by
                adjusting your browser settings.
              </p>
              <h3>What Cookies Does REDBOX Use?</h3>
              <h6>Necessary Cookies</h6>
              <p>
                These cookies are essential for the proper functioning of our
                website. They enable basic features such as page navigation and
                access to secure areas. Without these cookies, certain parts of
                the website may not work as intended.
              </p>
              <h5>Performance Cookies</h5>
              <p>
                We use analytics software like Google Analytics to collect
                anonymous data about how our website is used. This software
                provides aggregated statistics such as the number of visitors,
                page views, and more. REDBOX supplements this data with its own
                analytics to better understand user behavior and optimize the
                website accordingly.
              </p>
              <h5>Advertising Cookies</h5>
              <p>
                REDBOX may use advertising cookies, including Google’s
                DoubleClick cookies, to deliver relevant ads to you. These
                cookies track your browsing habits on our site and across the
                web to serve ads tailored to your interests. However, they do
                not track any personally identifiable information.
              </p>
              <h5>Third-Party Cookies</h5>
              <p>
                Certain features on our website may involve third-party cookies,
                such as those placed by analytics providers or service partners.
                These cookies allow third parties to collect data about your
                interactions with our site, although they do not collect
                personal information. You can control the use of these cookies
                by visiting the relevant third-party sites.
              </p>
              <h5>Controlling Cookies</h5>
              <p>
                You have the option to control the use of cookies through your
                browser settings. Each browser provides instructions on how to
                manage cookies:
              </p>
              <ul>
                <li>Chrome</li>
                <li>Firefox</li>
                <li>Opera</li>
                <li>Internet Explorer</li>
                <li>Safari</li>
                <li>Edge</li>
              </ul>
              <p>
                While REDBOX makes every effort to honor your cookie
                preferences, there may be instances where certain cookies are
                not covered by these settings. For more control over cookies,
                consider adjusting your browser settings accordingly.
              </p>
              <h5>How Are Cookies Used for Advertising?</h5>
              <p>
                Cookies, along with other tracking technologies like beacons and
                tags, help REDBOX deliver relevant advertisements to you. They
                allow us to conduct aggregated audits, research, and reporting
                for advertisers, and help us understand and improve our
                services. Please note that third-party ad networks may have
                access to these cookies when serving ads on our site, and may
                set or edit their own cookies based on your browsing behavior.
              </p>
              <h5>Local Storage</h5>
              <p>
                In addition to cookies, REDBOX may use local storage to enhance
                your experience by saving information on your device. This
                allows us to remember your preferences, such as previous
                actions, to streamline your future interactions with the site.
                All local storage is persistent with no expiration date.
              </p>
              <h5>Email and SMS Targeting</h5>
              <p>
                REDBOX may use your contact information, such as your email or
                phone number, to send you updates about our projects, services,
                or offers that we believe may be of interest to you. If you
                prefer not to receive such communications, please contact us at
                info@redbox.estate.
              </p>
              <h5>AdWords Retargeting</h5>
              <p>
                REDBOX uses Google AdWords remarketing services to advertise to
                previous visitors on third-party websites. These advertisements
                are shown based on past visits to our website and use cookies to
                ensure that the ads are relevant. No personal information is
                collected during this process. You can opt out of AdWords
                remarketing by visiting the AdWords Remarketing Opt-Out Page.
              </p>
              <h4>Contact Us</h4>
              <p>
                If you have any questions about our Cookies Policy, how cookies
                are used, or any concerns about your interactions with our
                website, feel free to contact us at:
              </p>
              <p>Email: info@redbox.estate</p>
              <p>
                Office Address: Office No. 304, Al Amin Tower, Midway Commercial
                B, Bahria Town Karachi, Pakistan.
              </p>
              <p>
                You can change or withdraw your consent to our use of cookies at
                any time by adjusting your browser settings.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
