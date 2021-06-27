import React, { useEffect } from "react";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Aos from "aos";

const Card = styled.div`
  width: 300px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #eee;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    z-index: 2000;
  }
  img {
    width: 70px;
    height: 70px;
  }
`;

const CardText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: 800;
`;

const Category = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Arrow = styled(AiOutlineDoubleRight)`
  font-size: 30px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Cards = (props) => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Card className="fade-up">
      <img src={props.image} width="100px" />
      <CardText>
        <Title>
          {props.title.substr(0, props.title.length - 1).slice(0, 15)}
          {props.title.length > 15 ? "..." : null}
        </Title>
        <Category>{props.category}</Category>
      </CardText>
      <Arrow />
    </Card>
  );
};

export default Cards;
