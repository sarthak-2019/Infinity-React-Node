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

  useEffect(() => {
    const navitems = document.querySelectorAll(".nav-item");
    const home = document.querySelector("#home");
    const games = document.querySelector("#games");
    const about = document.querySelector("#about");
    console.log(home, games, about);

    const options = {
      threshold: 0.4,
    };

    const options1 = {
      threshold: 0.6,
    };

    const observer1 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (entry.isIntersecting) {
            navitems.forEach((el) => {
              if (el.innerHTML == "Home") el.classList.add("active");
              else el.classList.remove("active");
            });
            document.getElementById("navbar").classList.remove("animate");
          } else {
            document.getElementById("navbar").classList.add("animate");
          }
          console.log("ENTRY", entry.isIntersecting);
        }
      });
    }, options);

    const observer2 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (entry.isIntersecting) {
            navitems.forEach((el) => {
              if (el.innerHTML == "Games") el.classList.add("active");
              else el.classList.remove("active");
            });
          }
        }
        console.log("ENTRY", entry.isIntersecting);
      });
    }, options1);

    const observer3 = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          if (entry.isIntersecting) {
            navitems.forEach((el) => {
              console.log("hello");
              if (el.innerHTML == "About") el.classList.add("active");
              else el.classList.remove("active");
            });
          }
        }
        console.log("ENTRY", entry.isIntersecting);
      });
    }, options1);

    observer1.observe(home);
    observer2.observe(games);
    observer3.observe(about);
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
