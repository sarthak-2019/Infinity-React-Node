import React, { useState, useContext } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";
import axios from "axios";

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60px;
  background-color: #eee;
  align-items: center;
  margin-top: 100px;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  .icon {
    font-size: 50px;
  }
`;

const Input = styled.input`
  font-size: 1.6em;
  border-radius: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
  background-color: #eee;
`;

const Logo = styled(SearchOutlinedIcon)`
  padding: 10px;
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
  const { origData, GameData, setGameData, category, input, setInput } =
    useContext(AuthContext);
  async function inputHandler(e) {
    setInput(e.target.value);
    const searchedWord = e.target.value;
    if (e.target.value === "") {
      const filterGamesByCategory = [];
      var flag = 0;
      if (category.action) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Action") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.adventure) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Adventure") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.arcade) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Arcade") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.puzzle) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Puzzle") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.shooting) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Shooting") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      setGameData(filterGamesByCategory);
      if (!flag) {
        setGameData(origData);
      }
    } else {
      const filterGamesByCategory = [];
      var flag = 0;
      if (category.action) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Action") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.adventure) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Adventure") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.arcade) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Arcade") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.puzzle) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Puzzle") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      if (category.shooting) {
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === "Shooting") {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
      const newFilter = filterGamesByCategory.filter((value) => {
        return value.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      setGameData(newFilter);
    }
  }
  return (
    <React.Fragment>
      <Container>
        <Logo className="icon" />
        <Input
          value={input}
          onChange={(e) => inputHandler(e)}
          placeholder="Search your Game"
        />
      </Container>
    </React.Fragment>
  );
};

export default Searchbar;
