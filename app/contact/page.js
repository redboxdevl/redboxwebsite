import Breadcrumbs from "@/components/Breadcrumbs";
import Contactforminfo from "@/components/Contactforminfo";
import React from "react";

export const metadata = {
  title: "Contact Us | Redbox Estate – Your Trusted Real Estate Partner",
  description:
    "Connect with Redbox Estate for expert advice and tailored solutions for all your real estate needs. We're here to guide you every step of the way.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/contact",
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
      <Breadcrumbs title="Contact Us" para="Stay in touch with us" />
      <Contactforminfo />
    </>
  );
};

export default page;
