import React, { Component, useState } from "react";
import styled from "styled-components";
import {device} from './device'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 80%;
  margin-left: 5px;
  border: 1px solid gray;
  padding: 2%;
  margin-top: 5%;
  border-radius: 10px;
  @media ${device.mobileS} {
   width:95%;
   margin-left: 0;


}

@media ${device.tablet} {
  width: 80%;
  margin-top: 5%;
  font-size: 1em;

}

  @media ${device.laptop} {
    width: 80%;

    margin-top: 5%;
    font-size: 1em;

  }
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2.5px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
const StyledCheckbox = styled.div`
  display: inline-block;
  width: 1.8em;
  height: 1.8em;
  background: ${(props) => (props.checked ? "#398AF7" : "white")};
  border: 1px solid #dfe0e5;
  border-radius: 3px;
  transition: all 150ms;
  ${HiddenCheckbox}:focus;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const StyledLabel = styled.span`
  font-size: 1.1em;
  position: relative;
  top: -5px;
`;

const Check = ({ className, checked, label, handleFunc, ...props }) => {
  const [checkmark, setCheckmark] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckmark(event.target.checked);
    handleFunc(label, event.target.checked)
  }
  return (
    <label>
      <CheckboxContainer className={className}>
        <HiddenCheckbox
          checked={checkmark}
          {...props}
          onChange={handleCheckboxChange}
        />
        <StyledCheckbox checked={checkmark}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
        <StyledLabel> {label}</StyledLabel>
      </CheckboxContainer>
    </label>
  );
};

export default Check;
