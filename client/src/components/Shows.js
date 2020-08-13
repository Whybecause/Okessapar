import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from 'react-scroll';
import { useForm } from "react-hook-form";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import ShowService from '../services/shows.service';
import AuthService from '../services/auth.service';
import authHeader from '../services/auth-header';
// import io from 'socket.io-client';
// const socket = io('http://localhost:8080');

const Shows = () => {
  const { register, handleSubmit } = useForm();
  const [shows, setShows] = useState([]);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = useState(false);
  const [isToggled, setToggle] = useState(false);
  const [ isAdmin, setAdmin ] = useState(false);

  // const [ response, setResponse ]  = useState("");
  // useEffect( () => {
  //   socket.on('FromAPI', data => {
  //     setResponse(data);
  //   });
  // }, []);
  

  // Fetch shows data from DB
  async function retrieveShows() {
    ShowService.getShows()
      .then((response) => {
        setShows(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveShows();
    const user = AuthService.getCurrentUser();
    if (user !== null) {
      setAdmin(user.roles.includes("ROLE_ADMIN"))
    }
  }, [shows]);


    // Add new date show
  const onSubmit = (data, e) => {
    setLoading(true);
    axios
      .post("/api/shows", data, { headers : authHeader()})
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
    <Container id="shows"  >
      {/* <p>its <time dateTime={response}>{response}</time>
      </p> */}
      {/* AFFICHAGE DES DATES SI ADMIN ---------------------------------*/}
      <Dropdown.Divider  />
      <Row className="resp-m-top"  >
        <Col lg={12} className="dfjccaicfdrjcc resp-m-bott">
          <h1>Shows</h1>
        </Col>
        {shows.length ? (
          shows.map((show) => (
            <Col lg={12} className="dfjccaicfdrjcc p-top-1" key={show._id}>
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
      {isAdmin && (      
      <div className="d-flex align-items-center justify-content-center p-top-3">
        <button
          className="contact-button d-flex align-items-center justify-content-center   "
          id="add-dates-form"
          >
          <Link
          onClick={() => setToggle(true)}
          className="w-100"
          activeClass="active"
          to="add-dates-form"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          +
          </Link>
        </button>
      </div>
      )}

      {isToggled && (
        <div className=" dfjccaicfdrjcc form-bg form-border p-top-3 p-bot-3 m-top-1 m-bot-5" >
          <form onSubmit={handleSubmit(onSubmit)} className="w-80" >
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
