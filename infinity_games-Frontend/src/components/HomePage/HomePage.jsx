import React, { useState, useEffect, useRef } from "react";
import About from "../About/about";
import Game from "../Game/Game";
import { VideoContainer, BackDrop, Heading } from "./styles";
import NavBar from "../NavBar/navbar";
import Typed from "typed.js";
import game from "../../assets/video/game.mp4";

const HomePage = () => {
  const [click, setclick] = useState(false);

  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Welcome To Infinity", "The Game Finder"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    };
    if (el !== null) {
      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      };
    }
  }, []);

  return (
    <React.Fragment>
      <VideoContainer name="home" id="home">
        <NavBar click={click} setclick={setclick} />
        <video autoPlay loop muted>
          <source src={game} type="video/mp4" />
        </video>
        <BackDrop>
          <Heading>
            <span className="welcome" ref={el} />
          </Heading>
        </BackDrop>
      </VideoContainer>
      <Game />
      <About />
    </React.Fragment>
  );
};

export default HomePage;
