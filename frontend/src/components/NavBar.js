import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
import "./NavBar.css";

const Wrapper = styled.div`
  background: #f8f8f8;
  padding: 20px;
`;

const UL = styled.ul`
  list-style-type: none;
  float: right;
`;

const LI = styled.li`
  display: inline;
  position: relative;
  top: 10px;
  margin-right: 50px;
  color: #374c58;
`;

const H1 = styled.h1`
  display: inline;
`;

const A = styled.a`
  text-decoration: none;
  color: #232733;
  float: right;
  position: relative;
  top: 10px;
`;

const Navbar = () => {
  return (
    <Wrapper>
      <H1>SuperOkay</H1>

      <IconButton className="floatRight">
        <MenuIcon />
      </IconButton>

      <A>E-mail</A>
    </Wrapper>
  );
};

export default Navbar;
