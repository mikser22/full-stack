import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/svarit-garazh.jpg"
import Modal from "../Modal/Modal";
import AdvertUpdate from "../AdvertUpdate"
interface AdvertPageProps {
    item: Item,
    adverts: any,
    match: {
        params: {
            id: number
        }
    },
    deleteAdvert : (advert : number) => void,
}

const AdvertPage: React.FC<AdvertPageProps> = (props) => {
    const {adverts, deleteAdvert} = props;
    const [item, setItem] = React.useState<Item>({
        id: -1,
        name: "",
        description: "lel",
        price: 0
    });
    const [isModalOpen, toggleModal] = React.useState()


    useEffect(() => {
        void itemGet()
    }, []);

    const itemGet = React.useCallback(async () => {
        let data;
        if(adverts.adverts.len > 0) {
            const myId = adverts.advertList[props.match.params.id];
            data = adverts.adverts[myId];
        } else {
            const response = await fetch('http://localhost:3000/garages/' + props.match.params.id);
            data = await response.json();
        }

        setItem(data);
    }, []);
    const deleting = React.useCallback(
        async (event) => {
            event.preventDefault();
            deleteAdvert(props.match.params.id);
            const response = await fetch(`http://localhost:3000/garages/${props.match.params.id}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: item.id })
            })
            window.history.back()
        },
        []
    )
    return (
        <div className="container">
            <h2>Garage</h2>
            <div className="advert">
                <div className="desc-block">
                    <img src={image} alt="kek" />
                        <div className="advert-description">
                            <h2>Описание</h2>
                            <p>{item.name}</p>
                            <p>{item.description}</p>

                        </div>
                </div>
                <div className="advert-info">
                    <div className="main-advert-information">
                        <span>Цена:</span>
                        {item.price}
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
                        <AdvertUpdate item={item} toggleModal={toggleModal} itemGet={itemGet}/>
                    </Modal>}
                    <br />
                    <Link to="/" className="buy-button" onClick={deleting} >Удалить</Link>
                </div>
            </div>
        </div>
    )
};

export default AdvertPage