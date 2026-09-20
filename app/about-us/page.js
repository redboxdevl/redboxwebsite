import Aboutaward from "@/components/Aboutaward";
import Aboutcontent from "@/components/Aboutcontent";
import Aboutcorporate from "@/components/Aboutcorporate";
import Abouthistory from "@/components/Abouthistory";
import AboutTeam from "@/components/AboutTeam";
import Breadcrumbs from "@/components/Breadcrumbs";
import Foundermessage from "@/components/Foundermessage";
import React from "react";

export const metadata = {
  title: "Redbox | Property Consultancy Firm | About Us",
  description:
    "RedBox is One of Pakistan’s Leading Real Estate Consultation Companies. Get in touch with our experts to get the best investment deals.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/about-us",
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
      <Breadcrumbs title="About REDBOX" para="Our story" />
      <Aboutcontent />
      <Foundermessage />
      <AboutTeam />
      <Abouthistory />
      {/* <Aboutaward /> */}
      <Aboutcorporate />
    </>
  );
};

export default page;
