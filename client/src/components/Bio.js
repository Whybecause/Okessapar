import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
function Bio() {
  return (
    <Container className="m-top-3" id="bio">
      <Dropdown.Divider />
      <Row className="resp-m-top">
        <Col lg={6} className="dfjccaicfdrjcc resp-m-bott">
          <h1>Bio</h1>
        </Col>
        <Col lg={6}>
          Après une année à écumer les scènes de Paris et de Seine-et-Marne,
          mais aussi à enchaîner les festivals et les tremplins, ils décident de
          sortir en indépendant leur premier album. En novembre 2019, « Ok Ça
          Part » voit le jour.
        </Col>
        <Col lg={6}>
          Okessapar ce sont des récits et des moments de vies mis en musique.
          Soutenue par des textes français prenant aux tripes, inspirés de la
          vie quotidienne, leur musique se veut multi-générationnelle et
          accessible. Chacun y trouve son compte, que ce soit en étant touché
          par l’histoire racontée ou encore par la musicalité des compositions.
        </Col>
        <Col lg={6}>
          Composé de 10 titres, teintés de musique urbaine, de hip-rock ou
          encore de funk, ils portent un regard inquisiteur sur le monde et ces
          blessures.
        </Col>
      </Row>
    </Container>
  );
}

export default Bio;
