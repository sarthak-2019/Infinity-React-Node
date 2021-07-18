import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Searchbar from "../Searchbar/searchbar";
import Image from "../../assets/images/game.jpg";
import AuthContext from "../../context/AuthContext";
import GameHelper from "./GameHelper";
import ScrollToTop from "../../ScrollToTop";

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
  .checked {
    background-color: #ddd;
    color: black;
  }
  background: rgba(0, 0, 0, 0.5);
`;

const Options = styled.div`
  display: flex;
  font-size: 16px;
  color: white;
  width: 50%;
  margin: 20px auto;
  gap: 15px;

  input[type="button"] {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: black;
      color: white;
      cursor: pointer;
    }
  }

  .check {
    background-color: white !important;
    color: black !important;
  }

  @media screen and (max-width: 800px) {
    font-size: 10px;
    flex-wrap: wrap;
    width: 100%;
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
  const { category, origData, setGameData, setCategory } =
    useContext(AuthContext);
  const [end, setend] = useState(20);

  const OptionsChangeHandler = (event) => {
    document.querySelectorAll(".options").forEach((option) => {
      if (option == event.target) {
        event.target.classList.toggle("check");
      }
    });

    const temp = { ...category };
    temp[event.target.id] = !temp[event.target.id];
    setCategory(temp);
    gameDataPerCategoryHandler(temp);
  };

  const gameDataPerCategoryHandler = (temp) => {
    const filterGamesByCategory = [];
    var flag = 0;
    Object.keys(temp).map((category) => {
      console.log(temp[category]);
      if (temp[category]) {
        const cat = category[0].toUpperCase() + category.slice(1);
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === cat) {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
    });
    setGameData(filterGamesByCategory);
    if (!flag) {
      setGameData(origData);
    }
  };

  useEffect(() => {
    const temp = { ...category };
    Object.keys(temp).map((category) => {
      console.log(temp[category]);
      if (temp[category]) {
        document.getElementById(`${category}`).classList.toggle("check");
      }
    });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        console.log("changed");
        setend((prevstate) => 20 + prevstate);
      }
    };

    window.addEventListener("scroll", onScroll);
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
      <Background>
        <Backdrop>
          <Heading>THE INFINITE ENCOUNTERS</Heading>
          <SearchDiv>
            <Link to="/">
              <Search>Back to Home</Search>
            </Link>
          </SearchDiv>
          <Searchbar setend={setend} />
          <Options>
            <input
              className="options"
              type="button"
              id="action"
              onClick={OptionsChangeHandler}
              value="Action"
            />
            <input
              className="options"
              type="button"
              id="adventure"
              onClick={OptionsChangeHandler}
              value="Adventure"
            />
            <input
              className="options"
              type="button"
              value="Arcade"
              id="arcade"
              onClick={OptionsChangeHandler}
            />
            <input
              className="options"
              type="button"
              value="Puzzle"
              id="puzzle"
              onClick={OptionsChangeHandler}
            />
            <input
              className="options"
              type="button"
              value="Shooting"
              id="shooting"
              onClick={OptionsChangeHandler}
            />
          </Options>
          <Result>
            <GameHelper end={end} />
          </Result>
        </Backdrop>
      </Background>
    </React.Fragment>
  );
};

export default GamePage;
