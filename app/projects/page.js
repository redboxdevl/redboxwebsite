import Breadcrumbs from "@/components/Breadcrumbs";
import Projectfilters from "@/components/Projectfilters";
import Projectsdata from "@/components/Projectsdata";
import React from "react";
// import { projectdata } from "./projectdata";

export const metadata = {
  title: "Projects",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/projects",
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
      <Breadcrumbs title="Projects" para="Discover your dream home" />
      <div className="projectBg">
        <Projectfilters />
      </div>
    </>
  );
};

export default page;
