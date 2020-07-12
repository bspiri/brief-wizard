import React, { useState } from "react";
import styled from "styled-components";
import {device} from './device'

const StyledQuestionOption = styled.button`
  width: 80%;
  border: 1px solid #398af7;
  border-radius: 5px;
  background-color: ${(props) => (props.clicked ? "#398af7;" : "#f5fbff;")};
  color: ${(props) => (props.clicked ? "#fff;" : "#5b637c;")};
  margin-top: 5%;
  height: 50px;
  text-align: left;
  font-size: 1.2em;
  font-weight: 500;
  outline: 0;
  padding-left: 5%;
  @media ${device.mobileS} {
   width: 100%;
   

}

@media ${device.tablet} {
   
   width: 90%;
  
}

  @media ${device.laptop} {
    
   width: 90%;
  }
`;

export default function QuestionButtons(props) {
  

  
  return (
    <StyledQuestionOption clicked={props.clicked} onClick={props.onClick}>
      {props.option}
    </StyledQuestionOption>
  );
}
