import React, { useState, useEffect, useContext } from "react";
import Searchbar from "./SearchBar/searchbar";
import { AuthContextProvider } from "./../../context/AuthContext";
import AuthContext from "./../../context/AuthContext";
import Cards from "./Cards";
import styled from "styled-components";
import { Data } from "./SearchBar/data.js";

const GameContainer = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const CardDiv = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Game = () => {
  console.log(Data);
  return (
    <GameContainer name="games" id="games">
      <Searchbar />
      <CardDiv>
        <Cards />
        {Data.map((game) => {
          return (
            <Cards
              title={game.name}
              category={game.category}
              image={game.img_link}
              website={game.website}
            />
          );
        })}
      </CardDiv>
    </GameContainer>
  );
};

export default Game;
// {gameData.map((game) => {
//   <Card
//     title={game.name}
//     category={game.category}
//     image={game.img_link}
//     website={game.website}
//   />;
// })}
