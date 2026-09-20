import Image from "next/image";
import React from "react";

const TalksHeader = () => {
  return (
    <>
      <div className="TalksHeader">
        <Image
          src="/images/realtalkbanner.jpg"
          width={800}
          height={400}
          className="img-fluid w-100"
        />
      </div>
    </>
  );
};

export default TalksHeader;
