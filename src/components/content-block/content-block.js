import React from "react";

import './content-block.scss'

import { 
    AdditionalEducation, 
    Education, 
    RecentlyCompletedProjects 
} from "../cv-components";

const ContentBlock = () => {
    return (
        <div id="content">
            <div className="group-of-cv-elements">
                <RecentlyCompletedProjects/>
                <Education/>
                <AdditionalEducation/>
            </div>
        </div>
    )
}

export default ContentBlock