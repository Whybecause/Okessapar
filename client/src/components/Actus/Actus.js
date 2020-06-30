import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaBandcamp } from "react-icons/fa";
import ActusThumbnail from "./ActusThumbnail";

import aya from "../../assets/aya.jpg";
import album from "../../assets/photo0-min.jpg";

function Actus() {
  return (
    <Container className="h-page-min p-top-8vh" id="actus">
      <div className="dfaicjcc">
        <h1>Les Actus</h1>
      </div>
      <Dropdown.Divider />
      <ActusThumbnail
        actu="Single Aya dispo"
        displayYt="display-none"
        spotify="https://open.spotify.com/album/5KKlYENl1fi4veHuVJikXS?si=0SXjv_tWSx2nUA85TkM1-g"
        displayBc="display-none"
        image={aya}
        lecteurTitle="Spotify"
        lecteurSrc="https://open.spotify.com/embed/album/5KKlYENl1fi4veHuVJikXS"
        lecteurWidth="100%"
        lecteurHeight="100%"
      />
      <Dropdown.Divider />

      <ActusThumbnail
        actu="Album Ok Ca Part dispo sur toutes les plateformes"
        youtube="https://www.youtube.com/watch?v=ZMmYKPD_RlI&list=PL4fApzfSmi_wST_nPhKtzGDEPySChoMiThttps://www.youtube.com/watch?v=ZMmYKPD_RlI&list=PL4fApzfSmi_wST_nPhKtzGDEPySChoMiT"
        spotify="https://open.spotify.com/album/5GY8CD4X5WK2Ct7MItdRUz?si=dwiyxzc-Rsi5AZDPFSau2Q"
        bandcamp="https://okessapar.bandcamp.com/releaseshttps://okessapar.bandcamp.com/releases"
        image={album}
        lecteurTitle="Spotify"
        lecteurSrc="https://open.spotify.com/embed/album/5GY8CD4X5WK2Ct7MItdRUz"
        lecteurWidth="100%"
        lecteurHeight="100%"
      />

      <Dropdown.Divider />
    </Container>
  );
}

export default Actus;
