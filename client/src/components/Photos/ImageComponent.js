import React from "react";
import { Col } from "react-bootstrap";

const ImageComponent = (props) => {
  return (
    <Col className="dfaicjcc padding">
      <img src={props.image} alt={props.alt} />
    </Col>
      );
    }
    
    export default ImageComponent;
    
