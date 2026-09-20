"use client";
import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      cookieName="my_cookie_consent"
      style={{ background: "#eb2329", fontSize: "20px" }}
      buttonStyle={{ color: "#000", fontSize: "18px" }}
      contentStyle={{ fontSize: "18px" }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
