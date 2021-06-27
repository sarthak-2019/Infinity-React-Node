import React from "react";
import styled from "styled-components";
import Searchbar from "../Searchbar/searchbar";
import Image from "../../assets/images/game.jpg";
import Game from "../Game/Game";

const Heading = styled.div`
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 45px;
  font-weight: 700;
  color: white;
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
  input[type="checkbox"] {
    display: none;
  }

  label {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    &:hover {
      background-color: #e1e1e1;
      color: black;
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
  width: 80%;
  margin: auto;
  min-height: 100vh;
  border: 2px solid white;
`;

const Cards = styled.div``;

const GamePage = () => {
  return (
    <React.Fragment>
      <Background>
        <Backdrop>
          <Heading>THE INFINITE ENCOUNTERS</Heading>
          <Searchbar />
          <Options>
            <input type="checkbox" id="action" />
            <label class="whatever" for="action">
              Action
            </label>
            <input type="checkbox" id="adventure" />
            <label class="whatever" for="adventure">
              Adventure
            </label>
            <input type="checkbox" id="arcade" />
            <label class="whatever" for="arcade">
              Arcade
            </label>
            <input type="checkbox" id="puzzle" />
            <label class="whatever" for="puzzle">
              Puzzle
            </label>
            <input type="checkbox" id="shooting" />
            <label class="whatever" for="shooting">
              Shooting
            </label>
            <input type="checkbox" id="" />
          </Options>
          <Result>
            <Game />
          </Result>
        </Backdrop>
      </Background>
    </React.Fragment>
  );
};

export default GamePage;
