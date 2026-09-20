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
} from "./paragoncontent";

export const metadata = {
  title:
    "Luxurious Studio & Two-Bed Apartments at Paragon Towers, Bahria Town Karachi",
  description:
    "Experience upscale living at Paragon Towers with modern amenities, lush greenery, and exclusive facilities. Secure and serene apartments for a sophisticated lifestyle.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/paragon-tower",
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
