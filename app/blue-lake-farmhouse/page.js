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
} from "./bluelakefarmcontent";

export const metadata = {
  title: "Blue Lake Farmhouses Offering 1 Acre Serenity in Gharo",
  description:
    "Discover Blue Lake Farmhouses by REDBOX in Gharo. Enjoy 1-acre retreats with modern amenities, ample space, and privacy. Perfect for living or investment.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/blue-lake-farmhouse",
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
