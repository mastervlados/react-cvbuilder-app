import React from "react";

import './cv-webpage.scss'
import Row from '../row'
import PersonImage from '../person-image'
import PersonDetails from "../person-details";
import ContentBlock from '../content-block'
import AsideBlock from '../aside-block'

const CVWebpage = () => {

    return (
        <div id="cv-webpage">
            <Row leftBlock={<PersonImage/>} rightBlock={<PersonDetails/>}/>
            <Row leftBlock={<ContentBlock/>} rightBlock={<AsideBlock/>}/>
        </div>
    )
}

export default CVWebpage