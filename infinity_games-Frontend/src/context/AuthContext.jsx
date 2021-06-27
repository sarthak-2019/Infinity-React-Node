import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [category, setCategory] = useState({
    action: false,
    adventure: false,
    arcade: false,
    puzzle: false,
    shooting: false,
  });
  const [GameData, setGameData] = useState([]);
  const [origData, setOrigData] = useState([]);
  const [input, setInput] = useState("");

  async function getGames() {
    if (origData.length === 0) {
      const gameList = await axios.get(
        "https://code-to-thrive-webocode.herokuapp.com/games/allgames"
      );
      const temp = gameList.data.data.games;
      setOrigData(temp);
      setGameData(temp);
    }
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
        origData,
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
