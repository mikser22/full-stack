import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import image from "../../images/svarit-garazh.jpg"

interface AdvertPageProps {
    item: Item,
    match: {
        params: {
            id: number
        }
    }
}

const AdvertPage: React.FC<AdvertPageProps> = (props) => {

    const [item, setItem] = React.useState<Item>({
        id: -1,
        name: "",
        price: 0
    });

    useEffect(() => {
        console.log(props.match);
        void itemGet()
    }, []);

    const itemGet = React.useCallback(async () => {
        const response = await fetch('http://localhost:3000/garages/' + props.match.params.id);
        const data = await response.json();
        setItem(data);
    }, []);

    return (
        <div className="container">
            <h2>Garage</h2>
            <div className="advert">
                <div className="desc-block">
                    <img src={image} alt="kek" />
                        <div className="advert-description">
                            <h2>Описание</h2>
                            <p>Несмотря на то, что {item.name} выпускают всего лишь с 2014 года, он уже приобрел поклонников
                                в странах Западной Европы и СНГ. Напиток стал частью молодежной культуры, так что объем
                                производства постоянно растет.
                            </p>

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
                    <Link to="/" className="buy-button">Купить</Link>
                </div>
            </div>
        </div>
    )
};

export default AdvertPage