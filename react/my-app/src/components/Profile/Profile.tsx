import React from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/test_advert.jpg";
import photo from "../../images/noavatar.jpg";
import {BASEURL} from "../../config";
import AdvertCard from "../AdvertCard";


interface IProfile {
    fetchAdverts: (adverts : Item[]) => void
    advertList: number[]
    match: {
        params: {
            id: number
        }
    }
}

const Profile: React.FC<IProfile> = (props) => {
    const {fetchAdverts, advertList} = props
    React.useEffect(() => {
        void itemsGet(props.match.params.id)

    }, [props.match.params.id]);
    const itemsGet = React.useCallback(async (id) => {
        const response = await fetch(`${BASEURL}api/userproducts?id=${id}`);
        const data = await response.json();
        console.log(data)
        fetchAdverts(data)

    }, []);

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
            <h3>Все объявления пользователя:</h3>
            <div className="profile-other-adverts">
                {
                    advertList.map((advertId, index) => (
                        <AdvertCard key={index} advertId={advertId}/>
                    ))
                }



                {/*<div className="main-advert">*/}
                {/*    <Link to="/advertpage">*/}
                {/*        <h3>Объявление</h3>*/}
                {/*        <img src={image} alt="kek" />*/}
                {/*        <p>Ну купи гараж,<br /> плез<br />эээ, слишь<br /> купил быстро!</p>*/}
                {/*    </Link>*/}
                {/*</div>*/}

            </div>
        </div>
    )
};

export default Profile