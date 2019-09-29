import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/test_advert.jpg";
import photo from "../../images/noavatar.jpg";

const Profile: React.FC = () => {
    return (
        <div className="container">
            <div className="content">
                <h2>Профиль Mike_Loh_Heller2000</h2>
                <div className="profile">
                    <img src={photo} alt="аватар" />
                        <div className="profile-info">
                            <span className="profile-details">Имя: </span><span
                            className="profile-details-answer"> Михаил</span><br />
                            <span className="profile-details">Фамилия: </span><span
                            className="profile-details-answer"> Геллер</span><br />
                            <span className="profile-details">Телефон: </span><span
                            className="profile-details-answer"> не указан</span><br />
                            <span className="profile-details">e-mail: </span><span
                            className="profile-details-answer"> mikehelloh2000@gmail.com</span><br />
                            <span className="profile-details">Зарегистрирован 22 сентября 2019 года </span><br />

                        </div>
                </div>
            </div>
            <h3>Другие объявления пользователя:</h3>
            <div className="profile-other-adverts">
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
                <div className="main-advert">
                    <Link to="/advertpage">
                        <h3>Объявление</h3>
                        <img src={image} alt="kek" />
                        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Profile