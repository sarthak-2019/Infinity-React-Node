import React from "react";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  border: 2px solid black;
  width: 300px;
  height: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    svg {
    }
  }
`;

const CardText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 1em;
  font-weight: 800;
`;

const Category = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Image = styled.img``;

const Arrow = styled(AiOutlineDoubleRight)`
  font-size: 40px;
  /* margin-left: 20px; */
`;

const Cards = () => {
  return (
    <Container>
      <Card>
        <Image src="https://source.unsplash.com/70x70/?nature,water" />
        <CardText>
          <Title>Galaxy Run</Title>
          <Category>Adventure</Category>
        </CardText>
        <Arrow />
      </Card>
    </Container>
  );
};

export default Cards;
