import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Nav } from "react-bootstrap";


function NavIconsThumbnail(props) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href={props.href} className={props.className}></a>
      </motion.div>
    )
}

export default NavIconsThumbnail;