import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavThumbnail from '../Tools/NavThumbnail';

const Menu = ({ open, setOpen}) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <NavThumbnail
        anchor="actus"
        label="actus"
        icon="📰"
        />
      <NavThumbnail
        anchor="shows"
        label="shows"
        icon="📅"
        />
      <NavThumbnail
        anchor="videos"
        label="videos"
        icon="🎧"
        />
      <NavThumbnail
        anchor="lyrics"
        label="lyrics"
        icon="🖋️"
        />
      <NavThumbnail
        anchor="photos"
        label="photos"
        icon="📷"
        />
      <NavThumbnail
        anchor="bio"
        label="bio"
        icon="📜"
        />
      <NavThumbnail
        anchor="contact"
        label="contact"
        icon="&#x1f4e9;"
        />
    
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;

{/* <Link to="/Videos" className="a"><span role="img" aria-label="vidéos">🎧</span></Link>
<Link to="/Photos"className="a"><span role="img" aria-label="photos">📷</span></Link>
<Link to="/Shows"className="a"><span role="img" aria-label="shows">📅</span></Link>
<Link to="/Lyrics"className="a"><span role="img" aria-label="lyrics">🖋️</span></Link>                                             
<Link to="/Bio"className="a"><span role="img" aria-label="bio">📜</span></Link>
<Link to="/Contact"className="a"><span role="img" aria-label="contact">&#x1f4e9;</span></Link> */}
