import React from "react";

import './aside-block.scss'

import KeySkills from "../key-skills/key-skills";

const AsideBlock = () => {
    return (
        <aside>
            <div className="group-of-cv-elements">
                <KeySkills/>
                <div className="cv-element">
                    <h4>Гибкие навыки</h4>
                    <div className="bold-line bold-line-cut"></div>
                    <ul>
                        <li>
                            <span className="icon-square"></span>
                            <span>Умение находить и реализовывать оптимальные решения</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Системное мышление</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Умение задавать вопросы</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Самостоятельность</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Ответственный подход к работе</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Оценка времени</span>
                        </li>
                    </ul>
                </div>
                <div className="cv-element">
                    <h4>Знание языков</h4>
                    <div className="bold-line bold-line-cut"></div>
                    <ul>
                        <li>
                            <span className="icon-circle"></span>
                            <span>Русский - <span>Native</span></span>
                        </li>
                        <li>
                            <span className="icon-circle"></span>
                            <span>English - <span>B1</span> - <span>Intermediate</span></span>
                        </li>
                    </ul>
                </div>
                <div className="cv-element">
                    <h4>Полезные ссылки</h4>
                    <div className="bold-line bold-line-cut"></div>
                    <ul className="large-icons-list">
                        <li>
                            <span className="icon-telegram"></span>
                            <a href="http://#" alt="GitHub">t.me/velizarovdev</a>
                        </li>
                        <li>
                            <span className="icon-github"></span>
                            <a href="http://#" alt="GitHub">github.com/v-elizarov</a>
                        </li>
                        <li>
                            <span className="icon-yin-yang"></span>
                            <a href="http://#" alt="CodeWars">codewars.com/users/v-elizarov</a>
                        </li>
                    </ul>
                </div>
                <div className="cv-element">
                    <h4>Обо мне</h4>
                    <div className="bold-line bold-line-cut"></div>
                    <p id="about-me">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa nobis placeat nostrum minima labore dolorum magnam, voluptas saepe eligendi distinctio ipsam harum in sunt amet odit accusantium autem at earum.</p>
                </div>
                <div className="cv-element">
                    <h4>Дополнительная<br/>информация</h4>
                    <div className="bold-line bold-line-cut"></div>
                    <ul>
                        <li>
                            <span className="icon-square"></span>
                            <span>Слепой метод печати</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Права категории B</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Не готов к переезду</span>
                        </li>
                        <li>
                            <span className="icon-square"></span>
                            <span>Не готов к командировкам</span>
                        </li>
                    </ul>
                </div>
            </div>    
        </aside>
    )
}

export default AsideBlock