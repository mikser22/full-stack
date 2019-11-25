import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className="header-info">
            <header>
                <h2>Аукцион Гараж</h2>
            </header>

            <span className="menu">
                <span className="main-left-menu">
                    <Link className="main-menu" to="/">Главная</Link>
                    <Link className="main-menu" to="/advertcreate">Создать объявление</Link>
                    <a className="main-menu" href='https://ru.wikipedia.org/wiki/Помощь' target="_blank">Помощь</a>
                </span>
                <span className="autorization">
                    <Link className="main-menu" to="/login">Войти</Link>
                    <Link className="main-menu" to="/login">Регистрация</Link>
                </span>
            </span>
            <hr/>
                <div className="search">
                    <label>
                        <input className="search-input" placeholder="  Поиск по объявлениям и аукционам"/>
                        <input className="search-button" type="button" value="Искать"/>
                    </label>
                </div>
                <hr/>
        </div>
    )
};

export default Header