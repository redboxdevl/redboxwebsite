import TalkInformation from "@/components/TalkInformation";
import TalksHeader from "@/components/TalksHeader";
import React from "react";

export const metadata = {
  title:
    "Real Estate Podcast – Market Insights, Investments & Property Education",
  description:
    "Tune into our real estate podcast for expert discussions on property investment, market trends, land disputes, Gwadar opportunities, commercial real estate, and real estate education.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/real-talks",
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
      <TalksHeader />
      <TalkInformation />
    </>
  );
};

export default page;
