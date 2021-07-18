import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Cards from "../Cards/Cards";
import styled from "styled-components";
import Aos from "aos";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from "@material-ui/core";

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;
`;

const CardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  margin-bottom: 50px;
  div:last-child {
    justify-self: flex-start;
  }
  a {
    color: black;
    text-decoration: none;
    outline: none;
    &:hover,
    &:active,
    &:active {
      text-decoration: none;
    }
  }
`;

export const Search = styled.button`
  background-color: #eee;
  position: relative;
  text-align: center;
  width: 150px;
  box-sizing: border-box;
  height: 50px;
  font-size: 16px;
  color: black;
  border: none;
  padding: 10px;
  visibility: hidden;
  transition: cursor ease-in 0.5s, color ease-in 0.5s,
    background-color ease-in 0.5s;
  animation: btnAnimation 1s ease;
  animation-fill-mode: forwards;
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

const useStyles = makeStyles({
  skeleton: {
    backgroundColor: "#353535",
    borderRadius: "5px",
  },
});

const Game = (props) => {
  const { GameData } = useContext(AuthContext);
  const [emptyarr, setemptyarr] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const arr = [];
    for (let i = 0; i < 21; i++) {
      arr.push(i);
    }
    setemptyarr(arr);
  }, []);

  return (
    <GameContainer>
      <CardDiv>
        {GameData.length !== 0
          ? GameData.slice(0, props.end).map((game) => {
              return (
                <React.Fragment key={game.href_link}>
                  <a target="_blank" href={game.href_link}>
                    <Cards
                      title={game.name}
                      category={game.category}
                      image={game.img_link}
                      website={game.website}
                    />
                  </a>
                </React.Fragment>
              );
            })
          : emptyarr.map((data) => {
              return (
                <React.Fragment key={data}>
                  <Skeleton
                    className={classes.skeleton}
                    variant="rect"
                    width={300}
                    height={70}
                  />
                </React.Fragment>
              );
            })}
      </CardDiv>
    </GameContainer>
  );
};

export default Game;
