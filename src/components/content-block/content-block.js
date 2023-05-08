import React from "react";

import './content-block.scss'

const ContentBlock = () => {
    return (
        <div id="content">
            <div className="group-of-cv-elements">
                <div className="cv-element">
                    <h4>Недавно завершенные проекты</h4>
                    <div className="bold-line"></div>
                    <div className="anthill">
                        <div className="ant">
                            <div className="row">
                                <span className="project-label">My Project</span>
                                <span>
                                    <span className="icon-folder icon-color folder-repo"></span>
                                    <a href="#" alt="repo" className="link-to-repo">github.com/../react-cvbuilder-app</a>
                                </span>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Description</span>
                                </div>
                                <div className="right-column">
                                    This project is designed to help client’s and their managers to complete multiple-step application
                                    flow using Excel file. It provides an ability to avoid general approach on how clients buy their
                                    healthcare, instead using this app they are able to upload all the data from the same Excel file each
                                    year.
                                </div>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Languages</span>
                                </div>
                                <div className="right-column">
                                    Java, SQL
                                </div>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Environments</span>
                                </div>
                                <div className="right-column">
                                    Spring Boot, Spring MVC, Spring security, HTML, CSS, jQuery, AJAX, Bootstrap, Hibernate, Spring
                            Data JPA, MS SQL Server 2012
                                </div>
                            </div>
                        </div>
                        <div className="ant">
                            <div className="row">
                                <span className="project-label">My Project</span>
                                <span>
                                    <span className="icon-folder icon-color folder-repo"></span>
                                    <a href="#" alt="repo" className="link-to-repo">github.com/../react-cvbuilder-app</a>
                                </span>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Description</span>
                                </div>
                                <div className="right-column">
                                    This project is designed to help client’s and their managers to complete multiple-step application
                                    flow using Excel file. It provides an ability to avoid general approach on how clients buy their
                                    healthcare, instead using this app they are able to upload all the data from the same Excel file each
                                    year.
                                </div>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Languages</span>
                                </div>
                                <div className="right-column">
                                    Java, SQL
                                </div>
                            </div>
                            <div className="row overhead">
                                <div className="left-column">
                                    <span className="project-field">Environments</span>
                                </div>
                                <div className="right-column">
                                    Spring Boot, Spring MVC, Spring security, HTML, CSS, jQuery, AJAX, Bootstrap, Hibernate, Spring
                            Data JPA, MS SQL Server 2012
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cv-element">
                    <h4>Образование (Бакалавр)</h4>
                    <div className="bold-line"></div>
                    <div className="anthill">
                        <div className="ant">
                            <div className="row">
                                <div className="left-column">
                                    <span className="range">Сентябрь 2015</span>
                                    <span>июль 2020</span>
                                </div>
                                <div className="right-column">
                                    <p><strong>Бакалавр Прикладной информатики</strong></p>
                                    <p className="light">
                                        <span className="icon-award icon-color award-size"></span>
                                        <span className="place-label">Университет промышленных технологий и дизайна</span> 
                                        <span className="place-location">Санкт-Петербург, Россия</span>
                                    </p>
                                    <p>
                                        09.03.03 Прикладная информатика, направление подготовки: «прикладная информатика в экономике» 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="ant">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContentBlock