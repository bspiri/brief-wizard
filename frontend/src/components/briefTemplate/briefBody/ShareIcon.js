import React from "react";
import IconButton from "@material-ui/core/IconButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import styled from "styled-components"

//style-components
const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-content: center;
`;
const ShareWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: flex-left;
    text-align: center; 
    margin-bottom: 1vw;
    margin-right: 4vw;
`;



function ShareIcon(props) {
    return (
        <ShareWrapper>
            {props.template ? <p>Share this brief template</p> : <p style={{ margin: "16px 0px" }}>Share this brief </p>}
            <IconWrapper>
                <IconButton  >
                    <FontAwesomeIcon icon={faTwitter} size="xs" style={{ border: "solid 3px", borderRadius: "50%", padding: "3px" }} />
                </IconButton>
                <IconButton >
                    <FontAwesomeIcon icon={faFacebookF} size="xs" style={{ border: "solid 3px", borderRadius: "50%", padding: "3px" }} />
                </IconButton>
                <IconButton >
                    <FontAwesomeIcon icon={faLinkedinIn} size="xs" style={{ border: "solid 3px", borderRadius: "50%", padding: "3px" }} />
                </IconButton>
            </IconWrapper>

        </ShareWrapper >
    )
}

export default ShareIcon; 