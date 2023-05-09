import React from "react";

import './key-skills.scss'

import { CVServiceConsumer } from "../cv-service-context";

const KeySkills = () => {
    return (
        <CVServiceConsumer>
            {
                ({ getSectionLabel, getKeySkillsFromCategory }) => {
                    const frontend = getKeySkillsFromCategory('frontend')
                    const backend = getKeySkillsFromCategory('backend')
                    const other = getKeySkillsFromCategory('other')
                    
                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htks')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <RenderSkills skills={frontend}/>
                            <p></p>
                            {/* <!-- Backend: second --> */}
                            {/* {getKeySkillsFromCategory('backend')} */}
                            <p></p>
                            {/* <!-- Other: last --> */}
                            {/* {getKeySkillsFromCategory('other')} */}
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const RenderSkills = ({ skills }) => {
    console.log(skills)
}

export default KeySkills