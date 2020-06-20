import React, { useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { useOnClickOutside } from "./hooks";

import { Burger, Menu } from "./components";
import CustomNav from "./components/Nav";
import Jumbo from "./components/Jumbo";
import Actus from "./components/Actus";
import Videos from "./components/Videos";
import Photos from "./components/Photos";
import Shows from "./components/Shows";
import Lyrics from "./components/Lyrics";
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <BrowserRouter>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <CustomNav />
      <Jumbo />
      <Actus />
      <Shows />
      <Videos />
      <Lyrics />
      <Photos />
      <Bio />
      <Contact />
      <Footer />


    </BrowserRouter>
  );
}

export default App;
