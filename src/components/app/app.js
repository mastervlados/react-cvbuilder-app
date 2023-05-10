import React, { Component } from "react";
import CVService from "../../service/cv-service";

import './app.scss'

import Header from "../header";
import CVWebpage from "../cv-webpage";
import { CVServiceProvider } from '../cv-service-context'
import html2pdf from "html2pdf.js";

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

    onDownloadPdf = () => {
        const cv = document.getElementById("cv-webpage")
        const opt = {
            margin:       [-10, 0],
            pagebreak: false,
            filename:      document.title + '.pdf',
            image:        { type: 'jpeg', quality: 1.00 },
            html2canvas:  { scale: 4 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait', putOnlyUsedFonts: true, }
          };
        html2pdf().set(opt).from(cv).save()
        
    }

    render() {
        return (
            <CVServiceProvider value={this.state.service}>
                <div id="wrapper">
                    <Header 
                        language={this.state.language}
                        onLanguageChange={this.onLanguageChange}
                        onDownloadPdf={this.onDownloadPdf}/>
                    <CVWebpage/>
                </div>  
            </CVServiceProvider>
        )
    }
}
