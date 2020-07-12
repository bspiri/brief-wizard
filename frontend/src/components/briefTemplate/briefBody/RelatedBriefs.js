import React from "react";
// import BriefTitleDes from "../briefHead/BriefTitleDes"
import CardF from "./Card"
import { Title1 } from "../briefHead/BriefHead"


function RelatedBriefs() {

    return (
        <div style={{ background: "white", zIndex: "2", width: " 100vw" }}>
            <div  >
                <Title1 style={{ marginBottom: "40px" }}> Related Agency Brief Templates</Title1>
                <CardF />
            </div>
        </div>
    )
}

export default RelatedBriefs;