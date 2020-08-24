import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo2.png";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import NavThumbnail from './NavThumbnail';
import NavIconsThumbnail from './NavIconsThumbnail';
import AuthService from '../../services/auth.service';

function CustomNav() {
  const [ currentUser, setCurrentUser ] = useState(undefined);

  function logout() { AuthService.logout();}

  useEffect( () => {
    const user = AuthService.getCurrentUser();
    if (user !== null) {
      setCurrentUser(user);
    } else {
      setCurrentUser(undefined);
    }
  }, [])

  return (
    <Container fluid className="nav-bg nav-border fixed">
      <Row>
        <Col lg={3}>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <a
          activeClass="active"
          className="dfjccaicfdrjcc font-timeout font-size-okessapar resp-logo cursor "
          href="/"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >
         Okessapar
        <img src={Logo} alt="logo" className="w-37px p-logo" />
        </a>
          </motion.div>

        </Col>
        <Col lg={2} className="dfjccaicfdrjcr resp-nav">
          <NavIconsThumbnail
            href="https://www.facebook.com/okessapar/"
            className="cursor fa fa-facebook"
          />
          <NavIconsThumbnail
            href="https://www.instagram.com/okessapar/?hl=fr"
            className="cursor fa fa-instagram"
          />
          <NavIconsThumbnail
            href="https://www.youtube.com/channel/UCjeEtfJO2NhwegNFxcvb7bw"
            className="cursor fa fa-youtube"
          />
          <NavIconsThumbnail
            href="https://open.spotify.com/artist/1n8P1ZPMaY61KWcfTG7l1Z?si=mIZm0hiFSni2UVsQA60mwg"
            className="cursor fa fa-spotify"
          />
          <NavIconsThumbnail
            href="https://okessapar.bandcamp.com/releases"
            className="cursor fa fa-bandcamp"
          />
        </Col>
        <Col lg={6} className="dfjccaicfdrjcr resp-nav">
          <NavThumbnail
            item="Actus"
            anchor="actus"
            label="actus"
            // icon="📰"
            />
            <NavThumbnail
              item="Shows"
              anchor="shows"
              label="shows"
              // icon="📅"
              />
          <NavThumbnail
            item="Vidéos"
            anchor="videos"
            label="vidéos"
            // icon="🎧"
            />
            <NavThumbnail
              item="Lyrics"
              anchor="lyrics"
              label="lyrics"
              // icon="🖋️"
              />
          <NavThumbnail
            item="Photos"
            anchor="photos"
            label="photos"
            // icon="📷"
            />
            <NavThumbnail
              item="Bio"
              anchor="bio"
              label="bio"
              // icon="📜"
              />
          <NavThumbnail
            item="Contact"
            anchor="contact"
            label="contact"
            // icon="&#x1f4e9;"
            />
          </Col>
          <Col lg={1} className="resp-user">
            {currentUser ? (
              <a className="font-small" href="/" onClick={ () => logout()} >Logout</a>
            ) : (
            <a className="font-small" href="/login" >Pro</a>
            )}
        </Col>
      </Row>
    </Container>
  );
}

export default CustomNav;
