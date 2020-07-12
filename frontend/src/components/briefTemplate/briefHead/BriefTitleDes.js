import React from "react";
import styled from "styled-components";

//style-components
const Title1 = styled.h1`
    font-size: 3.5em;
    font-weight: 800;
    color: #232733;
    margin-top:${props => !props.margin && "1vh"};
    margin-bottom:40px;

`;

function BriefTitleDes(props) {
    console.log(props.margin)
    return (
        <div>
            <Title1>{props.title}</Title1>
            {props.title.includes("Create") === true && <p>Create briefs with interactive questionnaires and enjoy features such as read-receipts and electronic approval.</p>}

        </div>
    )
}

export default BriefTitleDes;
