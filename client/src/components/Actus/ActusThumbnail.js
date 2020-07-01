import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaBandcamp } from "react-icons/fa";

function ActusThumbnail(props) {
  return (
    <Row className="p-top-3 m-bot-5">
      <Col xs={4}>
        <img src={props.image} alt="Album" className="border-20" />
      </Col>
      <Col xs={8}>
        <div className="dffdc h-100">
          <p>{props.actu}</p>
          <div className="dfjccaicfdrjcr">
            <a className={props.displayYt} href={props.youtube}>
              <FaYoutube size={30} className="icon-actu" />
            </a>
            <a className={props.displaySpotify} href={props.spotify}>
              <FaSpotify size={30} className="icon-actu" />
            </a>
            <a className={props.displayBc} href={props.bandcamp}>
              <FaBandcamp size={30} className="icon-actu" />
            </a>
          </div>
        <div className="m-top-3">
          <iframe
            title={props.lecteurTitle}
            src={props.lecteurSrc}
            width={props.lecteurWidth}
            height={props.leecteurHeight}
            frameBorder="20"
            allowtransparency="true"
            allow="encrypted-media"
            ></iframe>
        </div>
            </div>
      </Col>
      {/* <Col xs={8} className="dfaicjcc">
          <p>{props.actu}</p>
        </Col>
        <Col xs={4} className="dfjccaicfdrjcr">
          <a className={props.displayYt} href={props.youtube}><FaYoutube size={30} className="icon-actu"/></a>
          <a className={props.displaySpotify} href={props.spotify}><FaSpotify size={30} className="icon-actu"/></a>
          <a className={props.displayBc} href={props.bandcamp}><FaBandcamp size={30} className="icon-actu"/></a>
        </Col>
        <Col xs={4}>
          <img src={props.image} alt="Album" className="border-20" />
        </Col>
        <Col xs={8} className="dfaicjcc ">
          <iframe
            title={props.lecteurTitle}
            src={props.lecteurSrc}
            width={props.lecteurWidth}
            height={props.leecteurHeight}
            frameBorder="20"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </Col> */}
    </Row>
  );
}
export default ActusThumbnail;
