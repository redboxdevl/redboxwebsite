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
} from "./redsimhillscontent";

export const metadata = {
  title:
    "Private & Luxurious Living at Redsim Hills Apartments, Bahria Town Karachi",
  description:
    "Discover 1- and 2-bed fully furnished apartments at Redsim Hills, Bahria Town Karachi. Enjoy breathtaking hill views, modern amenities, and a luxurious private lifestyle.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/redsim-hills",
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
