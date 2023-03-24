import React from "react";
import resumeAsset from "../../assets/My Resume.pdf";



export default function Resume () {
    return (
        <div className={"portfolioCard cardBorder resumeCard"}>
            <h1>Resume</h1>
            My resume can be downloaded <a href={resumeAsset}>here</a>

        </div>
    )
}