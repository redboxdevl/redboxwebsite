import Breadcrumbs from "@/components/Breadcrumbs";
import Chairmanmessage from "@/components/Chairmanmessage";
import React from "react";

export const metadata = {
  title: "Founder’s Vision: REDBOX Real Estate Excellence",
  description:
    "Discover REDBOX's mission to redefine real estate with integrity and innovation. Syed Naveed Shah shares our commitment to building trust and exceptional service.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/chairman-message",
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
      <Breadcrumbs
        title="ABOUT REDBOX"
        para="Founder’s Message
"
      />
      <Chairmanmessage />
    </>
  );
};

export default page;
