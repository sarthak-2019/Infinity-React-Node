import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "../Searchbar/searchbar";
import Image from "../../assets/images/game.jpg";
import AuthContext from "../../context/AuthContext";
import GameHelper from "./GameHelper";
const Heading = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  font-size: 45px;
  font-weight: 700;
  color: white;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`;

const Background = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-attachment: fixed;
`;

const Backdrop = styled.div`
  background: rgba(0, 0, 0, 0.5);
`;

const Options = styled.div`
  display: flex;
  font-size: 16px;
  color: white;
  width: 50%;
  margin: 20px auto;
  gap: 15px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
    flex-wrap: wrap;
    width: 100%;
  }
  input[type="checkbox"] {
    display: none;
  }

  label {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }
  input[type="checkbox"]:checked + .whatever {
    background-color: #ddd;
    color: black;
  }
`;

const Result = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 80%;
  margin: auto;
  min-height: 100vh;
`;
const SearchDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const Search = styled.button`
  background-color: white;
  position: relative;
  text-align: center;
  width: 150px;
  box-sizing: border-box;
  height: 50px;
  font-size: 16px;
  color: black;
  border: none;
  padding: 10px;

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

const GamePage = () => {
  const { origData, setGameData, setCategory } = useContext(AuthContext);
  const [action1, setAction] = useState(false);
  const [adventure1, setAdventure] = useState(false);
  const [arcade1, setArcade] = useState(false);
  const [puzzle1, setPuzzle] = useState(false);
  const [shooting1, setShooting] = useState(false);

  const gameDataPerCategoryHandler = (temp) => {
    const filterGamesByCategory = [];
    var flag = 0;
    if (temp.action) {
      flag = 1;
      for (var i = 0; i < origData.length; i++) {
        if (origData[i].category === "Action") {
          filterGamesByCategory.push(origData[i]);
        }
      }
    }
    if (temp.adventure) {
      flag = 1;
      for (i = 0; i < origData.length; i++) {
        if (origData[i].category === "Adventure") {
          filterGamesByCategory.push(origData[i]);
        }
      }
    }
    if (temp.arcade) {
      flag = 1;
      for (i = 0; i < origData.length; i++) {
        if (origData[i].category === "Arcade") {
          filterGamesByCategory.push(origData[i]);
        }
      }
    }
    if (temp.puzzle) {
      flag = 1;
      for (i = 0; i < origData.length; i++) {
        if (origData[i].category === "Puzzle") {
          filterGamesByCategory.push(origData[i]);
        }
      }
    }
    if (temp.shooting) {
      flag = 1;
      for (i = 0; i < origData.length; i++) {
        if (origData[i].category === "Shooting") {
          filterGamesByCategory.push(origData[i]);
        }
      }
    }
    setGameData(filterGamesByCategory);
    if (!flag) {
      setGameData(origData);
    }
  };
  const actionChangeHandler = () => {
    var temp = {};
    if (action1 === false) {
      setAction(true);
      temp = {
        action: true,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    } else {
      setAction(false);
      temp = {
        action: false,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    }
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };
  const adventureChangeHandler = () => {
    var temp = {};
    if (adventure1 === false) {
      setAdventure(true);
      temp = {
        action: action1,
        adventure: true,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    } else {
      setAdventure(false);
      temp = {
        action: action1,
        adventure: false,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    }
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };
  const arcadeChangeHandler = () => {
    var temp = {};
    if (arcade1 === false) {
      setArcade(true);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: true,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    } else {
      setArcade(false);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: false,
        puzzle: puzzle1,
        shooting: shooting1,
      };
    }
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };
  const puzzleChangeHandler = () => {
    var temp = {};
    if (puzzle1 === false) {
      setPuzzle(true);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: true,
        shooting: shooting1,
      };
    } else {
      setPuzzle(false);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: false,
        shooting: shooting1,
      };
    }
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };
  const shootingChangeHandler = () => {
    var temp = {};
    if (shooting1 === false) {
      setShooting(true);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: true,
      };
    } else {
      setShooting(false);
      temp = {
        action: action1,
        adventure: adventure1,
        arcade: arcade1,
        puzzle: puzzle1,
        shooting: false,
      };
    }
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };

  return (
    <React.Fragment>
      <Background>
        <Backdrop>
          <Heading>THE INFINITE ENCOUNTERS</Heading>
          <SearchDiv>
            <Link to="/">
              <Search>Back to Home</Search>
            </Link>
          </SearchDiv>
          <Searchbar />
          <Options>
            <input type="checkbox" id="action" onClick={actionChangeHandler} />
            <label class="whatever" for="action">
              Action
            </label>
            <input
              type="checkbox"
              id="adventure"
              onClick={adventureChangeHandler}
            />
            <label class="whatever" for="adventure">
              Adventure
            </label>
            <input type="checkbox" id="arcade" onClick={arcadeChangeHandler} />
            <label class="whatever" for="arcade">
              Arcade
            </label>
            <input type="checkbox" id="puzzle" onClick={puzzleChangeHandler} />
            <label class="whatever" for="puzzle">
              Puzzle
            </label>
            <input
              type="checkbox"
              id="shooting"
              onClick={shootingChangeHandler}
            />
            <label class="whatever" for="shooting">
              Shooting
            </label>
            <input type="checkbox" id="" />
          </Options>
          <Result>
            <GameHelper />
          </Result>
        </Backdrop>
      </Background>
    </React.Fragment>
  );
};

export default GamePage;
