import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col } from "react-bootstrap";

const Shows = () => {
  const [shows, setShows] = useState([]);
  const date = new Date();
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggle] = useState(false);

  // Fetch shows data from DB
  async function retrieveShows() {
    const result = await axios
      .get("/api/shows")
      .then((response) => {
        setShows(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveShows();
  }, []);

  const onSubmit = (data, e) => {
    setLoading(true);
    axios
      .post("/api/shows", data)
      .then((response) => {
        setLoading(false);
        setMessage(response.data.message);
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        setMessage(error.response.data.error);
      });
  };

  return (
    <Container className="p-top-3vh" id="shows">
      {/* AFFICHAGE DES DATES ---------------------------------*/}

      <Row className="resp-m-top">
        <Col lg={12} className="dfjccaicfdrjcc resp-m-bott">
          <h1>Shows</h1>
        </Col>
        {shows.length ? (
          shows.map((show) => (
            <Col lg={12} className="dfjccaicfdrjcc m-top-3" key={show._id}>
              <a href={show.link} className="a-shows">
                {moment(show.date).format("D MMMM YYYY")} : {show.adress}
              </a>
            </Col>
          ))
        ) : (
          <Col lg={12} className="dfjccaicfdrjcc m-top-3">
            Pas de dates à venir pour l'instant
          </Col>
        )}
      </Row>

      {/* AJOUTER DES DATES ----------------------------------------*/}
      <div className="d-flex align-items-center justify-content-center p-top-3">
        <button
          className="contact-button  d-flex align-items-center justify-content-center"
          onClick={() => setToggle(true)}
        >
          +
        </button>
      </div>

      {isToggled && (
        <div className=" dfjccaicfdrjcc form-bg form-border p-top-3 p-bot-3 m-top-1 m-bot-5">
          <form onSubmit={handleSubmit(onSubmit)} className="w-80">
            <div>Ajouter une date</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Date YYYY-MM-DD"
                name="date"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Lieu"
                name="adress"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Event Link"
                name="link"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Expire YYYY-MM-DD"
                name="expireAt"
                ref={register({ required: true })}
              />
            </div>
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
            <Row className="p-top-3 d-flex align-items-center justify-content-center">
              {message}
            </Row>
          </form>
        </div>
      )}
    </Container>
  );
};

export default Shows;
