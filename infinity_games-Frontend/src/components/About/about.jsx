import React from "react";
import styled from "styled-components";
import Aos from "aos";
import { GiInfinity } from "react-icons/gi";
import Image from "../../assets/images/18-01.svg";
import "./about.css";

const Container = styled.div`
  width: 100%;
  height: 150vh;
  position: relative;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  /* background: rgba(0, 0, 0, 0.5); */
`;

const Div = styled.div`
  text-align: center;
  width: 80%;
  font-size: 25.5px;
  line-height: 37.5px;
  font-weight: 600;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 5px #aaa;
  padding: 30px;
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
  div {
    color: white;
    width: 100%;
    text-align: center;
    span {
      font-size: 50px;
    }
  }
`;

const Infinity = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 40px;
  gap: 2px;
  hr {
    width: 100%;
    color: white;
    animation: anim 1s ease-in forwards;
    @keyframes anim {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h2 {
    font-size: 45px;
    text-align: center;
  }
  span {
    font-size: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const About = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Container img={Image} name="about">
      <Backdrop id="About">
        <Infinity>
          <Head data-aos="fade-up">
            <h2>About Us </h2>
            <span>
              (<GiInfinity />)
            </span>
          </Head>
          <hr data-aos="fade-up" />
        </Infinity>

        <Div data-aos="fade-up">
          <div className="container1">
            <div className="c1h">
              <h1>Search engine </h1>
            </div>
            <div className="c1p">
              <h2>
                We found out that searching games by going to every individual
                website sucks.
              </h2>
            </div>
          </div>
        </Div>
        <Div data-aos="fade-up">
          <div className="container1">
            <div className="c1h">
              <h1>Infinity</h1>
            </div>
            <div className="c1p">
              <h2>
                So, We created a Place Called Infinity where you can Search Most
                of the games available on the Internet.
              </h2>
            </div>
          </div>
        </Div>
        <Div data-aos="fade-up">
          <div className="container1">
            <div className="c1h">
              <h1>Search. Sort. Play!</h1>
            </div>
            <div className="c1p">
              <h2>
                An interactive way to search online games based on your keywords
              </h2>
            </div>
          </div>
        </Div>
        <Div data-aos="fade-up">
          <div className="container1">
            <div className="c1h">
              <h1>Find It Fast</h1>
            </div>
            <div className="c1p">
              <h2>
                Search From many different categories quickly and efficiently.
              </h2>
            </div>
          </div>
        </Div>
        <Div data-aos="fade-up">
          <div>
            <span>&#8220;</span>We Provide you the top best games available in
            the Internet<span>&#8221;</span>.
          </div>
        </Div>
      </Backdrop>
    </Container>
  );
};

export default About;
