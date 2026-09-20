import Aminities from "@/components/Aminities";
import Detailsinfo from "@/components/Detailsinfo";
import GalleryDetails from "@/components/GalleryDetails";
import ProjectdetailsBread from "@/components/ProjectdetailsBread";
import React from "react";
import {
  Aminitiescontent,
  Detailsinfocontent,
  GalleryDetailscontent,
  mapLocationurl,
  Nearbycontent,
  projectdetailsbreadcontent,
} from "./dhacitycontent";

export const metadata = {
  title: "DHA City Karachi Offering Premium Residential Plots on Super Highway",
  description:
    "Explore DHA City Karachi for premium residential plots on Super Highway. A modern project with top amenities for a balanced, high-quality lifestyle. Ideal for families and investment.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/dha-city",
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

const page = ({ params }) => {
  return (
    <>
      <ProjectdetailsBread
        projectdetailsbreadcontent={projectdetailsbreadcontent}
      />
      <Detailsinfo Detailsinfocontent={Detailsinfocontent} />
      <GalleryDetails GalleryDetailscontent={GalleryDetailscontent} />
      <Aminities
        Aminitiescontent={Aminitiescontent}
        Nearbycontent={Nearbycontent}
        mapLocationurl={mapLocationurl}
      />
    </>
  );
};

export default page;
