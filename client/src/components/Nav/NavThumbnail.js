import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";


function NavThumbnail(props) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link
          activeClass="active"
          className="nav-icon"
          to={props.anchor}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
        <span role="img" aria-label={props.label}>
            {props.icon}
          </span>
          {props.item}
        </Link>
      </motion.div>
    )
}

export default NavThumbnail;