import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [category, setCategory] = useState("All");
  const [GameData, setGameData] = useState([]);
  const [input, setInput] = useState("");

  async function getGames() {
    const gameList = await axios.get(
      "https://code-to-thrive-webocode.herokuapp.com/games/allgames"
    );
    const temp = gameList.data.data.games;
    setGameData(temp);
  }
  useEffect(() => {
    getGames();
  }, []);

  useEffect(() => {
    console.log(GameData);
  }, [GameData]);

  return (
    <AuthContext.Provider
      value={{
        GameData,
        setGameData,
        category,
        setCategory,
        input,
        setInput,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };