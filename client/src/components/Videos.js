import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Videos() {
  return (
    <Container className=" p-top-3vh" id="videos">
        <hr />
      <Row className="resp-m-top">
      <Col lg={6} sm={12} className="dfjccaicfdrjcc resp-m-bott ">
          <h1>Vidéos</h1>
        </Col>
        <Col lg={6} sm={12}>
          {" "}
          <iframe
            title="F77(2ème)"
            className="w-100 resp-video-h "
            src="https://www.youtube.com/embed/0p7JFfHKCfc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col lg={6} sm={12}>
          {" "}
          <iframe
            title="F77 1ère"
            className="w-100 resp-video-h "
            src="https://www.youtube.com/embed/laubVaELGNI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
          <Col lg={6} sm={12}>
          {" "}
          <iframe
            title="Le Vieux"
            className="w-100 resp-video-h "
            src="https://www.youtube.com/embed/VQ1pvLh2ow4"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
        <Col lg={6} sm={12}>
          <iframe
            title="Poème"
            className="w-100 resp-video-h "
            src="https://www.youtube.com/embed/J5xo54_TRSU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
          <Col lg={6} sm={12}>
          <iframe
            title="Loze Your Sel"
            className="w-100 resp-video-h "
            src="https://www.youtube.com/embed/Lum4fxc64EA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Videos;
