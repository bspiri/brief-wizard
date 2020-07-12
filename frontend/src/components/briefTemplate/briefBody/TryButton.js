import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from "@fortawesome/free-solid-svg-icons"

//style-components
const ButtonTry = styled.button`
    border: 2px solid #34c749;
    background: #34c749;
    color: white;
    border-radius: 5px;
    height: fit-content;
    font-size: 1.3rem;
    font-weight: 800;
    width: 18vw;
    padding: 1vw 1vh;
    outline: none;
    @media(max-width : 1090px){
        font-size: 1.1rem;
    };
    @media(max-width : 800px){
        font-size: 1rem;
    };
    @media(max-width : 600px){
        width: 30vw;
    };
`;
const CheckTicks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    margin-left: 2vw;
    margin-right: 5vw;
    @media (max-width : 600px){
        justify-content: center;
    }
`;
const Wrappackage = styled.div`
    width: 23vw; 
    display:flex;
    flex-direction: column;
    align-items: center; 
`;
const TryTitle = styled.h3`
    width: 18vw;
    margin: 18px 0px;
    text-align: center;
    @media(max-width : 1090px){
        font-size: 1.1rem;
    };
    @media(max-width : 800px){
        font-size: 1rem;
    };
    @media(max-width : 600px){
        width: 30vw;
        text-align: center;
        font-size: 1.2rem;
    };
`;

function TryButton(props) {
    console.log(props.first)
    return (
        <Wrappackage>
            {props.title && <TryTitle>{props.title}</TryTitle>}
            {props.try === "try" && (<ButtonTry >
                {props.name}
            </ButtonTry>)}

            {!props.name === "Send Proposal" && (  //only in preview body
                <CheckTicks >
                    <FontAwesomeIcon icon={faCheck} size="xs" color={props.try === "try" ? "#34c749" : "black"} style={{ margin: "16px 5px" }} />
                    <p style={{ fontSize: "0.8em", margin: "13px 0px" }}>{props.first}</p>
                    <FontAwesomeIcon icon={faCheck} size="xs" color={props.try === "try" ? "#34c749" : "black"} style={{ margin: "16px 5px" }} />
                    <p style={{ fontSize: "0.8em", margin: "13px 0px" }}>No spam</p>
                </CheckTicks>
            )}


        </Wrappackage>
    )
}

export default TryButton;