import React, { useState } from "react";
import { motion } from "framer-motion";
import { Col, Modal } from "react-bootstrap";

function LyricsThumbnail(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col lg={4} xs={6} className="p-bot-1 p-top-1">
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="c-btn"
          onClick={handleShow}
        >
          {props.title}
        </motion.button>
      </Col>
      <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>{props.title}</Modal.Header>
        <Modal.Body >
          <p className="p-lyrics">{props.textLyrics}</p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LyricsThumbnail;
