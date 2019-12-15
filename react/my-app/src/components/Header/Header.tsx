import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    const [isAuth, setIsAuth] = React.useState();
    if(isAuth != window.localStorage.getItem("access")){
        setIsAuth( window.localStorage.getItem("access"));
    }

    const handler = ()=>{
        window.localStorage.clear();
        setIsAuth( undefined);
    }

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
                    {!isAuth && <Link className="main-menu" to="/login">Войти</Link>}
                    {!isAuth && <Link className="main-menu" to="/registration">Регистрация</Link>}
                    {isAuth && <Link className="main-menu" to="/" >Профиль</Link>}
                    {isAuth && <Link className="main-menu" to="/" onClick={handler}>Выйти</Link>}
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