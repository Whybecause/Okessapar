import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import VideoService from '../services/videos.service';
const Videos = () => {
  const [videos, setVideos] = useState([]);

  // Fetch videos from youtube playlist
  async function retrieveVideos() {
    VideoService.getVideos()
      .then((response) => {
        setVideos(response.data)
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    retrieveVideos();
  }, []);

  return (
    <Container className=" p-top-3vh" id="videos">
      <hr />
      <Row className="resp-m-top">
        <Col lg={6} sm={12} className="dfjccaicfdrjcc resp-m-bott ">
          <h1>Vidéos</h1>
        </Col>
        {videos &&
          videos.map((video) => (
            <Col lg={6} sm={12} key={video.Url} className="spinner-svg">
              {" "}
              <iframe
                title={video.title}
                className="w-100 resp-video-h "
                src={video.Url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Videos;
