import React from "react";

import './about-me.scss'
import { CVServiceConsumer } from "../cv-service-context";

const AboutMe = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getAboutMe}) => {
                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htab')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <p className="about-me">{getAboutMe()}</p>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

export default AboutMe