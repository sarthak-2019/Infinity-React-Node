import React, { useState } from "react";
import styled from "styled-components";
import { GiInfinity } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { scroller } from "react-scroll";

const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  height: 65px;
  justify-content: flex-end;
  align-items: center;
  padding: 25px 0;
  z-index: 5000;
  .nav-about {
    margin-right: 50px;
  }
  transition: all 0.2s ease;
  .active {
    background-color: white;
    color: black;
  }
`;

const LogoDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  font-size: 40px;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
  padding-left: 50px;
  z-index: 5000;
`;

const NavItem = styled.div`
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const MobileIcon = styled.div`
  display: none;
  color: white;
  cursor: pointer;
  z-index: 2000;
  @media screen and (max-width: 800px) {
    display: flex;
    svg {
      margin-right: 20px;
      font-size: 32px;
      margin-top: auto;
      margin-bottom: auto;
    }
  }
`;

const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: ${(props) => (!props.click ? "-100%" : "0")};
  top: 0;
  color: white;
  background-color: black;
  z-index: 30;
  transition: all 0.5s ease-in;
`;

const ResNavItem = styled.div`
  width: 100%;
  height: 50px;
  font-size: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #eee;
    color: black;
    cursor: pointer;
  }
`;

const Navbar = (props) => {
  const scrollTo = (place) => {
    scroller.scrollTo(place, {
      duration: 800,
      delay: 0,
      smooth: "easeOut",
    });
  };
  const scrollToMobile = (place) => {
    props.setclick(!props.click);
    scroller.scrollTo(place, {
      duration: 800,
      delay: 0,
      smooth: "easeOut",
    });
  };
  return (
    <NavbarContainer id="navbar" position={props.position}>
      <LogoDiv>
        <GiInfinity />
      </LogoDiv>
      <MobileIcon onClick={() => props.setclick(!props.click)}>
        {props.click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      <BackDrop click={props.click}>
        <ResNavItem onClick={() => scrollToMobile("home")}>Home</ResNavItem>
        <ResNavItem onClick={() => scrollToMobile("games")}>Games</ResNavItem>
        <ResNavItem onClick={() => scrollToMobile("about")}>About</ResNavItem>
      </BackDrop>
      <NavItem className="navbar-items active" onClick={() => scrollTo("home")}>
        Home
      </NavItem>
      <NavItem onClick={() => scrollTo("games")} className="gamesbutton">
        Games
      </NavItem>
      <NavItem className="nav-about" onClick={() => scrollTo("about")}>
        About
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
