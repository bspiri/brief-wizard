import React from "react";
import styled from "styled-components"
import { Link } from "react-router-dom"



//style-components
export const ButtonSave = styled.button`
    border: 2px solid #398af7;
    background: #398af7;
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
export const P = styled.p`
    text-align: center;
    width: 18vw;
    font-size: 1rem;
    margin: 14px 0px;
    @media(max-width : 1090px){
        font-size: 0.9rem;
    };
    @media(max-width : 800px){
        font-size: 0.8rem;
    };
    @media(max-width : 600px){
        width: 30vw;
        
    };
`;


function SaveButton(props) {

    const submit = (e) => props.data(e)
    // react router Link on the button 
    const link = () => props.history.push(`${props.url}/brief`)
    return (

        <div>
            {console.log(props.url)}
            <P>You have unsaved changes to this brief</P>


            <ButtonSave onClick={e => { submit(e); link() }} type="submit" value="Submit"  >
                Save Changes
            </ButtonSave>

        </div>
        // 
    )
}

export default SaveButton;