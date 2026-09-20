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
} from "./bahriatowncontent";

export const metadata = {
  title: "Bahria Town Karachi – Luxury Living & Investment Opportunities",
  description:
    "Discover Bahria Town Karachi, a secure gated community with modern homes, top amenities, and high-return investment opportunities. Live the lifestyle you deserve!",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/bahria-town-karachi",
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
