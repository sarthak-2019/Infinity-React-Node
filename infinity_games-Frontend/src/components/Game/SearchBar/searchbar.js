import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60px;
  align-items: center;
  margin-top: 100px;
  border: 2px solid black;
  width: 80%;
  margin: 0 auto;
  margin-top: 50px;
  .icon {
    font-size: 35px;
  }
`;

const Input = styled.input`
  font-size: 1.6em;
  border-radius: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
`;

const Logo = styled(SearchOutlinedIcon)`
  padding: 10px;
`;

const ResultContainer = styled.div`
  display: flex;
  margin: auto;
  width: 80%;
`;

const Result = styled.div`
  padding-left: 55px;
  a {
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 500;
    white-space: normal;
    font-family: "Montserrat", "Helvetica Neue";
    p {
      background-color: #fff;
      height: 45px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: #eee;
      }
    }
  }
`;

const Select = styled.select`
  padding-left: 10px;
  width: 150px;
  height: 100%;
  outline: none;
  border: none;
  font-size: 20px;
  border-left: 2px solid black;
`;

const Searchbar = (props) => {
  const [FilteredData, setFilteredData] = useState([]);
  const [input, setinput] = useState("");

  const handleFilter = (event) => {
    const searchedWord = event.target.value; //curr word using trying to search for
    setinput(searchedWord);
    const newFilter = props.data.filter((value) => {
      return value.name.toLowerCase().includes(searchedWord.toLowerCase());
    });
    if (searchedWord == "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setinput("");
  };
  return (
    <React.Fragment>
      <MainContainer>
        <Container>
          <Logo className="icon" />
          <Input
            value={input}
            onChange={handleFilter}
            placeholder="Search your Game"
          />
          <Select>
            <option value="All">All</option>
            <option value="Arcade">Arcade</option>
            <option value="Adventure">Adventure</option>
            <option value="Action">Action</option>
            <option value="Puzzle">Adventure</option>
            <option value="Shooting">Action</option>
          </Select>
        </Container>
        <ResultContainer>
          {FilteredData.length != 0 && (
            <Result>
              {FilteredData.slice(0, 5).map((value, key) => {
                return (
                  <a
                    className="dataItem"
                    href={"/" + value.img_link}
                    target="_blank"
                  >
                    <p>{value.name}</p>
                  </a>
                );
              })}
            </Result>
          )}
        </ResultContainer>
      </MainContainer>
    </React.Fragment>
  );
};

export default Searchbar;
