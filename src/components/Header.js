import React, { useState } from "react";
import PinterestIcon from "@material-ui/icons/Pinterest";
//import { IconButton } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import FaceIcon from "@material-ui/icons/Face";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header(props) {
  const [input, setInput] = useState("");

  // How we call a function in the parent component from a child component  --> by passing a prop as a parameter function

  const handleSearch = (e) => {
    e.preventDefault();
    props.onSubmit(input);
    //console.log("this is the input", input);
  };

  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>

      <HomePageButton>
        <a href="/">HomePage</a>
        {/* <Link to="/">HomePage</Link> */}
      </HomePageButton>

      <FollowinButton>
        <a href="/">Following</a>
        {/* <Link to="/">Following</Link> */}
      </FollowinButton>

      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={handleSearch}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  ${"" /* TROUBLE ==> TRBL */}
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: white;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e60023;
    font-sizes: 32px;
    cursor: pointer;
  }
`;

const HomePage = styled.div`
  display: flex;
  height: 48px;
  min-width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomePageButton = styled(HomePage)`
  background-color: rgb(17, 17, 17);

  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const FollowinButton = styled(HomePage)`
  background-color: white;

  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }

  :hover {
    background-color: #e1e1e1;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;
const SearchBarWrapper = styled.div`
  background-color: #efefef;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    form-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
`;
export default Header;
