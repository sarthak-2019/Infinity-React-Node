import React, { useState } from "react";
import Searchbar from "./SearchBar/searchbar";

const Game = () => {
  [gameData, gameDataHandler] = useState([]);
  return (
    <React.Fragment>
      <Searchbar data={gameData} />
    </React.Fragment>
  );
};

export default Game;
