import React from "react";
import { CVServiceConsumer } from "../cv-service-context";
import ItemList from "../item-list";

const SoftSkills = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getSoftSkills}) => {
                    
                    const softSkills = getSoftSkills().map((element) => {
                        return (
                            <li>
                                <span className="icon-square"></span>
                                <span><span>{element}</span></span>
                            </li>
                        )
                    })

                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htss')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <ItemList data={softSkills}/>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const Languages = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getLanguages}) => {
                    
                    const languages = getLanguages().map(([language, level, label]) => {
                        
                        let languageDetails;

                        if (level === 'NA') {
                            languageDetails = <> - <span>{label}</span></>
                        } else {
                            languageDetails = <> - <span>{level}</span> - <span>{label}</span></>
                        }

                        return (
                            <li>
                                <span className="icon-circle"></span>
                                <span>
                                    {language}
                                    {languageDetails}
                                </span>
                            </li>
                        )
                    })

                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htla')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <ItemList data={languages}/>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const HelpfulLinks = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getHelpfulLinks}) => {

                    const links = getHelpfulLinks().map(({alt, icon, url, label}) => {
                        return (
                            <li>
                                <span className={icon}></span>
                                <a href={url} alt={alt} target="_blank">{label}</a>
                            </li>
                        )
                    })
                        
                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('hthl')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <ItemList data={links} classes={`large-icons-list`}/>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const AdditionalInformation = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getAdditionalInformation}) => {

                    const addInfo = getAdditionalInformation().map((item) => {
                        return(
                            <li>
                                <span className="icon-square"></span>
                                <span>{item}</span>
                            </li>
                        )
                    })
                        
                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htai')}</h4>
                            <div className="bold-line bold-line-cut"></div>
                            <ItemList data={addInfo}/>
                        </div>  
                    )
                }
            }
        </CVServiceConsumer>
    )
}

export {
    SoftSkills,
    Languages,
    HelpfulLinks,
    AdditionalInformation
}