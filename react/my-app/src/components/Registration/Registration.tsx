import React from 'react'
import { Link } from 'react-router-dom'
import {BASEURL} from "../../config";
import Modal from "../Modal/Modal";
import Message from "../Message";

interface IRegistration{
    history: {
        push: (url: string) => void
    }
}

const Registration: React.FC<IRegistration> = (props) => {
    const {history} = props


    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [name, setName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const [isModalOpen, toggleModal] = React.useState(false);
    const [errorCode, setErrorCode] = React.useState(0);
    const [errorText, setErrorText] = React.useState('');

    const handleOnClick = React.useCallback(
        async (event) => {
            event.preventDefault() // из-за этого не работает проверка важных полей
            const data = JSON.stringify({
                username:userName,
                password,
                first_name:name,
                last_name:lastName,
                email
            })
            const response = await fetch(`${BASEURL}api/users/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
            })
            if(response.status >= 200 && response.status < 300){
                history.push(`/login`)
            } else {
                setErrorCode(response.status);
                setErrorText(response.statusText);
                toggleModal(true)
            }



        },
        [userName, password, name, lastName, email]
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
                <label className="login-label">Имя:<br />
                    <input placeholder="Ваше имя" value={name} onChange={(e)=> setName(e.target.value)}/>
                </label><br /><br />
                <label className="login-label">Фамилия:<br />
                    <input placeholder="Ваша фамилия" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
                </label><br /><br />
                <label className="login-label">Email:<br />
                    <input placeholder="Ваш email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label><br /><br />
                <Link to="/" className="enter-button" onClick={handleOnClick}>Зарегистрироваться</Link>
            </div>
            <div>
                {isModalOpen && (
                    <Modal toggleModal={() => toggleModal(false)} isError={true}>
                        <Message errorText={errorText} errorCode={errorCode} needAdditional={true}/>
                    </Modal>
                )}
            </div>
        </div>
    )
}

export default Registration;