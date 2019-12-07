import React from 'react'
import { Link } from 'react-router-dom'

const Login: React.FC = () => {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const onSubmit = React.useCallback(
        async (event) => {
            const response = await fetch('http://localhost:8000/api/token/', {
                method: 'post',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })

            console.log(response)

            const { access, refresh } = await response.json()

            window.localStorage.setItem('access', access)
            window.localStorage.setItem('refresh', refresh)

        },
        [username, password]
    )

    const onChangeUsername = React.useCallback(
        (event) => {
            setUsername(event.target.value)
        },
        [username]
    )
    
    const onChangePassword = React.useCallback(
        (event) => {
            setPassword(event.target.value)
        },
        [password]
    )


    return (
        <div className="container">
            <div className="enter">
                <label className="login-label">Логин:<br />
                    <input placeholder="Телефон или электронная почта" name="name" value={username} onChange={onChangeUsername}/>
                </label><br /><br />
                <label className="login-label">Пароль:<br />
                    <input placeholder="Ваш пароль" name= "password" value={password} onChange={onChangePassword}/>
                </label><br />
                <Link to="/login" className="enter-button" onClick={onSubmit}>Войти</Link>
            </div>
        </div>
    )
};

export default Login