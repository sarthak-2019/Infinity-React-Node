import React, { useState, useEffect, useRef } from "react";
import game from "./assets/video/game.mp4";
import styled from "styled-components";
import NavBar from "./components/NavBar/navbar";
import Typed from "typed.js";
import Aos from "aos";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About/about";
import Game from "./components/Game/Game";

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
  @keyframes animate {
    0% {
      height: 65px;
    }
    100% {
      height: 55px;
      background-color: black;
    }
  }
  .animate {
    animation: animate 0.5s ease-out forwards;
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

const GameContainer = styled.div`
  width: 100%;
  height: 500px;
  scroll-margin-top: 100px;
`;

function App() {
  const [click, setclick] = useState(false);

  const [scrollTop, setScrollTop] = useState(0);

  const el = useRef(null);

  const typed = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Welcome To Infinity", "The Game Finder"],
      typeSpeed: 60,
      backSpeed: 70,
      loop: true,
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, [typed, el]);

  useEffect(() => {
    const home = document.getElementById("home");
    const games = document.getElementById("games");
    const about = document.getElementById("About");
    console.log(games, about);

    const options = {
      rootMargin: "-100px 0px 0px 0px",
    };
    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        // console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
          document.getElementById("navbar").classList.add("animate");
        } else {
          document.getElementById("navbar").classList.remove("animate");
        }
      });
    }, options);

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          const nav_items = document.getElementsByClassName("navbar-items");
          for (let i = 0; i < nav_items.length; i++) {
            console.log(nav_items.item(i));
            if (nav_items.item(i).classList.contains("active")) {
              nav_items.item(i).classList.remove("active");
            }
          }
          console.log(entry.target, entry.isIntersecting);
        } else {
          console.log(entry.target, entry.isIntersecting);
        }
      });
    }, options);

    observer1.observe(home);
    observer2.observe(games);
  }, []);

  return (
    <React.Fragment>
      <BrowserRouter>
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
        <GameContainer name="games" id="games">
          <Game />
        </GameContainer>
        <About />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
