import React, { useState, useContext } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import styled from "styled-components";
import AuthContext from "./../../../context/AuthContext";
import axios from "axios";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60px;
  align-items: center;
  margin-top: 100px;
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  .icon {
    font-size: 35px;
  }
`;

const Input = styled.input`
  font-size: 1.6em;
  border-radius: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
`;

const Logo = styled(SearchOutlinedIcon)`
  padding: 10px;
`;

const ResultContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
`;

const Result = styled.div`
  padding-left: 55px;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    white-space: normal;
    font-family: "Montserrat", "Helvetica Neue";
    p {
      background-color: #fff;
      height: 45px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #eee;
      }
    }
  }
`;

const Select = styled.select`
  padding-left: 10px;
  width: 150px;
  height: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  border-left: 2px solid black;
`;

const Searchbar = () => {
  const { gameData, setGameData, category, setCategory, input, setInput } =
    useContext(AuthContext);

  async function categoryHandler(e) {
    setCategory(e.target.value);
    if (e.target.value === "All") {
      const gameList = await axios.get(
        "https://code-to-thrive-webocode.herokuapp.com/games/allgames"
      );
      const temp = gameList.data.data.games;
      setGameData(temp);
    } else {
      const gameList = await axios.get(
        `https://code-to-thrive-webocode.herokuapp.com/games/allgames/${e.target.value}`
      );
      const temp = gameList.data.data.games;
      setGameData(temp);
    }
  }

  async function inputHandler(e) {
    setInput(e.target.value);
    const searchedWord = e.target.value;
    if (e.target.value === "") {
      if (category === "All") {
        const gameList = await axios.get(
          "https://code-to-thrive-webocode.herokuapp.com/games/allgames"
        );
        const temp = gameList.data.data.games;
        setGameData(temp);
      } else {
        const gameList = await axios.get(
          `https://code-to-thrive-webocode.herokuapp.com/games/allgames/${category}`
        );
        const temp = gameList.data.data.games;
        setGameData(temp);
      }
    } else {
      const newFilter = gameData.filter((value) => {
        return value.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setGameData(newFilter);
    }
  }
  return (
    <React.Fragment>
      <MainContainer>
        <Container>
          <Logo className="icon" />
          <Input
            value={input}
            onChange={(e) => inputHandler(e)}
            placeholder="Search your Game"
          />
          <Select value={category} onChange={(e) => categoryHandler(e)}>
            <option value="All">All</option>
            <option value="Arcade">Arcade</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Puzzle">Puzzle</option>
            <option value="Shooting">Shooting</option>
          </Select>
        </Container>
      </MainContainer>
    </React.Fragment>
  );
};

export default Searchbar;
