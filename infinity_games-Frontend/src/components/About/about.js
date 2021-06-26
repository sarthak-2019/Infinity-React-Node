import React from "react";
import styled from "styled-components";
import Aos from "aos";
import { GiInfinity, GiInternalInjury } from "react-icons/gi";

const Container = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 800px;
  width: 80%;
  margin: 200px auto;
  gap: 50px;
`;

const Div = styled.div`
  text-align: center;
  font-size: 25.5px;
  line-height: 37.5px;
  font-weight: 600;
  border: 2px solid black;
  padding: 20px;
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
  color: rgb(29, 29, 31);
`;

const Infinity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  hr {
    display: none;
    width: 0;
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
  });

  return (
    <Container name="about">
      <Infinity>
        <Head data-aos="fade-up">
          <h2>Infinity </h2>
          <span>
            <GiInfinity />
          </span>
        </Head>
        <hr />
      </Infinity>

      <Div data-aos="fade-left">
        We found out that searching games by going to every individual website
        sucks.
      </Div>
      <Div data-aos="fade-right">
        So, We created a Place Called Infinity where you can Search Most of the
        games available on the Internet and play on OneClick by redirecting.
      </Div>
      <Div data-aos="fade-left">An interactive way to search online games.</Div>
      <Div data-aos="fade-right">Search From many different categories.</Div>
      <Div data-aos="fade-left">
        We Provide you the top best games available in the Internet.
      </Div>
    </Container>
  );
};

export default About;
