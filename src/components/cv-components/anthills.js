import React from "react";
import { CVServiceConsumer } from "../cv-service-context";
import Row from "../row";

const RecentlyCompletedProjects = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getCompletedProjects, getProjectLabels}) => {

                    const projects = getCompletedProjects().map((project) => {

                        const leftFirst = <span className="project-label">{project.name}</span>
                        const rightFirst = (
                            <span>
                                <span className="icon-folder icon-color folder-repo"></span>
                                <a href={project.url} alt={project.name} className="link-to-repo" target="_blank">{project.linkLabel}</a>
                            </span>
                        )

                        const leftSecond = (
                            <div className="left-column">
                                <span className="project-field">{getProjectLabels('projdes')}</span>
                            </div>
                        )
                        const rightSecond = <div className="right-column">{project.description}</div>

                        const leftThird = (
                            <div className="left-column">
                                <span className="project-field">{getProjectLabels('projlan')}</span>
                            </div>
                        )
                        const rightThird = <div className="right-column">{project.languages}</div>

                        const leftFourth = (
                            <div className="left-column">
                                <span className="project-field">{getProjectLabels('projenv')}</span>
                            </div>
                        )
                        const rightFourth = <div className="right-column">{project.environments}</div>

                        return (
                            <>
                                <Row leftBlock={leftFirst} rightBlock={rightFirst}/>
                                <Row leftBlock={leftSecond} rightBlock={rightSecond} classes={'overhead'}/>
                                <Row leftBlock={leftThird} rightBlock={rightThird} classes={'overhead'}/>
                                <Row leftBlock={leftFourth} rightBlock={rightFourth} classes={'overhead'}/>
                            </>
                        )
                    })

                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htrc')}</h4>
                            <div className="bold-line"></div>
                            {renderItems(projects)}
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const Education = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getEducationStage, getItemsByCategoryName}) => {

                    const items = getItemsByCategoryName('education').map((item) => {

                        const [dateStart, dateEnd] = item.range

                        const left = (
                            <div className="left-column">
                                <span className="range">{dateStart}</span>
                                <span>{dateEnd}</span>                          
                            </div>
                        )
                        
                        const right = (
                            <div className="right-column">
                                <p>
                                    <strong>{item.label}</strong>
                                </p>
                                <p className="light">
                                    <span className="place-label">{item.where}</span> 
                                    <span className="place-location">{item.place}</span>
                                </p>
                                <p>
                                    {item.details} 
                                </p>
                            </div>
                        )

                        return <Row leftBlock={left} rightBlock={right}/>
                    })

                    return (
                        <div className="cv-element">
                            <h4>{`${getSectionLabel('hted')} (${getEducationStage()})`}</h4>
                            <div className="bold-line"></div>
                            {renderItems(items)}
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const AdditionalEducation = () => {
    return (
        <CVServiceConsumer>
            {
                ({getSectionLabel, getItemsByCategoryName}) => {

                    const items = getItemsByCategoryName('certificates').map((item) => {
                        
                        const [dateStart, dateEnd] = item.range

                        const left = (
                            <div className="left-column">
                                <span className="range">{dateStart}</span>
                                <span>{dateEnd}</span>                          
                            </div>
                        )
                        
                        const right = (
                            <div className="right-column">
                                <p>
                                    <strong>{item.label}</strong>
                                </p>
                                <p className="light">
                                    <span className="icon-award icon-color award-size"></span>
                                    <span className="place-label">{item.where}</span> 
                                    <span className="place-location">{item.place}</span>
                                </p>
                                <p>
                                    {item.details} 
                                </p>
                            </div>
                        )

                        return <Row leftBlock={left} rightBlock={right}/>
                    })

                    return (
                        <div className="cv-element">
                            <h4>{getSectionLabel('htad')}</h4>
                            <div className="bold-line"></div>
                            {/* <RenderItems items={items}/> */}
                            {renderItems(items)}
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

const renderItems = (items) => {
    const data = items.map((element) => {
        return (
            <div className="ant">
                {element}
            </div>
        )
    })

    return (
        <div className="anthill">
            {data}
        </div>  
    )
}

export {
    RecentlyCompletedProjects,
    Education,
    AdditionalEducation
}