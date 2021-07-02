import React from "react";
import styled from "styled-components";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Aos from "aos";
import { HelpOutline } from "@material-ui/icons";

const Card = styled.div`
  width: 300px;
  height: 70px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #eee;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    z-index: 2000;
  }
  img {
    width: 70px;
    height: 70px;
    background-color: #ddd;
  }
  .spinner-3 {
    width: 50px;
    height: 50px;
    display: grid;
    border-radius: 50%;
    -webkit-mask: radial-gradient(farthest-side, #0000 40%, #000 41%);
    background: linear-gradient(0deg, rgb(0 0 0/50%) 50%, rgb(0 0 0/100%) 0)
        center/4px 100%,
      linear-gradient(90deg, rgb(0 0 0/25%) 50%, rgb(0 0 0/75%) 0) center/100%
        4px;
    background-repeat: no-repeat;
    animation: s3 1s ease steps(12);
  }
  .spinner-3::before,
  .spinner-3::after {
    content: "";
    grid-area: 1/1;
    border-radius: 50%;
    background: inherit;
    opacity: 0.915;
    transform: rotate(30deg);
  }
  .spinner-3::after {
    opacity: 0.83;
    transform: rotate(60deg);
  }

  @keyframes s3 {
    100% {
      transform: rotate(1turn);
    }
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
  const error = (e) => {
    console.log("hello");
    e.target.src =
      "https://safetyaustraliagroup.com.au/wp-content/uploads/2019/05/image-not-found.png";

  };
  return (
    <Card className="fade-up">
      <img src={props.image} width="100px" onError={(e) => error(e)} />
      <CardText>
        <Title>
          {props.title.substr(0, props.title.length - 1).slice(0, 15)}
          {props.title.length > 15 ? "..." : null}
        </Title>
        <Category>{props.category}</Category>
        <Category>{props.website}</Category>
      </CardText>
      <Arrow />
    </Card>
  );
};

export default Cards;
