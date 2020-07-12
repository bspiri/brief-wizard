import React from "react";
import PreviewHead from "./previewHead/PreviewHead";
import PreviewBody from "./previewBody/PreviewBody";
import styled from "styled-components";
import EmailNavbar from "../wizard/EmailNavbar"


//style-components

const BriefPreviewWrapp = styled.div`
overflow-x: hidden;
`;




function BriefPreview(props) {
    //props to send to the PreviewBody for the Link router
    let propsToSend = {
        url: props.match.url,
        history: props.history
    }
    return (
        <BriefPreviewWrapp>
            <EmailNavbar />
            {console.log(props.history)}
            <PreviewHead />
            <PreviewBody {...propsToSend} />
        </BriefPreviewWrapp>
    )


}

export default BriefPreview;