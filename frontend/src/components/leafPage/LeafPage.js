import React from "react"
import PreviewBody from "../briefPreview/previewBody/PreviewBody"
import TryButton from "../briefTemplate/briefBody/TryButton";
import styled from "styled-components";
import EmailNavbar from "../wizard/EmailNavbar"

//styled components
const WrapRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    width: 62vw;

    @media(max-width : 600px){
        width: 80vw;
    };
`;
const MainWrap = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 80px 0px;
`;

function TopBtn() {
    return (
        <WrapRow>
            <p>Send a proposal based ont his brief with SuperOkay</p>
            <TryButton name="Send Proposal" try="try" />
        </WrapRow>
    )
}

function Leafpage() {
    return (
        <MainWrap>
            <EmailNavbar />
            {console.log("bfurfr")}
            <TopBtn />
            <PreviewBody leafPage="leaf" />
            <TopBtn />
        </MainWrap>
    )
}

export default Leafpage;