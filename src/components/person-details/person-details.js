import React from "react";

import './person-details.scss'

import { CVServiceConsumer } from "../cv-service-context";

const PersonDetails = () => {
    return (
        <CVServiceConsumer>
            {
                ({ getPersonDetails }) => {

                    const details = getPersonDetails()
                    /** Set Title */
                    document.title = details.prefix

                    return (
                        <div className="person-details">
                            <h2>{details.fullName}</h2>
                            <div className="row">
                                <h3>{details.position}</h3>
                                {
                                    details.salary.showSalary &&
                                    <div id="salary">
                                        <span id="sum">{details.salary.amount}</span>
                                        <span id="currency">{details.salary.currencyCode}</span>
                                    </div>
                                }
                            </div>
                            <p>{`
                                ${details.info.birthday}, 
                                ${details.info.citizen}, 
                                ${details.info.employment}, 
                                ${details.info.workSchedule}
                            `}</p>
                            <div id="contacts">
                                <div className="row">
                                    <div>
                                        <span className="bordered">
                                            <span className="icon-mobile-alt"></span>
                                            <span>
                                                {details.contacts.phone}
                                            </span>
                                        </span>
                                    </div>
                                    <span className="bordered">
                                        <span className="icon-envelope"></span>
                                        <span>
                                            {details.contacts.mail}
                                        </span>
                                    </span>
                                    <span className="bordered">
                                        <span className="icon-map-marker-alt"></span>
                                        <span>
                                            {details.contacts.currentLocation}
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        </CVServiceConsumer>
    )
}

export default PersonDetails