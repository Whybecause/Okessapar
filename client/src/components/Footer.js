import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavIconsThumbnail from "./Tools/NavIconsThumbnail";

function Footer() {
  return (
    <Container fluid className="nav-bg nav-border" id="footer">
      <Row>
        <Col className="dfjccaicfdrjcr">
          <NavIconsThumbnail
            href="https://www.facebook.com/okessapar/"
            className="cursor fa fa-facebook"
          />
          <NavIconsThumbnail
            href="https://www.instagram.com/okessapar/?hl=fr"
            className="cursor fa fa-instagram"
          />
          <NavIconsThumbnail
            href="https://www.youtube.com/channel/UCjeEtfJO2NhwegNFxcvb7bw"
            className="cursor fa fa-youtube"
          />
          <NavIconsThumbnail
            href="https://open.spotify.com/artist/1n8P1ZPMaY61KWcfTG7l1Z?si=mIZm0hiFSni2UVsQA60mwg"
            className="cursor fa fa-spotify"
          />
          <NavIconsThumbnail
            href="https://okessapar.bandcamp.com/releases"
            className="cursor fa fa-bandcamp"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
