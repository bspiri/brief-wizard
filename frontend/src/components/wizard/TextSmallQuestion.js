import React from "react";
import styled from "styled-components";

const SmallInputQuestion = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props.hasSomething === "blabla" ? "red;" : "black;"};
  font-size: 24;
`;
export default function TextSmallQuestion() {
    return <SmallInputQuestion hasSomething="blabla"></SmallInputQuestion>;
}