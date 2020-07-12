import React from "react";
import BriefHead from "./briefHead/BriefHead";
import BriefBody from "./briefBody/BriefBody";
import styled from "styled-components";
import NavBar from "../landing-page/Navbar"


//style-components

const BriefTemplateWrapp = styled.div`
overflow-x: hidden;
`;



function BriefTemplate(props) {
    //props to send to the BriefHead for the Link router
    let propsToSend = {
        match: props.match,
        history: props.history
    }
    return (
        <BriefTemplateWrapp>
            <NavBar />
            {console.log(props.match.params.id)}
            <BriefHead {...propsToSend} />
            <BriefBody {...propsToSend} />
        </BriefTemplateWrapp>
    )


}

export default BriefTemplate;