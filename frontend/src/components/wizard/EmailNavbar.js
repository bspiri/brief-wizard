import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import LoginModal from "./LoginModal";
import "./EmailNavbar.css";
const Wrapper = styled.div`
  background: #f8f8f8;
  padding: 20px;
`;
const H1 = styled.h1`
  display: inline;
`;
class EmailNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userdata: {}
    }
  }
  render() {
    return (
      <Wrapper>
        <H1>SuperOkay</H1>
        <IconButton className="floatRight">
          <MenuIcon />
        </IconButton>
        <div className="floatRight">
          <LoginModal ></LoginModal>
        </div>
      </Wrapper>
    );
  }
}
export default EmailNavbar;