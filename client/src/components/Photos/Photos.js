import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ImageComponent from "./ImageComponent";

import photo0 from "../../assets/photo0-min.jpg";
import photo1 from "../../assets/photo1-min.jpg";
import photo2 from "../../assets/photo2-min.jpg";
import photo3 from "../../assets/photo3-min.jpg";
import photo4 from "../../assets/photo4-min.jpg";
import photo5 from "../../assets/photo5-min.jpg";
import photo6 from "../../assets/photo6-min.jpg";
import photo7 from "../../assets/photo7-min.jpg";
import photo8 from "../../assets/jumbo-min.jpg";

function Photos() {
  return (
    <Container className="p-top-8vh" id="photos">
      <Dropdown.Divider />
      <Row xs={2} className="resp-m-top">
        <Col lg={6} xs={12} className="dfjccaicfdrjcc resp-m-bott">
          <h1>Photos</h1>
        </Col>
        <ImageComponent alt="photo1" image={photo0} />
        <ImageComponent alt="photo2" image={photo1} />

        <ImageComponent alt="photo3" image={photo2} />
        <ImageComponent alt="photo7" image={photo7} />
        <ImageComponent alt="photo8" image={photo8} />
        <ImageComponent alt="photo6" image={photo5} />
        <ImageComponent alt="photo4" image={photo3} />
        <ImageComponent alt="photo5" image={photo4} />
        <ImageComponent alt="photo6" image={photo6} />
      </Row>
    </Container>
  );
}

export default Photos;
