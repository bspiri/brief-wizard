import React from "react";
import styled from "styled-components";
import {device} from './device'
const ProgBarContainer = styled.div`
  height: 10px;
  width: 15vw;
  background-color: #dfe0e5;
  border-radius: 50px;
  /* margin: 10px; */
  margin-top: 7%;
  @media ${device.mobileS} {
   width: 100%;
  
}
`;

const ProgBar = (props) => {
  const { bgcolor, completed } = props;
  const ProgBarFiller = styled.div`
    height: 100%;
    width: ${completed}%;
    background-color: ${bgcolor};
    text-align: right;
    border-radius: ${completed === 100 ? "50px;" : "50px 0 0 50px;"};
  `;

  return (
    <ProgBarContainer>
      <ProgBarFiller></ProgBarFiller>
    </ProgBarContainer>
  );
};

export default ProgBar;
