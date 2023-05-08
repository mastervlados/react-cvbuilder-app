import React, { Component } from "react";
import CVService from "../../service/cv-service";

import './app.scss'

import Header from "../header";
import CVWebpage from "../cv-webpage";
import { CVServiceProvider } from '../cv-service-context'

export default class App extends Component {
    
    state = {
        language: 'en',
        service: new CVService('en')
    }

    onLanguageChange = (language) => {
        this.setState({
            language: language,
            service: new CVService(language)
        })
    }

    render() {
        return (
            <CVServiceProvider value={this.state.service}>
                <div id="wrapper">
                    <Header 
                        language={this.state.language}
                        onLanguageChange={this.onLanguageChange}/>
                    <CVWebpage/>
                </div>  
            </CVServiceProvider>
        )
    }
}