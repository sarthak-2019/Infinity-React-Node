import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 50px;
    padding-right: 50px;
  }
`;
