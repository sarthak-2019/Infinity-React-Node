import React, { useState, useEffect } from "react";
import Searchbar from "./SearchBar/searchbar";
import { AuthContextProvider } from "./../../context/AuthContext";
import Card from "./Cards";
const Game = () => {
  return (
    <AuthContextProvider>
      <Searchbar />
    </AuthContextProvider>
  );
};

export default Game;
