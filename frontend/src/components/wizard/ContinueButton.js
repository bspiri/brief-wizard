import React from "react";
import styled from "styled-components";
import {device} from './device'

const ContinueButton = styled.button`
  background-color: lightblue;
  align-self: flex-start;

  width: 200px;
  height: 45px;
  font-size: 1em;
  font-weight: 600;
  border: none;
  background: #398af7;
  color: white;
  border-radius: 5px;
  margin-top: 10%;

  @media ${device.mobileS} {
   width: 100%;
   margin-top: 10%;

}

@media ${device.tablet} {
   margin-top: 10%;
   width: 200px;
  
}

  @media ${device.laptop} {
    margin-top: 5%;
   width: 200px;
  }
`;

export default ContinueButton;
