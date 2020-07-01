import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LyricsThumbnail from "./Lyrics.thumbnail";

import ElleText from "./Lyrics-text/ElleText";
import AuFootText from "./Lyrics-text/AuFootText";
import BonjourEnfanceText from "./Lyrics-text/BonjourEnfanceText";
import CancerText from "./Lyrics-text/CancerText";
import LeVieuxText from "./Lyrics-text/LeVieuxText";
import MaterniteText from "./Lyrics-text/MaterniteText";
import MindsoulText from "./Lyrics-text/MindsoulText";
import NosDefautsText from "./Lyrics-text/NosDefautsText";
import PoemeText from "./Lyrics-text/PoemeText";
import TFSText from "./Lyrics-text/TFSText";

function Lyrics() {
  return (
    <Container id="lyrics">

      <hr />
      <Row className="resp-m-top">
        <Col lg={12} className="dfjccaicfdrjcc resp-m-bott p-bot-1">
          <h1>Lyrics</h1>
        </Col>
      </Row>
        <Row className="lyrics-container">
          <LyricsThumbnail title="Elle" textLyrics={ElleText()} />
          <LyricsThumbnail title="Mindsoul" textLyrics={MindsoulText()} />
          <LyricsThumbnail title="Cancer" textLyrics={CancerText()} />
          <LyricsThumbnail title="TFS" textLyrics={TFSText()} />
          <LyricsThumbnail title="Poème" textLyrics={PoemeText()} />
          <LyricsThumbnail title="Bonjour Enfance" textLyrics={BonjourEnfanceText()}/>
          <LyricsThumbnail title="Nos Défauts" textLyrics={NosDefautsText()} />
          <LyricsThumbnail title="Le Vieux" textLyrics={LeVieuxText()} />
          <LyricsThumbnail title="Maternité" textLyrics={MaterniteText()} />
          <LyricsThumbnail title="Au Foot" textLyrics={AuFootText()} />
        </Row>
    </Container>
  );
}

export default Lyrics;
