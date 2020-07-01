import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import NavThumbnail from '../Nav/NavThumbnail';

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