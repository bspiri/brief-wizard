import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import styled from "styled-components";

const StyledLabel = styled.label`
  border: 1px solid #dfe0e5;
  border-radius: 5px;
  height: 40px;
  font-size: 1.3em;
  width: 80%;
  padding: 5px 55px;
  padding-left: 10px;
  text-align: left;
  color: #398af7;
  margin-right: 20px;
  margin-top: 5%;
`;
export default function Checkboxes(props) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // return (
  //   <div>
  //     <Checkbox
  //       checked={checked}
  //       onChange={handleChange}
  //       inputProps={{ "aria-label": "primary checkbox" }}
  //     />{" "}
  //     {props.option}

  //   </div>
  // );

  return (
    <StyledLabel>
      <input type="checkbox" />
      {props.option}
    </StyledLabel>
  );
}
