import React from "react";
import { motion } from "framer-motion";


function NavIconsThumbnail(props) {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <a href={props.href} className={props.className}> </a>
      </motion.div>
    )
}

export default NavIconsThumbnail;