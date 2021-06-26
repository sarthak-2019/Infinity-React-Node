import React, { useState } from "react";
import game from "./assets/game.mp4";
import styled from "styled-components";
import NavBar from "./components/NavBar/navbar";
import Typed from "typed.js";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/about";
import Game from "./components/Game/Game";
import Cards from "./components/Game/Cards";

const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  video {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
    object-fit: fill;
  }
  .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
    animation: typedjsBlink 0.7s infinite;
  }
  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }
  @-webkit-keyframes typedjsBlink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .typed-fade-out {
    opacity: 0;
    transition: opacity 0.25s;
    -webkit-animation: 0;
    animation: 0;
  }
`;

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

const Heading = styled.div`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -120%);
  margin-bottom: 20px;
  color: white;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`;

const Anim = styled.div`
  background-color: salmon;
  width: 200px;
  height: 100px;
  width: 50%;
  margin: auto;
  margin-bottom: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GameContainer = styled.div`
  width: 100%;
  height: 500px;
`;

const AboutContanier = styled.div`
  background-color: #aaa;
  width: 100%;
  height: 500px;
`;

function App() {
  const [click, setclick] = React.useState(false);
  const [navbar, setnavbar] = React.useState(false);

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const el = React.useRef(null);
  const el1 = React.useRef(null);

  const typed = React.useRef(null);
  const typed1 = React.useRef(null);

  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  React.useEffect(() => {
    const options = {
      strings: ["Welcome To Infinity", "Ultimate Game Finder"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [typed, el]);

  const height = window.innerHeight;
  React.useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    console.log(scrollTop);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <React.Fragment>
      <BrowserRouter>
        <VideoContainer name="home">
          <NavBar position={scrollTop} click={click} setclick={setclick} />
          <video autoPlay loop muted>
            <source src={game} type="video/mp4" />
          </video>
          <BackDrop height={height}>
            <Heading>
              <span class="welcome" ref={el} />
            </Heading>
          </BackDrop>
        </VideoContainer>
        <GameContainer name="games">
          <Game />
        </GameContainer>
        <About />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
