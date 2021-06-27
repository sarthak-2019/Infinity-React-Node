import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Cards from "../Cards/Cards";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Aos from "aos";
import InfiniteScroll from "react-infinite-scroll-component";
const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;
`;

const Heading = styled.div`
  margin: 50px auto;
  font-size: 35px;
  line-height: 37.5px;
  font-weight: 700;
  font-family: "Montserrat", "Helvetica", "Arial", sans-serif;
`;

const CardDiv = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 50px;
  /* margin-top: 20px; */
  div:last-child {
    justify-self: flex-start;
    /* margin-right:500px; */
  }
  a {
    color: black;
    text-decoration: none;
    outline: none;
    &:hover,
    &:active,
    &:active {
      text-decoration: none;
    }
  }
`;

const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.button`
  background-color: #eee;
  position: relative;
  text-align: center;
  width: 150px;
  box-sizing: border-box;
  height: 50px;
  font-size: 16px;
  color: black;
  border: none;
  padding: 10px;
  visibility: hidden;
  transition: cursor ease-in 0.5s, color ease-in 0.5s,
    background-color ease-in 0.5s;
  animation: btnAnimation 1s ease;
  animation-fill-mode: forwards;
  animation-delay: 0.3s;
  margin-bottom: 40px;
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: white;
    bottom: 0;
    left: 0;
  }
  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    background-color: white;
    top: 0;
    right: 0;
  }
  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
    box-shadow: 2px 2px 2px black;
  }

  &:hover::after,
  &:hover::before {
    width: 100%;
    transition: 0.5s ease-in;
  }

  @keyframes btnAnimation {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
      visibility: visible;
    }
  }
`;

const Game = () => {
  const { GameData } = useContext(AuthContext);
  const count = 30;
  const [start, setStart] = useState(0);
  const [data, setData] = useState([]);
  const [stop, setStop] = useState(true);
  const fetchData = () => {
    console.log(GameData);
    const left = start;
    if (left >= GameData.length) {
      setStop(false);
      const temp = [];
      for (var i = 0; i < GameData.length; i++) {
        temp.push(GameData[i]);
      }
      setData(temp);
      return;
    }
    const temp = [];
    const lim = Math.min(left + count, GameData.length);
    for (var i = 0; i < lim; i++) {
      temp.push(GameData[i]);
    }
    setData(temp);
    setStart(left + count);
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    // <InfiniteScroll
    //   dataLength={data.length}
    //   next={fetchData}
    //   hasMore={stop}
    //   loader={<h4>Loading...</h4>}
    // >
    <GameContainer name="games" id="games">
      <CardDiv>
        {GameData
          ? GameData.slice(0, 21).map((game) => {
              return (
                <React.Fragment>
                  <a target="_blank" href={game.href_link}>
                    <Cards
                      title={game.name}
                      category={game.category}
                      image={game.img_link}
                      website={game.website}
                    />
                  </a>
                </React.Fragment>
              );
            })
          : null}
      </CardDiv>
    </GameContainer>
  );
};

export default Game;
