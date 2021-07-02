import React, { useContext, useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import styled from "styled-components";
import AuthContext from "../../context/AuthContext";

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  height: 60px;
  background-color: #eee;
  align-items: center;
  margin-top: 100px;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  .icon {
    font-size: 50px;
  }
`;

const Input = styled.input`
  font-size: 1.6em;
  border-radius: 10px;
  outline: none;
  border: none;
  flex-grow: 1;
  background-color: #eee;
  width: 50%;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`;

const Logo = styled(SearchOutlinedIcon)`
  padding: 10px;
`;

const Searchbar = (props) => {
  const { GameData, origData, setGameData, category } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    const temp = { ...category };
    setInput(e.target.value);
    const searchedWord = e.target.value;
    const filterGamesByCategory = [];
    var flag = 0;
    Object.keys(temp).map((category) => {
      if (temp[category]) {
        const cat = category[0].toUpperCase() + category.slice(1);
        flag = 1;
        for (var i = 0; i < origData.length; i++) {
          if (origData[i].category === cat) {
            filterGamesByCategory.push(origData[i]);
          }
        }
      }
    });
    if (!flag) {
      setGameData(origData);
      const newFilter = origData.filter((value) => {
        return value.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      props.setend(20);
      setGameData(newFilter);
    } else {
      setGameData(filterGamesByCategory);
      const newFilter = filterGamesByCategory.filter((value) => {
        return value.name.toLowerCase().includes(searchedWord.toLowerCase());
      });
      props.setend(20);
      setGameData(newFilter);
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Logo className="icon" />
        <Input
          value={input}
          onChange={(e) => inputHandler(e)}
          placeholder="Search your Game"
        />
      </Container>
    </React.Fragment>
  );
};

export default Searchbar;
