import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/svarit-garazh.jpg"
import Modal from "../Modal/Modal";
import AdvertUpdate from "../AdvertUpdate"
import {BASEURL} from "../../config";

interface AdvertPageProps {
    match: {
        params: {
            id: number
        }
    },
    advert: Item
    deleteAdvert : (advert : number) => void,
    fetchAdvert: (advert: Item) => void
}

const AdvertPage: React.FC<AdvertPageProps> = (props) => {
    const { deleteAdvert, advert, fetchAdvert} = props;
    const [isModalOpen, toggleModal] = React.useState()


    useEffect(() => {
        void itemGet()
    }, []);

    const itemGet = React.useCallback(async () => {
        if (!advert) {
            const response = await fetch(`${BASEURL}api/products/` + props.match.params.id);
            const data = await response.json();
            fetchAdvert(data)
        }

    }, []);
    const deleting = React.useCallback(
        async (event) => {
            event.preventDefault();
            deleteAdvert(props.match.params.id);
            const response = await fetch(`${BASEURL}api/products/${props.match.params.id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: props.match.params.id })
            })
            window.history.back()
        },
        []
    )
    if (!advert) {
        return <div>loading</div>
    }

    return (
        <div className="container">
            <h2>Garage</h2>
            <div className="advert">
                <div className="desc-block">
                    <img src={image} alt="kek" />
                        <div className="advert-description">
                            <h2>Описание</h2>
                            <p>{advert.name}</p>
                            <p>{advert.description}</p>

                        </div>
                </div>
                <div className="advert-info">
                    <div className="main-advert-information">
                        <span>Цена:</span>
                        {advert.price}
                    </div>
                    <div className="main-advert-information">
                        <span>Характеристики:</span>
                        <br />
                            Объём, л 0,44 л<br />
                            % алкоголя 4,6<br />
                            Тара Стекло<br />
                            Бренд Garage<br />
                            Страна Россия<br />
                            Пастеризация Пастеризованное<br />
                            Тип продукта Светлое пиво<br />
                    </div>
                    <div className="main-advert-information">
                        <span>Контакты:</span><br />
                        <Link to="/profile">Профиль пользователя</Link><br /><br />
                    </div>
                    <button className="buy-button" onClick={() => toggleModal(true)}>Изменить</button>
                    {isModalOpen &&  <Modal toggleModal={() => toggleModal(false) }>
                        <AdvertUpdate toggleModal={toggleModal} id={props.match.params.id}/>
                    </Modal>}
                    <br />
                    <Link to="/" className="buy-button" onClick={deleting} >Удалить</Link>
                </div>
            </div>
        </div>
    )
};

export default AdvertPage