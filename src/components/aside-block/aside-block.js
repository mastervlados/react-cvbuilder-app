import React from "react";

import './aside-block.scss'

import KeySkills from "../key-skills";
import { AdditionalInformation, HelpfulLinks, Languages, SoftSkills } from "../cv-aside-components";
import AboutMe from "../about-me/about-me";

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