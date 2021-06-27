import React, { useState, useEffect, useRef } from "react";
import Footer from "./components/Footer/Footer";
import Aos from "aos";
import { Route } from "react-router-dom";
import GamePage from "./components/Game/GamePage";
import Contact from "./components/Footer/Contact";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);
  return (
    <React.Fragment>
      <Route path="/" exact>
        <HomePage />
        <Footer />
      </Route>
      <Route path="/GamePage">
        <GamePage />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </React.Fragment>
  );
};

export default App;
