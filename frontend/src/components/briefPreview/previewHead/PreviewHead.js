import React from "react";
import BriefTitleDes from "../../briefTemplate/briefHead/BriefTitleDes"
import ShareIcon from "../../briefTemplate/briefBody/ShareIcon"

import styled from "styled-components"



// style-components
const HeadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin:10px 7vw;
`;
const MyBriefButton = styled.button`
    border: none;
    text-decoration: underline;
    background-color: white;
    font-size: 1em;
    outline: none;
    color:#868a9c;
`;
const MediaWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

function PreviewHead() {
    return (
        < HeadWrapper>
            <MyBriefButton>My Briefs</MyBriefButton>
            <BriefTitleDes title="Digital Marketing Brief Questionnaire" margin />
            <MediaWrap>
                <ShareIcon preview="" />

            </MediaWrap>
        </ HeadWrapper>
    )
}

export default PreviewHead;