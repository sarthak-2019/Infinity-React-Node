import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Cards from "../Cards/Cards";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Aos from "aos";

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;;
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
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const { GameData } = useContext(AuthContext);

  console.log(GameData);
  return (
    <GameContainer name="games" id="games">
      {/* <Searchbar /> */}
      {/* <Heading data-aos="fade-bottom">Top Trending Games</Heading> */}
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
      <SearchDiv>
        <Link to="GamePage">
          <Search data-aos="fade-up">Search More</Search>
        </Link>
      </SearchDiv>
    </GameContainer>
  );
};

export default Game;
