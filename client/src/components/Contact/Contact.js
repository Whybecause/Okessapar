import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import ModalMessage from "./ModalMessage";

import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { motion } from "framer-motion";

function Contact() {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit } = useForm();
    let [responseData, setResponseData] = React.useState("");


      const onSubmit = (data, e) => {
        setLoading(true);
        axios
          .post("/api/contact", data)
          .then((response) => {
            setLoading(false);
            setResponseData(response.data.message);
            e.target.reset();

          })
          .catch((error) => {
            setLoading(false);
            setResponseData(error.response.data.error);
            console.log(error.response.data.error);
          });
      };
    return (
        <Container className="p-top-8vh" id='contact'>
        <Dropdown.Divider/>
            <div className=" dfjccaicfdrjcc form-bg form-border p-top-3 p-bot-3 m-top-1 m-bot-5">
          <form onSubmit={handleSubmit(onSubmit)} className=" w-80 ">
              <div>Contactez-nous</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nom"
                name="name"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Email"
                name="email"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                className="form-control"
                placeholder="Message"
                name="message"
                ref={register({ required: true })}
              />
            </div>
            <Row>
              <Col sm={12} className="dfaicjcc m-top-1">
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-50"
                >
                  <button
                    type="submit"
                    className="contact-button w-100 d-flex align-items-center justify-content-center"
                    disabled={loading}
                  >
                    {loading && (
                      <span className="spinner-border spinner-border-sm"></span>
                    )}
                    <span>Envoyer</span>
                  </button>
                </motion.div>
              </Col>
            </Row>
            <Row className="p-top-3 d-flex align-items-center justify-content-center">
              <ModalMessage responseData={responseData}>
                {responseData}
              </ModalMessage>
            </Row>
          </form>
        </div>

        </Container>
    )
}

export default Contact;