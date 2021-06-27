import React, { useState, useEffect, useRef } from "react";
import Aos from "react";
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
    console.log("EL", el);
    if (el !== null) {
      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      };
    }
  }, []);

  useEffect(() => {
    const home = document.getElementById("home");
    const games = document.getElementById("games");
    const about = document.getElementById("About");
    console.log(games, about);

    const options = {
      rootMargin: "-100px 0px 0px 0px",
    };
    setTimeout(() => {
      const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
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

      console.log(observer1);
      observer1.observe(home);
      observer2.observe(games);
    }, 1000);
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
