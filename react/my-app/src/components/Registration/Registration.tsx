import React from 'react'
import { Link } from 'react-router-dom'
import {BASEURL} from "../../config";

const Registration: React.FC = () => {


    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleOnClick = React.useCallback(
        async (event) => {
            event.preventDefault() // из-за этого не работает проверка важных полей
            const response = await fetch(`${BASEURL}api/my/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_name: userName, password})
            })
            const data = await response.json();
            // history.push('')
        },
        [userName, password]
    )

    return (
        <div className="container">
            <div className="enter">
                <label className="login-label">Логин:<br />
                    <input placeholder="Ваш Логин" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                </label><br /><br />
                <label className="login-label">Пароль:<br />
                    <input placeholder="Ваш пароль" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                </label><br /><br />
                <label className="login-label">Email:<br />
                    <input placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label><br /><br />
                <label className="login-label">Телефон:<br />
                    <input placeholder="Ваш телефон" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </label><br /><br />
                <Link to="/" className="enter-button" onClick={handleOnClick}>Зарегистрироваться</Link>
            </div>
        </div>
    )
}

export default Registration;