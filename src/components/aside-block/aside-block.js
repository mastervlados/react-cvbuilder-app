import React from "react";

import './aside-block.scss'

import KeySkills from "../key-skills";
import { 
    AdditionalInformation, 
    HelpfulLinks, 
    Languages, 
    SoftSkills 
} from "../cv-components";
import AboutMe from "../about-me";

const AsideBlock = () => {
    return (
        <aside>
            <div className="group-of-cv-elements">
                <KeySkills/>
                <SoftSkills/>
                <Languages/>
                <HelpfulLinks/>
                <AboutMe/>
                <AdditionalInformation/>
            </div>
        </aside>
    )
}

export default AsideBlock