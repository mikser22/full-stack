import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    return (
        <div className="container">
            <div className="enter">
                <label className="login-label">Логин:<br />
                    <input placeholder="Телефон или электронная почта" />
                </label><br /><br />
                <label className="login-label">Пароль:<br />
                    <input placeholder="Ваш пароль" />
                </label><br /><br />
                <label className="login-label">Email:<br />
                    <input placeholder="Ваш email" />
                </label><br /><br />
                <label className="login-label">Телефон:<br />
                    <input placeholder="Ваш телефон" />
                </label><br /><br />
                <Link to="/login" className="enter-button">Войти</Link>
            </div>
        </div>
    )
};

export default Login