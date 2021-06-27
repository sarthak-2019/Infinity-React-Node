import styled from "styled-components";
export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  video {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: -1;
    object-fit: fill;
  }
  .typed-cursor {
    opacity: 1;
    animation: typedjsBlink 0.7s infinite;
    -webkit-animation: typedjsBlink 0.7s infinite;
  }

  @keyframes typedjsBlink {
    50% {
      opacity: 0;
    }
  }
  @-webkit-keyframes typedjsBlink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .typed-fade-out {
    opacity: 0;
    transition: opacity 0.25s;
    -webkit-animation: 0;
    animation: 0;
  }
  @keyframes animate {
    0% {
      height: 75px;
    }
    100% {
      height: 65px;
      background-color: black;
    }
  }
  .animate {
    animation: animate 0.5s ease-out forwards;
  }
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 20;
`;

export const Heading = styled.div`
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -120%);
  margin-bottom: 20px;
  color: white;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 800px) {
    font-size: 30px;
    text-align: center;
  }
`;
