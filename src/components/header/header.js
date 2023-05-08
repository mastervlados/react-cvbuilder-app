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
                            <img src="./assets/img/nav/print.png" alt="Print this CV"/>
                        </label>
                    </div>
                    <div>
                        <input type="radio" id="en" name="language" value="en" 
                            checked={this.state.language === 'en'} 
                            onChange={this.onLanguageChange}/>
                        <label htmlFor="en">
                            <img src="./assets/img/nav/us.png" alt="English"/>
                        </label>
                        <input type="radio" id="ru" name="language" value="ru" 
                            checked={this.state.language === 'ru'} 
                            onChange={this.onLanguageChange}/>
                        <label htmlFor="ru">
                            <img src="./assets/img/nav/ru.png" alt="Русский"/>
                        </label>
                    </div>
                </nav>
            </header>
        )
    }
}



