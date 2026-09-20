import Aroundbox from "@/components/Aroundbox";
import Brands from "@/components/Brands";
import Comunitybox from "@/components/Comunitybox";
import Comunitychildbox from "@/components/Comunitychildbox";
import Industrynews from "@/components/Industrynews";
import News from "@/components/News";
import Premiumcontent from "@/components/Premiumcontent";
import Sliderinfo from "@/components/Sliderinfo";

import {
  aroundboxcontent,
  blogcontent,
  comunityboxcontent,
  comunitychildboxcontent,
  newscontent,
  premiumcontent,
} from "./homecontent";
import Workingatsec from "@/components/Workingatsec";

export const metadata = {
  title: "Redbox - Pakistan's No 1 Real Estate Consultant",
  description:
    "Redbox Estate: Real Estate Property Dealers in Karachi Pakistan | Browse the Latest Properties Like Houses, Flats, Bungalows, Apartments, Lands, Plots, and Shops.",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/",
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
      <Sliderinfo />
      <Premiumcontent premiumcontent={premiumcontent} />
      <Comunitybox comunityboxcontent={comunityboxcontent} />
      <Comunitychildbox comunitychildboxcontent={comunitychildboxcontent} />
      <Aroundbox aroundboxcontent={aroundboxcontent} />
      <Brands />
      <News blogcontent={blogcontent} />
      <Industrynews newscontent={newscontent} />
      {/* <Workingatsec /> */}
    </>
  );
};

export default page;
