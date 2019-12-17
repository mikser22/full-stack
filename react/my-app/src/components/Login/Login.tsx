import React from 'react'
import { Link } from 'react-router-dom'
import {BASEURL} from '../../config'
import Modal from "../Modal/Modal";
import Message from "../Message";

interface ILoginProps {
    history: {
        push: (url: string) => void
    }
}

const Login: React.FC<ILoginProps> = (props) => {
    const {history} = props;
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const [isModalOpen, toggleModal] = React.useState(false);
    const [errorCode, setErrorCode] = React.useState(0);
    const [errorText, setErrorText] = React.useState('');

    const onSubmit = React.useCallback(
        async (event) => {
            const response = await fetch(`${BASEURL}api/token/`, {
                method: 'post',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                })
            })
            const { access, refresh } = await response.json()
            if(response.status == 200) {
                window.localStorage.setItem('user', username)

                window.localStorage.setItem('access', access)
                window.localStorage.setItem('refresh', refresh)

                const response2 = await fetch(`${BASEURL}api/my_user/`, {
                    method: 'get',
                    headers: {
                        Authorization: `Bearer ${access}`,
                        'Content-Type': 'application/json'
                    }
                });
                const res = await response2.json()
                window.localStorage.setItem('user_id', res[0].id)


                history.push(`/profile/${res[0].id}`)
                window.location.reload()
            } else{
                setErrorCode(response.status);
                setErrorText("Неверный логин или пароль");
                toggleModal(true)
            }


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
                    <input placeholder="Ваш пароль" name= "password" value={password} onChange={onChangePassword} type="password"/>
                </label><br />
                <Link to="/login" className="enter-button" onClick={onSubmit}>Войти</Link>
            </div>
            <div>
                {isModalOpen && (
                    <Modal toggleModal={() => toggleModal(false)} isError={true}>
                        <Message errorText={errorText} errorCode={errorCode} needAdditional={false}/>
                    </Modal>
                )}
            </div>
        </div>
    )
};

export default Login