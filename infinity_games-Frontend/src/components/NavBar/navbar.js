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
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  #about {
    margin-right: 20px;
  }
`;
const LogoDiv = styled.div`
  margin-left: 20px;
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  font-size: 40px;
  color: white;
  margin-top: auto;
  margin-bottom: auto;
`;

const NavItem = styled.div`
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  color: white;
  padding: 5px 10px;
  &:hover {
    background-color: white;
    color: black;
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
  position: fixed;
  height: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  color: white;
  z-index: 30;
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
`;

const Navbar = (props) => {
  console.log(props.click);
  const scrollTo = (place) => {
    scroller.scrollTo(place, {
      duration: 800,
      delay: 0,
      smooth: "easeOut",
    });
  };
  return (
    <NavbarContainer>
      <LogoDiv>
        <GiInfinity />
      </LogoDiv>
      <MobileIcon onClick={() => props.setclick(!props.click)}>
        {props.click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      {props.click ? (
        <BackDrop>
          <a href="#about">
            <ResNavItem>Home</ResNavItem>
          </a>
          <ResNavItem>About</ResNavItem>
          <ResNavItem>ContactUs</ResNavItem>
        </BackDrop>
      ) : null}
      {/* <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      > */}
      <NavItem onClick={() => scrollTo("home")}>Home</NavItem>
      <NavItem onClick={() => scrollTo("games")}>Games</NavItem>
      <NavItem onClick={() => scrollTo("about")}>
        About
      </NavItem>
    </NavbarContainer>
  );
};

export default Navbar;
