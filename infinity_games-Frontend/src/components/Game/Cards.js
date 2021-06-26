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
  border-radius: 10px;
  width: 380px;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    cursor: pointer;
    svg{

    }
    /* background-color: rgba(0,0,0,0.5); */
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
  font-size: 1.2em;
  font-weight: 800;
`;

const Category = styled.div`
  font-size: 15px;
  font-weight: 500;
`;

const Image = styled.img`
  background-image: url("https://source.unsplash.com/50x50/?nature,water");
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;

  /* border-radius:9px; */
`;

const Arrow = styled(AiOutlineDoubleRight)`
  font-size: 40px;
  margin-left: 20px;
`;

const Cards = () => {
  return (
    <Container>
      <Card>
        <Image src="https://source.unsplash.com/100x90/?nature,water" />
        <CardText>
          <Title>Bombay Shooter</Title>
          <Category>Action</Category>
        </CardText>
        <Arrow />
      </Card>
    </Container>
  );
};

export default Cards;
