import React from "react";
import { Container } from "react-bootstrap";
import ActusThumbnail from "./ActusThumbnail";
import Carousel from "react-bootstrap/Carousel";
import aya from "../../assets/aya.jpg";
import album from "../../assets/photo0-min.jpg";
function Jumbo() {
  return (
    <Container fluid className="h-page p-top-12vh w-100" id="actus">
      <Carousel>
      <Carousel.Item>
      <div className="jumbo-img-bg h-90 dfaicjcc ">
          <div className="jumbo-content">
              Okessapar = 4 artisans du cross-over, mélangeant jazz/hip-hop/rock/funk sur des textes rappés et chantés
          </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="jumbo-img-bg h-90 dfaicjcc ">
        <div className="jumbo-content">
              <ActusThumbnail
                actu="Single Aya"
                displayYt="display-none"
                spotify="https://open.spotify.com/album/5KKlYENl1fi4veHuVJikXS?si=0SXjv_tWSx2nUA85TkM1-g"
                displayBc="display-none"
                image={aya}
                lecteurTitle="Spotify"
                lecteurSrc="https://open.spotify.com/embed/album/5KKlYENl1fi4veHuVJikXS"
                lecteurWidth="100%"
                lecteurHeight="100%"
                />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="jumbo-img-bg h-90 dfaicjcc ">
            <div className="jumbo-content">
              <ActusThumbnail
                actu="Album Ok Ca Part"
                youtube="https://www.youtube.com/watch?v=ZMmYKPD_RlI&list=PL4fApzfSmi_wST_nPhKtzGDEPySChoMiThttps://www.youtube.com/watch?v=ZMmYKPD_RlI&list=PL4fApzfSmi_wST_nPhKtzGDEPySChoMiT"
                spotify="https://open.spotify.com/album/5GY8CD4X5WK2Ct7MItdRUz?si=dwiyxzc-Rsi5AZDPFSau2Q"
                bandcamp="https://okessapar.bandcamp.com/releaseshttps://okessapar.bandcamp.com/releases"
                image={album}
                lecteurTitle="Spotify"
                lecteurSrc="https://open.spotify.com/embed/album/5GY8CD4X5WK2Ct7MItdRUz"
                lecteurWidth="100%"
                lecteurHeight="100%"
                />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Jumbo;
