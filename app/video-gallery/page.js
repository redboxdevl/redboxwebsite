import Breadcrumbs from "@/components/Breadcrumbs";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const metadata = {
  title: "Video Gallery",
  description: "",
  metadataBase: new URL("https://redbox.estate"),
  alternates: {
    canonical: "/video-gallery",
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
      <Breadcrumbs title="Video Gallery" para="" />
      <div className="videoGallery py-5">
        <Container>
          <Row>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/Dg-80A3l_yw?si=sc42l3GmxO_tuoQ9"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/TiqT-CJkiI8?si=jjT5SsMhYnE30Q6W"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/RTZYL_iBI9o?si=DtS-bE-9TSu9Y7qi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/-ZDT3IQqQRI?si=0p_BPRSqUI8z3O6J"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/k8hLu-Llsa8?si=jPGZhCnWtkeeD2X5"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/tETthm6QNFk?si=yDvdG8vwh1GSiKkd"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/GHaQZCPfkxA?si=h-7YnPgznBdBhVjm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/yOpsR26to90?si=03FX9X_R_3RVGUJE"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/bAHETRNFn3c?si=NLns1ow18ujKtWxn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/9G4JrOgiouI?si=cOMkpSFeg6gpIMEI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/xwO89xD2UKE?si=--haQPgROpu33euv"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
            <Col lg={4}>
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/RipUIu6N9_w?si=574wnK02MtwcE_nI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default page;
