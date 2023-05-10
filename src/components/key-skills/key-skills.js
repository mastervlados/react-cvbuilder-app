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
                            {/* <!-- Frontend: first --> */}
                            <RenderSkills skills={frontend}/>
                            <p></p>
                            {/* <!-- Backend: second --> */}
                            <RenderSkills skills={backend}/>
                            <p></p>
                            {/* <!-- Other: last --> */}
                            <RenderSkills skills={other}/>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const RenderSkills = ({ skills }) => {
    const listSkills = skills.map((item) => {

        if (item.length > 1) {

            const subSkills = item.map((subSkill) => {
                if (item.indexOf(subSkill) !== 0) {
                    return <h5>{subSkill}</h5>
                }
            })

            return (
                <>
                    <h6>{item[0]}</h6>
                    {'('}
                        {subSkills}
                    {') '}
                </>

            )
        } else {
            return <h6>{item[0]}</h6>
        }
        
    })

    return (
        <>
            { listSkills }
        </>
    )
}

export default KeySkills