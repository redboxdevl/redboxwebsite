import Careerinfo from "@/components/Careerinfo";
import Careersafe from "@/components/Careersafe";
import Careersecond from "@/components/Careersecond";
import Careertabs from "@/components/Careertabs";
import CareerVideo from "@/components/CareerVideo";
import React from "react";

export const metadata = {
  title: "Apply Now: Careers at REDBOX Real Estate",
  description:
    "Join the dynamic team at REDBOX Real Estate! Explore exciting career opportunities and apply now to be part of our growing company.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/career",
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
      <CareerVideo />
      <Careerinfo />
      <Careertabs />
      <Careersafe />
      <Careersecond />
    </>
  );
};

export default page;
