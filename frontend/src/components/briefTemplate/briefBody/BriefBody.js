import React from "react";
import BriefPreview from "./BriefPreview"
import ShareIcon from "./ShareIcon"
import TryButton from "./TryButton"
import RelatedBriefs from "./RelatedBriefs"
import styled from "styled-components"
import EmailInput from "../briefHead/EmailInput"

//style-components
const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 5vw;
    margin-top:1vw;
    @media (max-width: 800px){
        align-items: center;
    };
`;
const PreviewCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1vw 5vw;
    @media (max-width: 800px){
        flex-direction: none;
        justify-content: center;
        align-items: center;
    };
    
`;
export const StickySide = styled.div`
    position: fixed;
    z-index: 1;
    left: 75vw;
    top: ${props => props.preview ? "55vh" : "67vh"};
    @media (max-width: 900px){

    };
    @media (max-width: 800px){
        display: ${props => !props.preview && "none"};
    };
    @media (max-width: 600px){
        // display: ${props => !props.preview && "none"};
        position: ${props => props.preview && "static"};
        display: ${props => props.preview && "flex"};
        flex-direction: column;
        justify-content:flex-start;
        margin-left: ${props => props.preview && "4vw"};
        margin-bottom: ${props => props.preview && "4vw"};
        
    };
`;



function BriefBody(props) {
    //props to send to the EmailInput for the Link router
    let propsToSend = {
        url: props.match.url,
        history: props.history
    }
    return (
        <BodyWrapper>
            <PreviewCont>
                <BriefPreview {...propsToSend} />
                <StickySide>
                    <ShareIcon template="" />
                    <EmailInput template="" {...propsToSend} />
                    <TryButton first="Free Forever Plan" />
                </StickySide>
            </PreviewCont>
            <RelatedBriefs />
        </BodyWrapper>
    )
}

export default BriefBody