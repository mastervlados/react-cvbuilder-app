import React, { Component } from "react"

import './header.scss'


export default class Header extends Component {

    state = {
        language: this.props.language
    }

    onLanguageChange = (e) => {
        const language = e.target.value
        this.setState({
            language: language
        })
        this.props.onLanguageChange(language)
    }

    render() {
        return (
            <header>
                <nav>
                    <div>
                        <h1>CV Builder</h1>
                    </div>
                    <div>
                        <input type="button" id="print" onClick={() => window.print()}/>
                        <label htmlFor="print">
                            <img src={process.env.PUBLIC_URL + '/assets/img/nav/print-alt.png'} alt="Print CV"/>
                        </label>
                        <div className="space"></div>
                        <input type="button" id="download" onClick={this.props.onDownloadPdf}/>
                        <label htmlFor="download">
                            <img src={process.env.PUBLIC_URL + '/assets/img/nav/pdf.png'} alt="Save CV PDF File"/>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="en" name="language" value="en" 
                            checked={this.state.language === 'en'} 
                            onChange={this.onLanguageChange}/>
                        <label htmlFor="en">
                            <img src={process.env.PUBLIC_URL + '/assets/img/nav/us.png'} alt="English"/>
                        </label>
                        <input type="radio" id="ru" name="language" value="ru" 
                            checked={this.state.language === 'ru'} 
                            onChange={this.onLanguageChange}/>
                        <label htmlFor="ru">
                            <img src={process.env.PUBLIC_URL + '/assets/img/nav/ru.png'} alt="Русский"/>
                        </label>
                    </div>
                </nav>
            </header>
        )
    }
}



