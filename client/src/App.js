import React, { useState, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useOnClickOutside } from "./hooks";

import { Burger, Menu } from "./components";
import CustomNav from "./components/Nav/Nav";
import HomeWrapper from './components/HomeWrapper';
import Login from "./components/Login/Login";
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
      <Switch>
        <Route exact path="/" component={HomeWrapper} />
        <Route exact path="/login" component={Login} />
      </Switch>
      <Footer />


    </BrowserRouter>
  );
}

export default App;
